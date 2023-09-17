import PropTypes from 'prop-types';
import { NotificationText } from './ImageGallery.styled';

export const Notification = ({ message }) => {
    return <NotificationText>{message}</NotificationText>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
