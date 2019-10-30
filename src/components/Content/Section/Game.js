import React from 'react';
import image from '../../../images/fat-rabbit.jpg';

const Game = ({ image }) => (
  <li className="Game">
    <div className="inside">
      <img src={image} alt="" />
    </div>
  </li>
);

Game.defaultProps = {
  image,
};

export default Game;
