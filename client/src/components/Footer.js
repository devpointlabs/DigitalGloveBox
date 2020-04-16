import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div style={styles.footer}>
        <p>&copy; Dev Point Labs</p>
      </div>
    </footer>
  )
}

export default Footer

const styles = {
  footer: {
    width: '100%',
    backgroundColor: '#09091A',
    height: '7em',
    display: 'flex',
    color: 'white',    
  }
}