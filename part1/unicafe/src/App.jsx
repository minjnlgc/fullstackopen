import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}> {text} </button>
);

const Stats = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td> {text} </td>
        <td> {value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  );
};

const Statistics = ({ clicks }) => {
  const all = clicks.good + clicks.neutural + clicks.bad;
  const average = (clicks.good - clicks.bad) / all;
  const positive = clicks.good / all;

  if ((clicks.good === 0) & (clicks.neutural === 0) & (clicks.bad === 0)) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <Stats text="good" value={clicks.good} />
      <Stats text="neutural" value={clicks.neutural} />
      <Stats text="bad" value={clicks.bad} />
      <Stats text="all" value={all} />
      <Stats text="average" value={average} />
      <Stats text="positive" value={positive} />
    </table>
  );
};

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutural: 0,
    bad: 0,
  });

  const handleGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });
  const handleNeuturalClick = () =>
    setClicks({ ...clicks, neutural: clicks.neutural + 1 });
  const handleBadClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={handleGoodClick} text={"good"} />
      <Button clickHandler={handleNeuturalClick} text={"neutural"} />
      <Button clickHandler={handleBadClick} text={"bad"} />
      <h1>statistics</h1>
      <Statistics clicks={clicks} />
    </div>
  );
}

export default App;
