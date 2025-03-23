import { useState } from "react";

const DisplayFeedBack = ({ category, value }) => (
  <div>{`${category} ${value}`}</div>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

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
      <h2>Statistics</h2>
      <DisplayFeedBack category="Good" value={good} />
      <DisplayFeedBack category="Neutral" value={neutral} />
      <DisplayFeedBack category="Bad" value={bad} />
    </div>
  );
};

export default App;
