import React from 'react'
import Cars from './cars/Cars'
import {DBackGround} from '../components/styles/DashBoard'


const Dashboard = () => {

  return(
    <div style={styles.container}>
      <div>
        <h1 style={styles.center}>Dashboard</h1>
        <Cars />
      </div>
    </div>
  )
}

export default Dashboard

const styles = {
  center: {
    textAlign: 'center',
    paddingTop: '1em',
  },
  container: {
    padding: '5em 10% 6em',
    height: '100%',
    position: 'relative',
    minHeight: '100%',
    overflow: 'auto',
  },
}