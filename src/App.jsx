import { useState } from "react";
import "./App.css";
import axios from "axios";
const App = () => {
  const [number, setNumber] = useState("");
  const [fact, setFact] = useState("");

  const getFact = async (e, type) => {
    e.preventDefault();
    const API = `https://numbersapi.com/${number}/${type}?default= ${number} is a boring number.`;
    try {
      const res = await axios.get(API);
      setFact(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRandomFact = async (e) => {
    e.preventDefault();
    const API = `http://numbersapi.com/random?default= ${number} is a boring number.`;
    try {
      const res = await axios.get(API);
      const enteredNumber = res.data.match(/^\d+/)[0];
      setNumber(enteredNumber);
      setFact(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main">
      <div className="info-section">
        <h2 className="title">Number Facts</h2>
        <input
          type="text"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="number-input"
        />

        <div className="type-section">
          <button
            onClick={(e) => {
              getFact(e, "math");
            }}
            className="type-button"
          >
            Math
          </button>
          <button
            onClick={(e) => {
              getFact(e, "trivia");
            }}
            className="type-button"
          >
            Trivia
          </button>
          <button
            onClick={(e) => {
              getFact(e, "year");
            }}
            className="type-button"
          >
            Year
          </button>
          <button
            onClick={(e) => {
              getRandomFact(e);
            }}
            className="type-button"
          >
            Random
          </button>
        </div>
        <div className="fact-section">{fact}</div>
      </div>
    </div>
  );
};

export default App;
