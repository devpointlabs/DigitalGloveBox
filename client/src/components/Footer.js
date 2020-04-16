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
    backgroundColor: '#09091A',
    color: 'white',
    textAlign: 'center',
    height: '7em',
  },
}