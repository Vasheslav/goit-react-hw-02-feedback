import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedBack }) => {
  return (
    <div>
      <Button type="button" onClick={() => onLeaveFeedBack('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => onLeaveFeedBack('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onLeaveFeedBack('bad')}>
        Bad
      </Button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedBack: PropTypes.func.isRequired,
};

export default FeedbackOptions;
