import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export const GalleryItem = ({ images, openModal }) => {
  return (
    <>
      {images.map(image => (
        <Item key={image.id} onClick={() => openModal(image)}>
          <Image src={image.webformatURL} alt={image.tags} />
        </Item>
      ))}
    </>
  );
};

GalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
