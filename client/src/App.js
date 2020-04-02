import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react';

import './App.css';

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import NoMatch from './components/NoMatch';

const App = () => {
  return (
   <>
   
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </FetchUser>
   </>
  );
}


export default App;
