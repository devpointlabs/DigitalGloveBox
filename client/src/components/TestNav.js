import React, { useEffect, useState } from 'react';
import { NavItem } from '../styles/NavStyle';
import '../styles/Nav.css'
import axios from 'axios'
import { AuthConsumer } from "../providers/AuthProvider"
import { withRouter, Link } from 'react-router-dom';


const TestNav = (props) => {

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
    },[])

    const renderCars = () =>{
      return cars.map( car => (      
        <div key = {`car-${car.id}`}>
          <a href={`/car_profile/${car.id}`}>{car.year} {car.make}</a>
        </div >
      ));
    }
    
    const rightNavItems = () => {
      
      if (user) {
      return(
        <div style={styles.rightNavStyles}>

          <Link to='/'>
            <NavItem name='dashboard' id='dashboard' className='borderCenter' active={ location.pathname === '/' }>
              Dashboard
            </NavItem>
          </Link>

          <div className="dropdown" >
            <button className="dropbtn">Documents
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              {cars.length !==0 ? renderCars() : <a>No cars dum dum</a>}
            </div>
          </div>
   
          <Link to='/contact_us'>
            <NavItem id='contact us' name='contact us' className='borderCenter' active={location.pathname === '/contact_us'}>
              Contact Us
            </NavItem>
          </Link>

          <Link to='/account'>
            <NavItem id='account' name='account' className='borderCenter' active={location.pathname === '/account'} >
              Profile
            </NavItem>
          </Link>
          
          <Link>
            <NavItem name='logout' className='borderCenter' onClick={ () => handleLogout(history)}>
              Logout
            </NavItem>
          </Link>
          
        </div>        
      )} else {
      return(
        <div style={styles.rightNavStyles}>
        <Link to='login'>
          <NavItem id='login' name='login' className='borderCenter' active={location.pathname === '/login'}>
            Login
          </NavItem>
        </Link>
        <Link to='/register'>
          <NavItem id='register' name='register' className='borderCenter' active={location.pathname === '/register'}>
            Register
          </NavItem>
        </Link>
        
        </div>       
      )
    }  
  }
  if(!cars) return null
    
    return (
      <div style={styles.mainNav}>
        <div style={styles.leftNavStyles}>
          LOGO HERE
        </div>
          { rightNavItems()}
      </div>
    )
  }


export class ConnectedTestNavbar extends React.Component {
  render(){
    return (
      <AuthConsumer>
        {auth => 
          <TestNav { ...this.props } auth={auth} /> 
          }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedTestNavbar)



const styles = {
  mainNav: {
    display: 'flex',
    border: 'solid 1px black',
    width: '100%',
    height: '100%',
    backgroundColor: '#09091A',
  },
  rightNavStyles: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '70%',
    padding: '.5em .5em',
    // border: 'solid 2px black'
  },
  leftNavStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',
    padding: '.5em .5em',
    // border: 'solid 1px green'   
  },
}


// function myFunction() {
//   document.getElementById("carDropdown").classList.toggle("show");
// }

// window.onclick = function(e) {
//   if (!e.target.matches('dropbtn')) {
//   var myDropdown = document.getElementById("carDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }