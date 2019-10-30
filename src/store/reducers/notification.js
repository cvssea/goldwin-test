export const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message;
    case 'REMOVE_NOTIFICATION':
      return '';
    default:
      return state;
  }
};
