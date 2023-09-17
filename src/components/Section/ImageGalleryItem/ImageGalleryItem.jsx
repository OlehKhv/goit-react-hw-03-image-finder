import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
    largeImg,
    smallImg,
    alt,
    getImgUrl,
    toggleModal,
}) => {
    const onClick = () => {
        getImgUrl(largeImg);
        toggleModal();
    };
    return (
        <GalleryItem onClick={onClick}>
            <GalleryItemImg src={smallImg} alt={alt} />
        </GalleryItem>
    );
};

ImageGalleryItem.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    getImgUrl: PropTypes.func.isRequired,
    smallImg: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
