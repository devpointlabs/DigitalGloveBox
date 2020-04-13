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
import Parse from 'parse';
import Home from './components/cars/Home'
import Home2 from './components/cars/Home2';



// class App extends React.Component {
// constructor(props) {
//     super(props);
//     Parse.initialize(
//       "VtH137ysq3yyLOqa014TxxlIAVGwEbd9PvOYuTSD",
//       "pcGAl1MYs6UOiRESbDkIpyl9evmaAkKEL8IM8hko"
//     );
//     Parse.serverURL = "https://parseapi.back4app.com/";
//     this.state = {
//       result: '',
//       cars: [],
//       make: [],
//       carMakeOfYear: [],
//       yearsChosen: [],
//       makeChosen:[],
//       carModelofMake:[],
//       modelChosen:[],
//     };

//     let install = new Parse.Installation()
//     install.set("deviceType", navigator.userAgent);
//     install.save().then((resp) => {
//     console.log('created install objext', resp);
//     this.setState({result: "New object created with object ID: " + resp.id})
//       }, err => {
//       console.log("error creating install object", err);
//       this.setState({result: "failed to create new object, with error code: " + err.message})
//       }
//     )
//   }

//   render() {
//     return(

//     )
//   }
// }
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
          <Route exact path='/add_car' component={AddCar}/>            
          <Route exact path='/:user_id/car_profile/:id/edit' component={EditCarProfile}/>            
          <Route exact path='/Home' component={Home}/>            
          <Route exact path='/Home2' component={Home2}/>            
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </FetchUser>
   </>
  );
}


export default App;
