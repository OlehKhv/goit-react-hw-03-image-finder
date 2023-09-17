import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export class Section extends Component {
    state = { searhQuery: '', isShowModal: false, largeImgUrl: '' };

    onSubmit = value => {
        if (value && value !== this.state.searhQuery) {
            this.setState({ searhQuery: value });
        }
    };

    getImgUrl = imgUrl => {
        this.setState({ largeImgUrl: imgUrl });
    };

    toggleModal = () => {
        this.setState(prev => ({ isShowModal: !prev.isShowModal }));
    };

    render() {
        return (
            <section>
                <Searchbar onSubmit={this.onSubmit} />
                <ImageGallery
                    searhQuery={this.state.searhQuery}
                    getImgUrl={this.getImgUrl}
                    toggleModal={this.toggleModal}
                />
                {this.state.isShowModal && (
                    <Modal
                        imgUrl={this.state.largeImgUrl}
                        toggleModal={this.toggleModal}
                    />
                )}
            </section>
        );
    }
}

export default Section;
