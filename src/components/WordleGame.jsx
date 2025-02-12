import React, { useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./WordleGame.css";

const WordleGame = () => {
  const correctWord = "ELWOOD";
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [shake, setShake] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { width, height } = useWindowSize();

  const handleGuess = () => {
    if (!/^[A-Za-z]{6}$/.test(guess)) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const newAttempts = [...attempts, guess.toUpperCase()];
    setAttempts(newAttempts);

    if (guess.toUpperCase() === correctWord) {
      setGameWon(true);
    }

    setGuess("");
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const handleNextPuzzle = () => {
    // Navigate to the next puzzle (e.g., Puzzle 3) after winning.
    // This can be done by using a navigation hook or manually updating the URL.
    // If you are using react-router, you can use useNavigate hook here.
    console.log("Next Puzzle");
  };

  return (
    <div className="wordle-container">
      {gameWon && <Confetti width={width} height={height} />}

      <h2 className="highlight-text">📝 Puzzle 2: Wordle Challenge (6 Letters btw)</h2>
      <br />
      <button onClick={toggleHint} className="hint-toggle-btn">
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>
      <br />
      {showHint && <p className="hint">maybe it's <u>"Locked"</u> ?</p>}

      <br />
      {attempts.map((attempt, index) => (
        <div key={index} className="attempt">
          {attempt.split("").map((letter, i) => (
            <span
              key={i}
              className={`letter-box ${
                correctWord[i] === letter ? "correct" :
                correctWord.includes(letter) ? "almost" : "wrong"
              }`}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}

      {!gameWon && (
        <>
          <input
            type="text"
            maxLength="6"
            value={guess}
            onChange={(e) => setGuess(e.target.value.toUpperCase())}
            className="wordle-input"
          />
          <br />
          <button
            onClick={handleGuess}
            className={`wordle-btn ${shake ? "shake" : ""}`}
          >
            <u>Submit</u>
          </button>
        </>
      )}

      {gameWon && (
        <>
          <p className="win-message">🎉 You got it! Click next to continue.</p>
          <br />

          <a href="/puzzle3" className="next-button">Go to Puzzle 3 ➡</a>
        </>
      )}
    </div>
  );
};

export default WordleGame;
