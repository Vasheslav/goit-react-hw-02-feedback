import React from 'react';
import Statistics from './Statistics';
import NotificationMessage from './Notification ';
import FeedbackOptions from './FeedbackOptions';
import Section from './SectionTitle';
import { Container } from './Feedback.styled';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedBack = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFidback = Math.round((good / total) * 100);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedBack={this.leaveFeedBack}
          />
        </Section>
        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFidback}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
