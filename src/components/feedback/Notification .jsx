import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
