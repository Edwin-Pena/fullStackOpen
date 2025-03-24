import { useState } from "react";

const DisplayValue = ({ category, value }) => (
  <div>{`${category} ${value}`}</div>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

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
      <DisplayValue category="Good" value={good} />
      <DisplayValue category="Neutral" value={neutral} />
      <DisplayValue category="Bad" value={bad} />
      <DisplayValue category="All" value={good + neutral + bad} />
      <DisplayValue
        category="Average"
        value={(good + neutral * 0 + bad * -1) / all}
      />
      <DisplayValue category="Positive" value={`${(good / all) * 100}%`} />
    </div>
  );
};

export default App;
