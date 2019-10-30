import React from 'react';

const Navigation = ({ links, isVisible, setVisibility }) => (
  <nav className={isVisible ? '' : 'hidden'}>
    <ul className="nav header-nav">
      {links.map(l => (
        <li className="nav-item" key={l.name}>
          <a
            href={l.href}
            className="nav-link"
            onClick={() => setVisibility(false)}
          >
            <i className={l.icon}></i>
            {l.name.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.defaultProps = {
  links: [
    { name: 'Spooky Games', icon: 'fas fa-ghost', href: '#spooky-games' },
    { name: 'Favorites', icon: 'far fa-gem', href: '#favorites' },
    { name: 'New Games', icon: 'fas fa-dice', href: '#new-games' },
  ],
};

export default Navigation;
