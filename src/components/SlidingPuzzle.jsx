import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"; 

import "./SlidingPuzzle.css";
import ourPhoto from "../assets/us.jpg";

const GRID_SIZE = 3; 

const SlidingPuzzle = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [tiles, setTiles] = useState([]);
  const [emptyTile, setEmptyTile] = useState({ row: GRID_SIZE - 1, col: GRID_SIZE - 1 });
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    initializePuzzle();
  }, []);

  useEffect(() => {
    checkIfSolved();
  }, [tiles]);

  const initializePuzzle = () => {
    let initialTiles = [];
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (row === GRID_SIZE - 1 && col === GRID_SIZE - 1) continue; 
        initialTiles.push({ row, col, correctRow: row, correctCol: col });
      }
    }

    let shuffledTiles = shuffleTiles(initialTiles);
    setTiles(shuffledTiles);
  };

  const shuffleTiles = (tiles) => {
    let shuffled = [...tiles];

    do {
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
    } while (!isSolvable(shuffled));

    shuffled = shuffled.map((tile, index) => ({
      ...tile,
      row: Math.floor(index / GRID_SIZE),
      col: index % GRID_SIZE,
    }));

    return shuffled;
  };

  const isSolvable = (tiles) => {
    let inversions = 0;
    let tileArray = tiles.map(t => t.correctRow * GRID_SIZE + t.correctCol); 

    for (let i = 0; i < tileArray.length; i++) {
      for (let j = i + 1; j < tileArray.length; j++) {
        if (tileArray[i] > tileArray[j]) inversions++;
      }
    }
    
    return inversions % 2 === 0; 
  };

  const moveTile = (tile) => {
    if (isSolved) return; 
    const { row, col } = tile;
    if (
      (Math.abs(row - emptyTile.row) === 1 && col === emptyTile.col) ||
      (Math.abs(col - emptyTile.col) === 1 && row === emptyTile.row)
    ) {
      setTiles((prevTiles) =>
        prevTiles.map((t) =>
          t.row === row && t.col === col ? { ...t, row: emptyTile.row, col: emptyTile.col } : t
        )
      );
      setEmptyTile({ row, col });
    }
  };

  const checkIfSolved = () => {
    if (tiles.length > 0 && tiles.every((tile) => tile.row === tile.correctRow && tile.col === tile.correctCol)) {
      setIsSolved(true);
    }
  };

  return (
    <div className="puzzle-page">
      {isSolved && <Confetti width={width} height={height} numberOfPieces={200} />} 

      <div className="puzzle3-container">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="tile"
            onClick={() => moveTile(tile)}
            style={{
              backgroundImage: `url(${ourPhoto})`,
              backgroundPosition: `${-tile.correctCol * 100}px ${-tile.correctRow * 100}px`,
              top: `${tile.row * 100}px`,
              left: `${tile.col * 100}px`,
            }}
          />
        ))}
      </div>

      {isSolved && (
        <div className="winner-container">
          <h2>YOU HAVE WONN YIPPIEEEE! 🎉</h2>
          <button className="reward-button" onClick={() => navigate("/youwin")}>
            Claim Your Reward!
          </button>
        </div>
      )}
    </div>
  );
};

export default SlidingPuzzle;
