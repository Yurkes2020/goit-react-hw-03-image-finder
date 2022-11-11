import PropTypes from 'prop-types';

import { LoadMore } from './Button.styled';

export const Load = ({ loadMore }) => {
  return (
    <LoadMore type="button" onClick={loadMore}>
      Load more
    </LoadMore>
  );
};

Load.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
