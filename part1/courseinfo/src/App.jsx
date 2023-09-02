import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// courseinfo

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.course} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercise +
        props.parts[1].exercise +
        props.parts[2].exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part course={props.parts[0].course} exercise={props.parts[0].exercise} />
      <Part course={props.parts[1].course} exercise={props.parts[1].exercise} />
      <Part course={props.parts[2].course} exercise={props.parts[2].exercise} />
    </div>
  );
};


const App = () => {

  // courseinfo

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        course: "Fundamentals of React",
        exercise: 10,
      },
      {
        course: "Using props to pass data",
        exercise: 7,
      },
      {
        course: "State of a component",
        exercise: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
