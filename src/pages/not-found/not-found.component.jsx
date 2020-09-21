import React from 'react';
import Button from 'react-bootstrap/Button';

const NotFoundPage = ({ history }) => (
  <div className="container text-center">
    <p className="h5 mt-5">
      <br />
      <h1>Oops! Page Not Found</h1>
      <br />
      The page you are looking for might be removed or temporarily unavailable.
    </p>
    <br />
    <br />
    <Button variant="primary" size="lg" onClick={() => history.push('/')}>
      Back to Home
    </Button>
  </div>
);

export default NotFoundPage;
