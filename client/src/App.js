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
import CarProfile from './components/cars/CarProfile'
import Account from './components/users/Account'
import EditCarProfile from './components/cars/EditCarProfile';
import AddCar from './components/cars/AddCar';

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
          <Route exact path='/car_profile/:id' component={CarProfile}/>
          <ProtectedRoute exact path='/add_car' component={AddCar}/>            
          <Route exact path='/:user_id/car_profile/:id/edit' component={EditCarProfile}/>            
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </FetchUser>
   </>
  );
}


export default App;
