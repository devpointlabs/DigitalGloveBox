import React from 'react'
import { Table, Button,  } from 'semantic-ui-react'
import axios from 'axios'

const CarProfile = (props) => {

  const { car } = props
  const { delete } = props
  
  return (
    <>
      <h1>Car Profile</h1>
      <Button>Edit</Button>
      <Button onClick={delete(car.id)}>Delete </Button>
      <Button>Documents</Button>
      <h1>{car.year} {car.make} {car.model}</h1>
      <img>{car.image}</img>

      <Table key={car.id}>
        <Table.Body>
          <Table.Row textAlign='left'>
            <Table.Cell>License Plate {car.licence_plate}</Table.Cell>
            <Table.Cell>VIN {car.vin}</Table.Cell>
            <Table.Cell>Miles {car.miles}</Table.Cell>
          </Table.Row>
          <Table.Row textAlign='left'>
            <Table.Cell>Insurance Provider {car.policy_number}</Table.Cell>
            <Table.Cell>Policy Expiry {car.policy_exp}</Table.Cell>
            <Table.Cell>Policy Number {car.policy_number}</Table.Cell>
            <Table.Cell>Roadside Assistance {car.roadside_ass}</Table.Cell>
            <Table.Cell>Insurance Provider Number {car.insurance_prov_num}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default CarProfile

// class CarProfile extends React.Component {

  // state = { car: [] };

  // componentDidMount() {
  //   // const { carId } = this.props;
  //   // axios.get(`/api/users/${user_id}/cars/${id}`)
  //   // .then(res => {
  //   //   console.log(res);
  //   //   this.setState({
  //   //     car: res.data
  //   //   })
  //   // })
  // }