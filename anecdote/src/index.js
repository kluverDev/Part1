import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotesUpvote] = useState([
    {
      text: "If it hurts, do it more often",
      upvote: 0
    },
    {
      text: "Adding manpower to a late software project makes it later!",
      upvote: 0
    },
    {
      text:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      upvote: 0
    },
    {
      text:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      upvote: 0
    },
    {
      text: "Premature optimization is the root of all evil.",
      upvote: 0
    },
    {
      text:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      upvote: 0
      
    }
  ]);

  const randomNumGen = () => {
    let min = 0;
    let max = anecdotes.length;
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomNum);
    setSelected(randomNum);
  };
  const increaseUpvote = () => {
    const clonedAnecdotes = [...anecdotes];
    clonedAnecdotes[selected].upvote = clonedAnecdotes[selected].upvote + 1;
    setAnecdotesUpvote(clonedAnecdotes);
  };
  const arrayOfUpvotes = anecdotes.map(anecdote => anecdote.upvote);
  const highestNumber = arrayOfUpvotes.reduce(function(a, b) {
    return Math.max(a, b);
  });
  const index = anecdotes.findIndex(
    anecdote => anecdote.upvote === highestNumber
  );

  console.log(highestNumber);
  console.log(index);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].text}</p>
      <p>has {anecdotes[selected].upvote} vote</p>
      <button onClick={randomNumGen}>next anecdote</button>
      <button onClick={increaseUpvote}>vote</button>

      <h1>Anecdote with most vote</h1>
      {highestNumber > 0 ? (
        <div>
          <p>{anecdotes[index].text} </p>
          <p>has {anecdotes[index].upvote} vote</p>
        </div>
      ) : (
        "Please vote"
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));






