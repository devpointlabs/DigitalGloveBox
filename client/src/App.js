import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react';

import './App.css';

import Dashboard from './components/Dashboard'

function App() {
  return (
   <>
   
    {/* navbar */}
    <Container>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        {/* <Route exact path='/' component={Dashboard}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route component={NoMatch}/> */}
      </Switch>
    </Container>
   </>
  );
}


export default App;
