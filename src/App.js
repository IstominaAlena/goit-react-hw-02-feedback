import React, { Component } from 'react';

import FeedbackList from './components/FeedbackList';
import Notification from './components/Notification';
import Buttons from './components/Buttons';

import Section from './components/Section';

import './styles/App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  visible = false;

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const good = this.state.good;
    const percentage = (good / totalFeedback) * 100;
    return percentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please, leave feedback">
          <Buttons
            good={this.handleClickGood}
            bad={this.handleClickBad}
            neutral={this.handleClickNeutral}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <FeedbackList
              total={total}
              neutral={this.state.neutral}
              bad={this.state.bad}
              good={this.state.good}
              percentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
