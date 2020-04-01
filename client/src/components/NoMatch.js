import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <Header as="h3" textAlign="center">
    Page Not Found
    <br /> 
    <Link to="/">Return to Dashboard</Link>
  </Header>
)

export default NoMatch;