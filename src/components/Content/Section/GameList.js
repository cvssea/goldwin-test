import React from 'react';
import Game from './Game';

const GameList = () => (
  <ul className="section-game-list">
    {new Array(6).fill(null).map((el, i) => (
      <Game key={i} />
    ))}
  </ul>
);

export default GameList;
