import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerUpdateFeedback = type => {
    switch (type) {
      case 'Good':
        setGood(prevValue => prevValue + 1);
        break;

      case 'Neutral':
        setNeutral(prevValue => prevValue + 1);
        break;

      case 'Bad':
        setBad(prevValue => prevValue + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const options = ['Good', 'Bad', 'Neutral'];

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={handlerUpdateFeedback}
          options={options}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) 
       : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;
