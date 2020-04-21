import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Filepond from '../docs/Filepond';
import { Button, FormContainer, Form, FormInput } from '../../styled_component/styledComponents';


const EditCarProfile = (props) => {

  const [carEdit, setCarEdit] = useState({})
  
  const [toggleForm, setToggleForm] = useState(false)

  useEffect( () => {
    const { user_id, id } = props.match.params;
    axios.get(`/api/users/${user_id}/cars/${id}`).then(res => {
      setCarEdit(res.data)
    }).catch(err => {
      console.log(err)
    })}, [props.match.params])

  const { user_id, id } = props.match.params;

  const handleSubmit = e => {
    e.preventDefault()
    axios.put(`/api/users/${user_id}/cars/${id}`, carEdit).then(res => {
      setCarEdit({...carEdit});
      props.history.goBack()
    }).catch( (err) => {
      console.log(err.response)
    })
  }

  const handleChangeCheckbox= e => {
  setCarEdit({roadside_ass: !carEdit.roadside_ass})}    

  const handleChange = e => {
    const { name, value } = e.target
    setCarEdit({
      [name]: value,
    })
  }

  const renderForms = () => {
    if (toggleForm === true){
    
      return (
        <div>
          <br />
          <span> <Icon name="plus circle" />Edit Your Car Photo</span> 
        <Filepond route={`/api/users/${user_id}/cars/${id}`}/>
        <br />
        <Link to={{pathname: `/${user_id}/car_profile/${id}/edit`}}> 
          <Button onClick={() => setToggleForm(false)}> Back to Car Edit Form</Button>
        </Link> 
      </div>)
      } else {
      return(
      <>
      
      <Button onClick={() => setToggleForm(true)}> Edit Car Photo</Button>
        <Form onSubmit={handleSubmit}>
        <FormInput
          label="License Plate"
          required
          autoFocus
          name='license_plate'
          value={carEdit.license_plate}
          placeholder='License Plate'
          onChange={handleChange}
        />
        <FormInput
          label="VIN Number"
          required
          name='vin'
          value={carEdit.vin}
          placeholder='Vin Number'
          onChange={handleChange}
        />
        <FormInput
          label="Miles"
          required
          name='miles'
          value={carEdit.miles}
          placeholder='Total Miles'
          onChange={handleChange}
        />
        <FormInput
          label="Insurance Provider"
          required
          name='insurance_provider'
          value={carEdit.insurance_provider}
          placeholder='Insurance Provider'
          onChange={handleChange}
        />
        <FormInput
          label="Policy Number"
          optional
          name='policy_number'
          value={carEdit.policy_number}
          placeholder='Policy Number'
          onChange={handleChange}
        />
        <FormInput
          label="Policy Expiration"
          type = 'date'
          name='policy_exp'
          value={carEdit.policy_exp}
          placeholder='XX/XX'
          onChange={handleChange}
        />
        <FormInput
          label="Insurance Provider Number"
          name='insurance_prov_num'
          value={carEdit.insurance_prov_num}
          placeholder='Insurance Provider Number'
          onChange={handleChange}
        />
        <FormInput
          label="Roadside Assistance? Check for yes."
          name='roadside_ass'
          type='checkbox'
          onChange={handleChangeCheckbox}
          checked={carEdit.roadside_ass}
        />
        <Button>Update</Button>
      </Form>
   
    </>
      )
    }}

    if(!carEdit.file){
      return(
      <>
      <FormContainer> 
      <div  style={{width:'250px', margin: 'auto'}}>
        <h3 style={{textAlign: 'center'}}> You currently have no photo! </h3>
      </div>
      {renderForms()}
      </FormContainer> 
      </>
      )}else {

    return (
    <>
    <FormContainer> 
      <div style={{width:'250px', margin: 'auto',}} >
      
       <img style={{borderRadius: "3px"}} width="250" height="auto"src={carEdit.file}  />
       <br />
      </div>
       {renderForms()}
    </FormContainer> 
    </>
     )
    }
}

export default EditCarProfile