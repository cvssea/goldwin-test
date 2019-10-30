import React from 'react';
import { connect } from 'react-redux';
import { logoutService } from '../services';

const Logout = ({ logoutUser }) => (
  <button className="btn btn-outline-secondary" onClick={logoutUser}>
    Logout
  </button>
);

const mapDispatch = (dispatch, { userId }) => ({
  logoutUser: async () => {
    window.localStorage.removeItem('casinoUser');
    await logoutService(userId);
    dispatch({
      type: 'SET_CURRENT_USER',
      user: null,
    });
    dispatch({
      type: 'SET_NOTIFICATION',
      message: 'Succesfully logged out',
    });
  },
});

export default connect(
  null,
  mapDispatch
)(Logout);
