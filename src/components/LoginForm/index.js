import { loginService } from '../../services';
import { reduxForm, SubmissionError } from 'redux-form';
import LoginForm from './LoginForm';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password Required';
  }

  return errors;
};

const onSubmit = values => {
  return loginService(values)
    .then(user => {
      window.localStorage.setItem('casinoUser', JSON.stringify(user));
      return user;
    })
    .catch(err => {
      throw new SubmissionError({ ...err, _error: 'Login failed.' });
    });
};

export default reduxForm({
  form: 'login',
  validate,
  onSubmit,
  onSubmitSuccess: (result, dispatch, props) => {
    dispatch({
      type: 'SET_CURRENT_USER',
      user: result,
    });
    dispatch({
      type: 'SET_NOTIFICATION',
      message: `Logged in as ${result.firstName} ${result.lastName}`,
    });
    props.history.push('/');
  },
  onSubmitFail: (errors, dispatch) => {
    console.log(errors);
    dispatch({
      type: 'SET_NOTIFICATION',
      message: `Cannot log in`,
    });
  },
})(LoginForm);
