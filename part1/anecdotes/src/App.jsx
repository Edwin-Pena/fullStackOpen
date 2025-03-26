import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const votes = Array(8).fill(0);

  const [selected, setSelected] = useState(0);
  const [votesValue, SetVotesValue] = useState(votes);
  const anecdotesLength = anecdotes.length;

  const handleAnecdote = (max) => {
    let newSelected;
    do {
      newSelected = Math.floor(Math.random() * max);
    } while (newSelected === selected);
    setSelected(newSelected);
    console.log(newSelected);
  };

  const handleVotes = () => {
    const newVotes = [...votesValue];
    newVotes[selected] += 1;
    SetVotesValue(newVotes);
    console.log("votes updated", newVotes);
  };

  const findMaxvotes = () => {
    const maxVotes = Math.max(...votesValue);
    return [maxVotes, votesValue.indexOf(maxVotes)];
  };

  const [higestVoteScore, favoriteAnecdote] = findMaxvotes();

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div> {`has ${votesValue[selected]} votes`}</div>
      <button onClick={handleVotes}>vote</button>
      <button onClick={() => handleAnecdote(anecdotesLength)}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[favoriteAnecdote]}</div>
      <div> {`has ${higestVoteScore} votes`}</div>
    </>
  );
};

export default App;
