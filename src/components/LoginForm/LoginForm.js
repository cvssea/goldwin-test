import React from 'react';
import { Field } from 'redux-form';
import Notification from '../Notification';

const renderField = ({ label, input, type, meta: { touched, error } }) => (
  <div className="form-group">
    <input
      {...input}
      type={type}
      className="form-control"
      placeholder={label}
    />
    {touched &&
      (error && <div className="alert alert-danger mt-2 mb-0">{error}</div>)}
  </div>
);

const LoginForm = ({ handleSubmit, submitting, ...props }) => {
  return (
    <div className="container">
      {props.error && <Notification message={props.error} error />}
      <div className="row">
        <div className="col-sm-2 col-md-3 col-lg-4"></div>
        <div className="col-sm-8 col-md-6 col-lg-4">
          <form onSubmit={handleSubmit}>
            <h4 className="mt-2 text-center">LOGIN</h4>
            <Field
              name="email"
              type="text"
              component={renderField}
              label="Email"
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              label="Password"
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={submitting}
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className="col-sm-2 col-md-3"></div>
      </div>
    </div>
  );
};

export default LoginForm;
