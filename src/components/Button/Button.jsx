import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ pageUpdate }) => {
  return (
    <button type="button" onClick={pageUpdate}>
      Load more
    </button>
  );
};
Button.propTypes = {
  pageUpdate: PropTypes.func,
};
export default Button;
