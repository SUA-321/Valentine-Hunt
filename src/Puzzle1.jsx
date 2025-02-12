import { useState } from "react";
import "./Puzzle1.css";

function Puzzle1() {
  const [foundLetters, setFoundLetters] = useState([]);
  const secretWord = ["I", "💖", "Y", "O", "U"];

  const handleLetterClick = (letter) => {
    if (secretWord.includes(letter) && !foundLetters.includes(letter)) {
      setFoundLetters([...foundLetters, letter]);
    }
  };

  return (
    <div>
      <h2 className="highlight-text">🔎 Puzzle 1: Find the Hidden Message!</h2>
      <br></br>
      <p className="highlight-text">Click on the correct letters to reveal your first clue.</p>
      <div className="letter-grid">
        {["A", "R", "I", "L", "💖", "T", "M", "Y", "O", "U"].map((letter, index) => (
          <span
            key={index}
            className={`letter ${foundLetters.includes(letter) ? "revealed" : ""}`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </span>
        ))}
      </div>

      {foundLetters.length === secretWord.length && (
        <div>
          <p className="highlight-text">You found the hidden message!</p>
            <br></br>
          <a href="/puzzle2" className="next-button">Go to Puzzle 2 ➡</a>
        </div>
      )}
    </div>
  );
}

export default Puzzle1;
