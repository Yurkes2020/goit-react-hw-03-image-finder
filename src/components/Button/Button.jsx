import { LoadMore } from './Button.styled';

export const Load = ({ loadMore }) => {
  // function smoothScroll() {
  //   const { height: cardHeight } =
  //     galleryRef.firstElementChild.getBoundingClientRect();
  //   console.log({ height: cardHeight });
  //   window.scrollBy({
  //     top: cardHeight * 2,
  //     behavior: 'smooth',
  //   });
  // }
  return (
    <LoadMore type="button" onClick={loadMore}>
      Load more
    </LoadMore>
  );
};
