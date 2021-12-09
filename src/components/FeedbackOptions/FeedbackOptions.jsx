import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map((option, index) => (
    <button
      type="button"
      onClick={onLeaveFeedback[index]}
      className={styles[`${option}`]}
      key={option}
    >
      {option}
    </button>
  ));

  return <> {buttons}</>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func),
};
