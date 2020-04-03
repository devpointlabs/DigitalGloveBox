import React,{ useState, useEffect} from 'react'
import { Table, Button, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { AuthConsumer } from '../../providers/AuthProvider'


const CarProfile = (props) => {
  const [car, setCar] = useState({})
  console.log(props)
  const { id } = props.match.params
  const user_id = props.auth.user.id

  useEffect( () => {
    axios.get(`/api/users/${user_id}/cars/${id}`).then(res => {
      (setCar( res.data ))
    }).catch(err => {
      console.log(err)
    })}, [])

  const deleteCar = () => {
      axios.delete(`/api/users/${user_id}/cars/${id}`
      ).then(res => props.history.goBack()).catch(e => console.log(e))
    }

  const roadsideAssCheck= ()=> {
    if (car.roadside_ass === true){  
      return(
        <Table.Cell>Roadside Assistance &#9989;</Table.Cell>
      )
    } else {
      return(
        <Table.Cell>Roadside Assistance &#10060; </Table.Cell>
      )}
  }

  return (
  
    <div>
      <h1>Car Profile</h1>
      <Link to={{pathname: `/${user_id}/car_profile/${id}/edit`, car: car }}>
        <Button>Edit</Button>
      </Link>
      
      <Button onClick={deleteCar}>Delete </Button>
      
      <Button>Documents</Button>
      <h1>{car.year} {car.make} {car.model}</h1>
      <img>{car.image}</img>

      <Table key={car.id}>
        <Table.Body>
          <Table.Row textAlign='left'>
            <Table.Cell>License Plate {car.license_plate}</Table.Cell>
            <Table.Cell>VIN {car.vin}</Table.Cell>
            <Table.Cell>Miles {car.miles}</Table.Cell>
          </Table.Row>
          <Table.Row textAlign='left'>
            <Table.Cell>Insurance Provider {car.policy_number}</Table.Cell>
            <Table.Cell>Policy Expiry {car.policy_exp}</Table.Cell>
            <Table.Cell>Policy Number {car.policy_number}</Table.Cell>
            {roadsideAssCheck()}
            <Table.Cell>Insurance Provider Number {car.insurance_prov_num}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

const ConnectedCarProfile = (props) => (
  <AuthConsumer> 
      { auth =>
        <CarProfile {...props} auth={auth} />
      }
      </AuthConsumer>
)
export default ConnectedCarProfile
