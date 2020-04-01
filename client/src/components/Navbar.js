import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import { AuthConsumer } from "../providers/AuthProvider"

const Navbar = (props) => {

  const { auth: {user, handleLogout, }, location, history } = props

  const rightNavItems = () => {
    if (user){
      return (
        <Menu.Menu position='right'>
          <Menu.Item 
            name='logout'
            onClick={ () => handleLogout(history)}
          />
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
        <Link to='/'>
          <Menu.Item
            name='dashboard'
            id='dashboard'
            active={ location.pathname === '/' }
          />
        </Link>
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
