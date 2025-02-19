import React from 'react';
import "../Styles/SpotGames.css";
import { Link } from 'react-router-dom';

function SpotGames() {
  const games = [
    {
      title: "Free Fire",
      entryFee: "200/- Per Squad",
      prize: "Win: 1000/- | Per Kill: 15/-",
      image: "https://m.media-amazon.com/images/M/MV5BM2U5ZTIxMzUtMmQ5MC00YTdhLThjOWYtODUzNDQ0MThmMmQ4XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg",
    },
    {
      title: "Pubg",
      entryFee: "250/- Per Squad",
      prize: "Win: 1100/- | Per Kill: 15/-",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202312/1402/44b6bfcd7956199bd50eb156219292e80b76a108d6ac4c6e.jpg",
    },
    {
      title: "Make Me Famous",
      entryFee: "50/-",
      prize: "Prize Money: 800/-",
      image: process.env.PUBLIC_URL + '/makemefamous.jpg',
    },
    {
      title: "Treasure Hunt",
      entryFee: "200/- Per Squad",
      prize: "Win: 1000/-",
      image: "https://m.media-amazon.com/images/I/91DJcqsV6wL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Quiz",
      entryFee: "40/-",
      prize: "Prize: Gift",
      image: "https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg",
    },
    {
      title: "Rubik's Cube",
      entryFee: "40/-",
      prize: "Prize: Gift",
      image: "https://m.media-amazon.com/images/I/51pf3y8-IpL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Lottery",
      entryFee: "30/-",
      prize: "Prize: Free Trip to Vizag (or) Araku",
      image: "https://img.freepik.com/free-vector/casino-games-design_24908-60957.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais",
    },
  ];

  return (
    <div className="spot-games-container">
      <h1 className="main-heading">Explore Top Games</h1>
      <div className="games-grid">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.image} alt={game.title} className="game-image" />
            <div className="game-info">
              <h2 className="game-title">{game.title}</h2>
              <p className="entry-fee">Entry Fee: {game.entryFee}</p>
              <p className="prize-money">{game.prize}</p>
              <Link to="https://docs.google.com/forms/d/1fI_qNdyOu8P2qz3uaBAfQ9ptFkBGYzRe_zQo7XI0Jz0/viewform?edit_requested=true" target="_blank">
                <button className="register-button">Register</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpotGames;
