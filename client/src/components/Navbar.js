import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { AuthConsumer } from "../providers/AuthProvider"
import '../App.css';
import axios from 'axios'

const Navbar = (props) => {
  const [cars, setCars] = useState([]);
  const { auth: {user, handleLogout, }, location, history, } = props
  
  useEffect(() => {

    if (props.auth.user) {        
      axios.get(`/api/users/${user.id}/cars`)
      .then(res => {    
        setCars(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    },)

    const renderCars = () =>{
      return cars.map( car => (      
        <div key = {`car-${car.id}`}>
          <a href={`/car_profile/${car.id}`}>{car.year} {car.make}</a>
        </div >
      ));
    }

  const rightNavItems = () => {

    if (user){
      return (
        <Menu.Menu position='right'>
          <Link to='/'>
            <Menu.Item
              name='dashboard'
              id='dashboard'
              active={ location.pathname === '/' }
            />
          </Link>

          <div class="dropdown">
            <button class="dropbtn">Dropdown 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              {renderCars()}  
            </div>
          </div> 

          <Link to='/'>
            <Menu.Item
              name='documents'
              id='documents'
              active={ location.pathname === '/' }
            />
          </Link>
          <Link to='/'>
            <Menu.Item
              name='contact us'
              id='contact us'
              active={ location.pathname === '/' }
            />
          </Link>
          <Menu.Item 
            name='logout'
            onClick={ () => handleLogout(history)}
          />
         <Link to='/account'>
            <Menu.Item
              id='account'
              name='account'
              active={location.pathname === '/account'}
            />
          </Link>
        </Menu.Menu>

      )} else {
          return(
            <Menu.Menu position='right'>
              <Link to='login'>
                <Menu.Item
                  id='login'
                  name='login'
                  active={location.pathname === '/login'}
                />
              </Link>
              <Link to='/register'>
                <Menu.Item
                  id='register'
                  name='register'
                  active={location.pathname === '/register'}
                />
              </Link>
             
            </Menu.Menu>
          )
      }
  }

  return(
    <div>
      <Menu pointing secondary>
        <p>DGB</p>
          { rightNavItems()}
      </Menu>
    </div>
  )
}

export class ConnectNavbar extends React.Component {
  render(){
    return (
      <AuthConsumer>
        {auth => 
          <Navbar { ...this.props } auth={auth} /> 
          }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectNavbar)