import PropTypes from 'prop-types';
import { ErorrNotificationText } from './ImageGallery.styled';

export const ErrorNotification = ({ message }) => {
    return <ErorrNotificationText>{message}</ErorrNotificationText>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
