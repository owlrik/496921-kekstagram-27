import {getPhotos} from './data.js';
import {renderPictures, getPictures} from './picture.js';
import {showBigPicture} from './big-picture.js';

const photos = getPhotos();

renderPictures(photos);

const pictures = getPictures();

pictures.forEach((picture, index) => {
  picture.addEventListener('click', () => {
    showBigPicture(photos[index]);
  });
});
