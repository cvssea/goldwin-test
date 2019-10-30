import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Logout from '../Logout';
import logo from '../../images/west-logo.svg';

const Header = ({ user }) => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className="Header">
      <div className="header-top">
        <i
          className="fas fa-bars toggle"
          onClick={() => setVisibleNav(!visibleNav)}
        ></i>
        <div className="logo">
          <img src={logo} alt="WestCasino" />
        </div>
        {user && user.isAuthenticated ? (
          <>
            <p className="header-message">{`Welcome back ${user.firstName}!`}</p>
            <Logout userId={user.id} />
          </>
        ) : (
          <Link to="/login" className="btn btn-outline-secondary">
            Login
          </Link>
        )}
      </div>
      <hr className="m-0" />
      <Navigation isVisible={visibleNav} setVisibility={setVisibleNav} />
    </header>
  );
};

Header.defaultProps = {};

const mapState = ({ currentUser }) => ({
  user: currentUser,
});

export default connect(mapState)(Header);
