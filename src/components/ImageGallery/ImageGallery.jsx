import PropTypes from 'prop-types';

import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const Gallery = ({ images, modal }) => {
  return (
    <List>
      <GalleryItem images={images} openModal={modal} />
    </List>
  );
};

Gallery.propTypes = {
  modal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
