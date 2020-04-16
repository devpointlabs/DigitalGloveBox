import React from 'react'

const Background = () => {
  return (
    <div style={styles.background}></div>
  )
}

export default Background

const styles = {
  background: {
    margin: '0',
    padding: '0',
    backgroundColor: '#C0C0C8',
    zIndex: '-1',
    position: 'fixed',
    // position: 'fixed', 
    // top: '0', 
    // left: '0',
    width: '100vw',
    height: '100vh',
    // width: '100%',
    // height: '10em',
  },
}