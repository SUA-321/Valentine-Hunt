import React from "react";
import QRCode from "react-qr-code";
import "./YouWin.css"; // Ensure your CSS file is being applied properly
  const spotifyLink = "https://open.spotify.com/playlist/5uF5oCfsaJsWW9eYS4eMQz?si=8e3e42869761443b&pt=0d1204e62acb77ce0b92a57ae175001e"; // Replace with your actual Spotify playlist link

function YouWin() {

  return (
    <div className="highlight-text">
      <h2>🎵 You Win! A Musical Surprise! 🎵</h2>
      <p>Scan the QR code below to open a special playlist just for you! 💖</p>

      {/* Ensure the QR code is visible */}
      <QRCode value={spotifyLink} size={200} />

      <p>Or click <a href={spotifyLink} target="_blank" rel="noopener noreferrer">here</a> if you can't scan.</p>

    </div>
  );
}

export default YouWin;
