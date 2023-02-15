import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './gallerySlice';
import { AppDispatch, RootState } from './store';
import { GalleryProps } from './types';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const photos = useSelector<RootState, GalleryProps[]>(
    (store) => store.gallery.photos
  );

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  return (
    <div className='App'>
      <h1>PHOTO GALLERY</h1>
      <p>
        This is a photo gallery made using redux toolkit, redux thunk and
        TypeScript.
      </p>
      <hr />
      <div className='Gallery'>
        {photos.map((photo) => (
          <img
            key={photo.id}
            alt={photo.author}
            src={photo.download_url}
            width='400'
            height='400'
          />
        ))}
      </div>
    </div>
  );
}

export default App;
