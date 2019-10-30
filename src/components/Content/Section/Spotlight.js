import React from 'react';
import image from '../../../images/fat-rabbit.jpg';

const Spotlight = ({ image }) => (
  <div className="section-spotlight d-none d-lg-block">
    <div className="inside">
      <img src={image} alt="game" />
    </div>
  </div>
);

Spotlight.defaultProps = {
  image,
};

export default Spotlight;
