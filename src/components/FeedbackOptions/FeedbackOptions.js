import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(feedbackType => (
        <button
          type="submit"
          key={feedbackType}
          className={styles.button}
          onClick={() => onLeaveFeedback(feedbackType)}
        >
          {feedbackType}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
