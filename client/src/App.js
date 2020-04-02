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
<<<<<<< HEAD
import NoMatch from './components/NoMatch';
import CarProfile from './components/cars/CarProfile'
=======
import Account from './components/users/Account'
>>>>>>> 43a2078998feaec938fed443834a17efda0b85d6

const App = () => {
  return (
   <>
   
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <ProtectedRoute exact path='/account' component={Account}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
<<<<<<< HEAD
          <Route exact path='/api/users/:user_id/cars/:id' component={CarProfile}/>          
          <Route component={NoMatch}/>
=======
          
          {/* <Route component={NoMatch}/> */}
>>>>>>> 43a2078998feaec938fed443834a17efda0b85d6
        </Switch>
      </Container>
    </FetchUser>
   </>
  );
}


export default App;
