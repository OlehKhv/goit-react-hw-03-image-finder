import { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class Section extends Component {
    static propTypes = {};

    state = { searhQuery: '' };

    onSubmit = value => {
        if (value && value !== this.state.searhQuery) {
            this.setState({ searhQuery: value });
        }
    };

    render() {
        return (
            <section>
                <Searchbar onSubmit={this.onSubmit} />
                <ImageGallery searhQuery={this.state.searhQuery} />
            </section>
        );
    }
}

export default Section;
