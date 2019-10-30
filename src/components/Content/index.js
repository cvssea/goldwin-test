import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Section from './Section';
import Notification from '../Notification';

const Content = ({ notification, removeNotification }) => {
  useEffect(() => {
    if (notification) {
      setTimeout(removeNotification, 3000);
    }
  }, [notification, removeNotification]);

  return (
    <main className="container">
      {notification && <Notification message={notification} />}
      <Section title="spooky games" />
      <Section title="favorites" />
      <Section title="new games" />
    </main>
  );
};

const mapState = ({ notification }) => ({ notification });

const mapDispatch = dispatch => ({
  removeNotification: () => dispatch({ type: 'REMOVE_NOTIFICATION' }),
});

export default connect(
  mapState,
  mapDispatch
)(Content);
