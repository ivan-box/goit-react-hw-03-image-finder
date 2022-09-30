import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className="gallery">
      {items.map(item => (
        <ImageGalleryItem
          key={Math.random().toString(36).substr(2, 9)}
          itemData={item}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
