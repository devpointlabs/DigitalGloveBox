import React from 'react';
import { Link, } from 'react-router-dom';

const NoMatch = () => {
return(
  <div style={styles}>
    <div style={styles2}>
      <h3 style={{fontSize:'50px'}}>Page Not Found</h3>
      <Link to="/dashboard" style={{fontSize:'20px'}}>Return to Dashboard</Link>
    </div>
  </div>  
  )
}


export default NoMatch;


const styles = {
  color: "white",
  backgroundImage: 'url("../Dispatch.jpg")',
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textAlign: "center",
}

const styles2 = {
  padding: "2.5em",
  display: "inline-block",
  margin: "13% 5% 0 5%",
  zIndex: "1",
  background: "rgba(255,255,255, 0.1)",
  color: "white",
  borderRadius: "3px",
}