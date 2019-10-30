import React from 'react';
import { Link } from 'react-router-dom';
import Spotlight from './Spotlight';
import GameList from './GameList';

const Section = ({ title }) => {
  return (
    <section
      className="Section"
      id={title
        .toLowerCase()
        .split(' ')
        .join('-')}
    >
      <div className="section-header">
        <h2>{title.toUpperCase()}</h2>
        <Link to="/" className="btn btn-primary">
          {`See all ${title}`.toUpperCase()}
        </Link>
      </div>
      <div className="section-content">
        <Spotlight />
        <GameList />
      </div>
    </section>
  );
};

Section.defaultProps = {
  title: 'Section Name',
};

export default Section;
