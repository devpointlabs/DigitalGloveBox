import React,{useState, useEffect, useContext }from 'react';
import { Image, Item,  } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Car from './Car';

const Cars = (props) => {
  
  const [cars, setCars] = useState([])
  const {user} = useContext(AuthContext)
  console.log(cars)
  

  useEffect( () => {
    axios.get(`/api/users/${user.id}/cars`)
    .then(res => {    
      setCars(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])


  // addCar = () => {
  //   console.log('added')
  // }

  // deleteCar = (id) => {
  //   const {id} = this.props;
  //   axios.delete(`/api/users/${user.id}/cars/${id}`)
  //   .then(() => {
  //     const newCars = cars.filter ( car => car.id != id)
  //     this.setCars({
  //       cars: newCars
  //     })
  //   })
  // }

  // editCar = () => {
  //   console.log('edited')
  // }

  const renderCars = () =>{
    return cars.map( car => (      
      <div key = {`car-${car.id}`}>
      <Car car={car} {...car}/>
      {/* <CarProfile car={car} {...car} delete={deleteCar()}/> */}
      </div >
    ))
  }

  return(
    <Item>
      {renderCars()}
    </Item>
  )
}


const paragraph = (
  'All of your cars documents, information, and recent services in one convenient place!'
)

export default Cars