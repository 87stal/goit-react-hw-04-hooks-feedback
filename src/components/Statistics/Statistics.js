import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) => (
  <>
    <p className={styles.fieldStatistic}>Good: {good}</p>
    <p className={styles.fieldStatistic}>Neutral: {neutral}</p>
    <p className={styles.fieldStatistic}>Bad: {bad}</p>
    <p className={styles.fieldStatistic}>Total: {countTotalFeedback}</p>
    <p className={styles.fieldStatistic}>
      Positive feedback:
      {countPositiveFeedbackPercentage}%
    </p>
  </>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
};
export default Statistics;
