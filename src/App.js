import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App({ setCurrentUser }) {
  useEffect(() => {
    const currentUser = window.localStorage.getItem('casinoUser');
    if (currentUser) {
      setCurrentUser(JSON.parse(currentUser));
    }
  }, [setCurrentUser]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <Header />
        </div>
        <div className="col-12">
          <Route exact path="/" component={Content} />
          <Route path="/login" render={props => <LoginForm {...props} />} />
        </div>
        <div className="col-12 p-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

const mapDispatch = dispatch => ({
  setCurrentUser: user =>
    dispatch({
      type: 'SET_CURRENT_USER',
      user,
    }),
});

export default connect(
  null,
  mapDispatch
)(App);
