import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Overlay, Popup } from './Modal.styled';

class Modal extends Component {
    static propTypes = {
        toggleModal: PropTypes.func.isRequired,
        imgUrl: PropTypes.string.isRequired,
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handlePressEsc);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlePressEsc);
    }

    handlePressEsc = () => {
        this.props.toggleModal();
    };

    onClick = e => {
        e.stopPropagation();
    };

    render() {
        const { imgUrl, alt, toggleModal } = this.props;

        return (
            <Overlay className="overlay" onClick={toggleModal}>
                <Popup onClick={this.onClick}>
                    <img src={imgUrl} alt={alt} onClick={this.onClick} />
                </Popup>
            </Overlay>
        );
    }
}

export default Modal;
