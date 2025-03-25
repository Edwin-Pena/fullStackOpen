import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{`${text}`}</td>
      <td>{`${value}`}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={all ? (good - bad) / all : 0} />
        <StatisticLine
          text="Positive"
          value={`${all ? (good / all) * 100 : 0}%`}
        />
      </tbody>
    </table>
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
