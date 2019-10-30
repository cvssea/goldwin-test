import React from 'react';

export default ({ message, error }) => (
  <div className={`alert alert-${error ? 'danger' : 'success'} mt-4 mb-2`}>
    {message}
  </div>
);
