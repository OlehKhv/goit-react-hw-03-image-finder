import { Component } from 'react';
import PropTypes from 'prop-types';
import { getImages } from 'services/image-api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Notification from './Notification';
import { ErrorNotification } from './ErorrNotification';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
    static propTypes = {
        toggleModal: PropTypes.func.isRequired,
        getImgUrl: PropTypes.func.isRequired,
        searhQuery: PropTypes.string.isRequired,
    };

    state = {
        images: [],
        pages: null,
        currentPage: 1,
        isLoading: false,
        isShowBtn: false,
        isShowNotification: false,
        error: null,
        searhQuery: '',
    };

    componentDidUpdate = async (_, prevState) => {
        if (this.props.searhQuery !== this.state.searhQuery) {
            this.setState({
                currentPage: 1,
                searhQuery: this.props.searhQuery,
            });
        }

        if (prevState.searhQuery !== this.state.searhQuery) {
            this.fetchByQuery();
            return;
        }

        if (prevState.currentPage !== this.state.currentPage) {
            this.fetchByBtn();
        }
    };

    fetchByQuery = async () => {
        this.setState({
            isLoading: true,
            isShowBtn: false,
        });
        try {
            const data = await getImages(
                this.state.searhQuery,
                this.state.currentPage
            );
            this.setState({
                images: data.hits,
                pages: Math.ceil(data.totalHits / 12),
                isShowBtn: Math.ceil(data.totalHits / 12) > 1 ? true : false,
                error: null,
                isShowNotification: data.totalHits === 0 ? true : false,
            });
        } catch (error) {
            this.setState({ error: error.message });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    fetchByBtn = async () => {
        try {
            const data = await getImages(
                this.props.searhQuery,
                this.state.currentPage
            );
            this.setState(
                prev => ({
                    images: [...prev.images, ...data.hits],
                    isShowBtn:
                        this.state.currentPage === this.state.pages
                            ? false
                            : true,
                    error: null,
                    isShowNotification: data.totalHits === 0 ? true : false,
                }),
                () => {
                    window.scrollBy({
                        top: 584,
                        behavior: 'smooth',
                    });
                }
            );
        } catch (error) {
            this.setState({ error: error.response.data });
        }
    };

    handleLoadMore = () => {
        this.setState(prev => ({
            currentPage: prev.currentPage + 1,
        }));
    };

    render() {
        const {
            images,
            isShowBtn,
            isLoading,
            searhQuery,
            error,
            isShowNotification,
        } = this.state;

        return (
            <>
                {isLoading && <Loader />}

                {images.length > 0 && !isLoading && (
                    <Gallery>
                        {images.map(
                            ({ id, webformatURL, largeImageURL, tags }) => (
                                <ImageGalleryItem
                                    getImgUrl={this.props.getImgUrl}
                                    toggleModal={this.props.toggleModal}
                                    key={id}
                                    smallImg={webformatURL}
                                    largeImg={largeImageURL}
                                    alt={tags}
                                />
                            )
                        )}
                    </Gallery>
                )}

                {isShowNotification && !isLoading && (
                    <Notification
                        message={`Sorry, there are no images matching your search query: ${searhQuery}. Please change your search parameters and try again.`}
                    />
                )}

                {error && !isLoading && (
                    <ErrorNotification
                        message={`Oops Something went wrong. Error: ${error}. Please try again.`}
                    />
                )}

                {isShowBtn && <Button onClick={this.handleLoadMore} />}
            </>
        );
    }
}

export default ImageGallery;
