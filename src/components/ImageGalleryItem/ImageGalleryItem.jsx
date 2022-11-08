import { Image, Item } from './ImageGalleryItem.styled';

export const GalleryItem = ({ images }) => {
  return (
    <>
      {images.map(image => (
        <Item key={image.id}>
          <Image src={image.webformatURL} alt="" />
        </Item>
      ))}
    </>
  );
};
