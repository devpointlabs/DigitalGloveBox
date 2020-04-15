import React from 'react';
import { NavItem } from '../styles/NavStyle';
import '../styles/Nav.css'

const TestNav = () => {
  return (
    <div style={styles.mainNav}>
      <div style={styles.itemContTwo}>
        Logo
      </div>
      <div style={styles.itemContOne}>
      <NavItem>
      Navbar bababababay
      </NavItem>
      <NavItem>
      Navbar bababababay
      </NavItem>
      <NavItem>
      Navbar bababababay
      </NavItem>
      </div>
      </div>
  )
}

export default TestNav;

const styles = {
  mainNav: {
    display: 'flex',
    border: 'solid 1px black',
    width: '100%',
    padding: '1em 1em'
  },
  itemContOne: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '70%',
    // border: 'solid 1px blue'
  },
  itemContTwo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',
    // border: 'solid 1px green'
    
  }

}