import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}><p>&copy; Dev Point Labs</p></footer> 
  )
}

export default Footer

const styles = {
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    height: '4em',
    marginTop: '-6em'
  },
}