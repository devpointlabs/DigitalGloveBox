import React from 'react'
// import '../styles/Background.css'

const Footer = () => {
  return (
    <div style={styles.container}>
      <main className="background" />
      <footer style={styles.footer}><p>&copy; Dev Point Labs</p></footer> 
    </div>
  )
}

export default Footer

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    // zIndex: '100',
    // width: '100%',
    // height: '100%',
  },
  footer: {
    width: '100%',
    backgroundColor: '#09091A',
    height: '7em',
    display: 'flex',
    color: 'white',     
  },


}