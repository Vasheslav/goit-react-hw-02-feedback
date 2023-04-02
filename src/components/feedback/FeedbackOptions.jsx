import PropTypes from "prop-types";
import { Button } from './FeedbackOptions.styled';


const FeedbackOptions = ({ onClickButtonGood, onClickButtonNeutral, onClickButtonBad }) => {
    return <div>
        <Button type='button' onClick={onClickButtonGood}>Good</Button>
        <Button type='button' onClick={onClickButtonNeutral}>Neutral</Button>
        <Button type='button' onClick={onClickButtonBad}>Bad</Button>
    </div>
}

FeedbackOptions.propTypes = {
    onClickButtonGood: PropTypes.func.isRequired,
    onClickButtonNeutral: PropTypes.func.isRequired,
    onClickButtonBad: PropTypes.func.isRequired,
}

export default FeedbackOptions;