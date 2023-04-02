import React from 'react';
import Statistics from './Statistics';
import NotificationMessage from './Notification ';
import FeedbackOptions from './FeedbackOptions';
import Section from './SectionTitle';
import {Container} from './Feedback.styled'

class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    onClickButtonGood = () => {
        this.setState(prevState => ({good: prevState.good + 1}));
    };
    
    onClickButtonNeutral = () => {
        this.setState(prevState => ({neutral: prevState.neutral + 1}));
    };
    
    onClickButtonBad = () => {
        this.setState(prevState => ({bad: prevState.bad + 1}));
    };
    

    render() {

        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        const positiveFidback = Math.round((good / total) * 100);

        return (
            <Container>
            <Section title="Please leave feedback">
            <FeedbackOptions
                onClickButtonGood={this.onClickButtonGood}
                onClickButtonNeutral={this.onClickButtonNeutral}
                onClickButtonBad={this.onClickButtonBad}
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
            <NotificationMessage />
            )}
                </Section>
                </Container>
        )
    }
}

export default Feedback;