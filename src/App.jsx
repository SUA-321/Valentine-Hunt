import { useState } from "react";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  

  return (
    <div className="welcome-container">
      {!started ? (
        <div className="welcome-content">
          <h1 className="highlight-text">Welcome to Your Valentine Hunt Zoob! 💖</h1>
          <p className="highlight-text"> Are you ready to solve some fun puzzles? Click below to begin! 🎉</p>
          <br></br>
          <button onClick={() => setStarted(true)}>Start the Adventure 🚀</button>
        </div>
      ) : (
        <div className="puzzle-container">
          <h2 className="highlight-text">🔎 Puzzle 1: Find the Clue!</h2>
          <br></br>
          <p className="highlight-text">Your first task awaits…</p>
          <br></br>
          <a href="/puzzle1" className="highlight-text">Go to Puzzle 1 ➡</a>
        </div>
      )}
    </div>
  );
}

export default App;
