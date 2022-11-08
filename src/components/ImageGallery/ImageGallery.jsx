import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const Gallery = ({ images }) => {
  return (
    <List>
      <GalleryItem images={images} />
    </List>
  );
};
