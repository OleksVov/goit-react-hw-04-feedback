import React, {useState} from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';



export default function Feedback() {
    const[good, setGood] = useState(0);
    const[neutral, setNeutral] = useState(0);
    const[bad, setBad] = useState(0);




    return (
        <div>
          <Section title="Please leave feedback">
    
            {/* <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement} /> */}
          <h2>Statistics</h2>

          {/* {this.countTotalFeedback(good, neutral, bad) > 0 ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onTotalFeedback={this.countTotalFeedback(good, neutral, bad)}
            onPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(good, neutral, bad)}/>
          ) : (
            <Notification message="There is no feedback"/>
          )} */}
           
          </Section>
        </div>
    )
  }



