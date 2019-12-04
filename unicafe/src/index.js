import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return (
    <div>
      <button onClick={props.click}>{props.deu}</button>
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = ({ goodScore, badScore, neutralScore }) => {
  const totalFeedback = badScore + neutralScore + goodScore;
  
  const average = ((goodScore * +1)+(badScore * -1))/ totalFeedback;
  const percentPositiveFeedback = (goodScore / totalFeedback) * 100;
  const positiveFeedback = `${percentPositiveFeedback}%`

  return (
    <div>
      <h2>Statistics</h2>

      {totalFeedback !== 0 ? (
        <div>
          <Statistic text="good" value={goodScore} />
          <Statistic text="neutral" value={neutralScore} />
          <Statistic text="bad" value={badScore} />
          <Statistic text="All" value={totalFeedback} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positiveFeedback} />
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = props => {
  // save clicks of each button to own state
  const [good, setGood] = useState({
    rating: "good",
    score: 0
  });
  const [neutral, setNeutral] = useState({
    rating: "neutral",
    score: 0
  });
  const [bad, setBad] = useState({
    rating: "bad",
    score: 0
  });

  const handleClick = rating => {
    switch (rating) {
      case "good":
        const makenewgood = {
          ...good,
          score: good.score + 1
        };
        setGood(makenewgood);
        break;
      case "bad":
        const makenewbad = {
          ...bad,
          score: bad.score + 1
        };
        setBad(makenewbad);
        break;
      case "neutral":
        const makenewneutral = {
          ...neutral,
          score: neutral.score + 1
        };
        setNeutral(makenewneutral);
        break;
        
    }
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button deu={good.rating} click={() => handleClick(good.rating)} />
      <Button deu={neutral.rating} click={() => handleClick(neutral.rating)} />
      <Button deu={bad.rating} click={() => handleClick(bad.rating)} />
      <Statistics
        goodScore={good.score}
        badScore={bad.score}
        neutralScore={neutral.score}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
