import React from 'react'
import { Table, Button, } from 'semantic-ui-react'
import axios from 'axios'


const CarProfile = (props) => {

  const { id } = props.match.params
  // const { delete } = props
  console.log(car)

  // useEffect
  // axios for a car show from backend

  //Edit Car

  //Delete Car

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

  return (
  
    <div>
      <h1>Car Profile</h1>
      <Button>Edit</Button>
      <Button>Delete </Button>
       {/* onClick={delete (car.id)} */}
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
            <Table.Cell>Roadside Assistance {car.roadside_ass}</Table.Cell>
            <Table.Cell>Insurance Provider Number {car.insurance_prov_num}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

export default CarProfile