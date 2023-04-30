import React, {useState} from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';



export default function Feedback() {
    const[good, setGood] = useState(0);
    const[neutral, setNeutral] = useState(0);
    const[bad, setBad] = useState(0);

    const handleIncrementGood = () => {
      setGood(prevGood => prevGood + 1);
    };

    const handleIncrementNeutral = () => {
      setNeutral(prevNeutral => prevNeutral + 1);
    };

    const handleIncrementBad = () => {
      setBad(prevBad => prevBad + 1);
    };
   

    const countTotalFeedback = (a, b, c) => {
     const total = a + b + c;
      return total;
    }

    const countPositiveFeedbackPercentage = (a, b, c) => {
       const total = a + b + c;
      return total > 0 ? Math.round(a * 100 / total) : 0;
    }


    return (
        <div>
          <Section title="Please leave feedback">
    
            <FeedbackOptions 
            onLeaveFeedbackGood={handleIncrementGood}
            onLeaveFeedbackNeutral={handleIncrementNeutral}
            onLeaveFeedbackBad={handleIncrementBad} 
            />
          <h2>Statistics</h2>

          {countTotalFeedback(good, neutral, bad) > 0 ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onTotalFeedback={countTotalFeedback(good, neutral, bad)}
            onPositiveFeedbackPercentage={countPositiveFeedbackPercentage(good, neutral, bad)}/>
          ) : (
            <Notification message="There is no feedback"/>
          )}
           
          </Section>
        </div>
    )
  }



