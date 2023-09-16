import { Component } from 'react';
import PropTypes from 'prop-types';
import { getImages } from 'services/image-api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

export class ImageGallery extends Component {
    static propTypes = {};

    state = {
        images: [],
        pages: null,
        currentPage: 1,
        isLoading: false,
        isShowBtn: false,
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
                pages: Math.ceil(data.totalHits / 200),
                isShowBtn: Math.ceil(data.totalHits / 200) > 1 ? true : false,
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
            this.setState(prev => ({
                images: [...prev.images, ...data.hits],
                isShowBtn:
                    this.state.currentPage === this.state.pages ? false : true,
            }));
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
        const { images, isShowBtn, isLoading } = this.state;

        return (
            <>
                {isLoading ? (
                    <Loader />
                ) : (
                    <ul className="gallery">
                        {images.map(
                            ({ id, webformatURL, largeImageURL, tags }) => (
                                <ImageGalleryItem
                                    key={id}
                                    smallImg={webformatURL}
                                    largeImg={largeImageURL}
                                    alt={tags}
                                />
                            )
                        )}
                    </ul>
                )}

                {isShowBtn && <Button onClick={this.handleLoadMore} />}
            </>
        );
    }
}

export default ImageGallery;
