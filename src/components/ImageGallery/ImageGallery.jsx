import PropTypes from 'prop-types';

import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const Gallery = ({ images, modal }) => {
  return (
    <List>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <GalleryItem
          onClick={modal}
          key={id}
          largeImg={largeImageURL}
          image={webformatURL}
          tag={tags}
        />
      ))}
    </List>
  );
};

Gallery.propTypes = {
  modal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
