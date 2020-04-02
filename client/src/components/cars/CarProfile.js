import React from 'react'
import { Table } from 'semantic-ui-react'

class CarProfile extends React.Component {

  state = { car: [] };

  render(){
    return(
      <h1>Car Profile</h1>
      <h1>{year}{make}{model}</h1>
      <button>Edit</button>
      <button>Delete </button>
      <button>Documents</button>
      <img>{image}</img>

      <Table>
        <Table.Body>
          <Table.Row textAlign='left'>
            <Table.Cell>Licence Plate {license_plate}</Table.Cell>
            <Table.Cell>VIN {vin}</Table.Cell>
            <Table.Cell>Miles {miles}</Table.Cell>
          </Table.Row>
          <Table.Row textAlign='left'>
            <Table.Cell>Insurance Provider {insurance_prov}</Table.Cell>
            <Table.Cell>Policy Expiry {policy_exp}</Table.Cell>
            <Table.Cell>Policy Number {policy_number}</Table.Cell>
            <Table.Cell>Roadside Assistance {roadside_ass}</Table.Cell>
            <Table.Cell>Insurance Provider Number {insurance_prov_num}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default CarProfile