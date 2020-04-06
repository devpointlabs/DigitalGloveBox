import React,{ useState, useEffect} from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
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
    })}, [user_id, id])

  const deleteCar = () => {
    axios.delete(`/api/users/${user_id}/cars/${id}`
    ).then(res => props.history.goBack()).catch(e => console.log(e))
  }

  const roadsideAssCheck= ()=> {
    if (car.roadside_ass === true){  
      return(
        <Table.Cell>Roadside Assistance <p><Icon name='check square'/></p></Table.Cell>
      )
    } else {
      return(
        <Table.Cell>Roadside Assistance <p><Icon name='x'/></p></Table.Cell>
      )}
  }

  return (
  
    <div>
      <h1>Car Profile</h1>
      <Link to={{pathname: `/${user_id}/car_profile/${id}/edit`, car: car }}>
        <Button>Edit</Button>
      </Link>
      
      <Button onClick={deleteCar}>Delete</Button>
      
      <Link to={{pathname: `/car_profile/${id}/documents`, car: car }}>
        <Button>Document</Button>
      </Link>
      <h1>{car.year} {car.make} {car.model}</h1>
      <img alt="user_car">{car.image}</img>

      <Table key={car.id}>
        <Table.Body>
          <Table.Row textAlign='left'>
            <Table.Cell>License Plate <p>{car.license_plate}</p></Table.Cell>
            <Table.Cell>VIN <p>{car.vin}</p></Table.Cell>
            <Table.Cell>Miles <p>{car.miles}</p></Table.Cell>
          </Table.Row>
          <Table.Row textAlign='left'>
            <Table.Cell>Insurance Provider <p>{car.insurance_provider}</p></Table.Cell>
            <Table.Cell>Policy Expiry <p>{car.policy_exp}</p></Table.Cell>
            <Table.Cell>Policy Number <p>{car.policy_number}</p></Table.Cell>
            {roadsideAssCheck()}
            <Table.Cell>Insurance Provider Number <p>{car.insurance_prov_num}</p></Table.Cell>
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
