import React from "react";
import "./App.css";
import { averageScore } from "./Utils/functions";
const data = require("./Data/db.json");

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Student Scores</h2>
      <p>Average Score = {averageScore(data)}</p>
    </div>
  );
}

export default App;
