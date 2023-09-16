import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ smallImg, alt, largeImg }) => {
    return (
        <li className="gallery-item">
            <img className="gallery-item-img" src={smallImg} alt={alt} />
            <Modal imgSrc={largeImg} alt={alt} />
        </li>
    );
};

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
