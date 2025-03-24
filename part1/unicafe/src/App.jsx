import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <div>
      <div>{`Good ${good}`}</div>
      <div>{`Neutral ${neutral}`}</div>
      <div>{`Bad ${bad}`}</div>
      <div>{`All ${all}`}</div>
      <div>{`Average ${all ? (good - bad) / all : 0}`}</div>
      <div>{`Positive ${all ? (good / all) * 100 : 0}%`}</div>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedBack = (newValue, setFuction) => {
    setFuction(newValue);
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={() => handleFeedBack(good + 1, setGood)} text="Good" />
      <Button
        onClick={() => handleFeedBack(neutral + 1, setNeutral)}
        text="Neutral"
      />
      <Button onClick={() => handleFeedBack(bad + 1, setBad)} text="Bad" />
      <h2>Statidtics</h2>
      {good || neutral || bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <div>No feedback given</div>
      )}
    </div>
  );
};

export default App;
