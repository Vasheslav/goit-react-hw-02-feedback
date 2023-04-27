import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedBack(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedBack: PropTypes.func.isRequired,
};

export default FeedbackOptions;
