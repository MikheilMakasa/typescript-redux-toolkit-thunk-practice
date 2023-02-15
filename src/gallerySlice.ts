import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GalleryProps } from './types';

interface GalleryState {
  photos: GalleryProps[];
  isLoading: boolean;
}

const initialState: GalleryState = {
  photos: [],
  isLoading: false,
};

export const getPhotos = createAsyncThunk('photos/getPhotos', async () => {
  const response = await fetch(`https://picsum.photos/v2/list?page=3&limit=9`);
  const formattedResponse = await response.json();
  return formattedResponse;
});

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPhotos.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPhotos.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default gallerySlice.reducer;
