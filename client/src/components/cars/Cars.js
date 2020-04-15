import React,{useState, useEffect, useContext }from 'react';
import { Image, Item,  } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Car from './Car';

const Cars = (props) => {
  
  const [cars, setCars] = useState([])
  const {user} = useContext(AuthContext)  

  useEffect( () => {
    axios.get(`/api/users/${user.id}/cars`)
    .then(res => {    
      setCars(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[user.id])


  const renderCars = () =>{
    return cars.map( car => (      
      <div key = {`car-${car.id}`}>
        <Car car={car}/>
      </div >
    ));
  }

 
  
  return(

    <Item>
       {cars.length === 0 ?
       <Link to={{pathname: `/CarApi` }}>You do not have Car Add Car</Link>
       :
       <>
      <Link to={{pathname: `/CarApi` }}>Add Car</Link>
       {renderCars()} </>}
    </Item>
  )
}




export default Cars