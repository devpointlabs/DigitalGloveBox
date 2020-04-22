import React from 'react'
import Cars from './cars/Cars'
import {DBackGround} from '../components/styles/DashBoard'


const Dashboard = () => {

  return(
    <>
      <div>
        <h1 style={styles.center}>Dashboard</h1>
        <Cars />
      </div>
    </>
  )
}

export default Dashboard

const styles = {
  center: {
    textAlign: 'center',
    paddingTop: '1em',
  }
}