import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export const GalleryItem = ({ image, tag, largeImg, onClick }) => {
  return (
    <>
      <Item>
        <Image onClick={() => onClick(largeImg, tag)} src={image} alt={tag} />
      </Item>
    </>
  );
};

GalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
