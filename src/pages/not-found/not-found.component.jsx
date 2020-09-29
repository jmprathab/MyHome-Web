import React from 'react';
import Button from 'react-bootstrap/Button';

import Text from "../../components/common/Text";

const NotFoundPage = ({ history }) => (
  <div className="container text-center">
    <p className="h5 mt-5">
      <br />
      <Text fontSize="2.5rem"></Text>
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
