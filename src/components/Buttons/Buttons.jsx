import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

const Buttons = ({ good, bad, neutral }) => {
  return (
    <>
      <button className={styles['btn-good']} type="button" onClick={good}>
        Good
      </button>
      <button className={styles['btn-neutral']} type="button" onClick={neutral}>
        Neutral
      </button>
      <button className={styles['btn-bad']} type="button" onClick={bad}>
        Bad
      </button>
    </>
  );
};

export default Buttons;

Buttons.propTypes = {
  good: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
};
