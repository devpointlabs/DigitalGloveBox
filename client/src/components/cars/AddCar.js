import React,{useState, useEffect,useContext} from 'react'
import axios from 'axios';
import { Form, Button} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';

const AddCar = (props) =>{
  
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
},[])


const car = cars

const defaultValues= {
  make: car.make,
  model: car.model,
  year: car.year,
  color: car.color,
  license_plate: car.license_plate,
  vin: car.vin,
  miles: car.miles,
  policy_number: car.policy_number,
  policy_exp: car.policy_exp,
  roadside_ass: car.roadside_ass,
  insurance_prov_num: car.insurance_prov_num,
}

const [carAdd, setCarAdd] = useState({...defaultValues})
  

    const handleSubmit = e => {
      e.preventDefault()
      axios.post(`/api/users/${user.id}/cars`, carAdd)
      .then(res => {
        console.log(res.data)
        setCarAdd(res.data)
        props.history.goBack()
      }).catch( (err) => {
        console.log(err)
      })
    }
    

    

    const handleChangeCheckbox= e => {
    setCarAdd({roadside_ass: !car.roadside_ass})}    

    const handleChange = e => {
      const { name, value } = e.target
      setCarAdd({
        [name]: value,
      })
    }



    
    return(
      <Form onSubmit={handleSubmit}>
      
            <Form.Input
              label="Year"
              required
              autoFocus
              name='year'
              value={setCarAdd.year}
              placeholder='Year'
              onChange={handleChange}
            />
            <Form.Input
              label="Make"
              required
              
              name='make'
              value={setCarAdd.Make}
              placeholder='Make'
              onChange={handleChange}
            />
            <Form.Input
              label="Model"
              required
              
              name='model'
              value={setCarAdd.license_plate}
              placeholder='Model'
              onChange={handleChange}
            />
            <Form.Input
              label="Color"
              required
              name='color'
              value={setCarAdd.color}
              placeholder='Color'
              onChange={handleChange}
            />
            <Form.Input
              label="License Plate"
              required
              name='license_plate'
              value={setCarAdd.license_plate}
              placeholder='License Plate'
              onChange={handleChange}
            />
            <Form.Input
              label="Vin Number"
              required
              name='vin'
              value={setCarAdd.vin}
              placeholder='Vin Number'
              onChange={handleChange}
            />
            <Form.Input
              label="Miles"
              required
              name='miles'
              value={setCarAdd.miles}
              placeholder='Total Miles'
              onChange={handleChange}
            />

            <Form.Input
              label="Policy Number"
              optional
              name='policy_number'
              value={setCarAdd.policy_number}
              placeholder='Policy Number'
              onChange={handleChange}
            />

            <Form.Input
              label="Policy Expiration"
              name='policy_exp'
              value={setCarAdd.policy_exp}
              placeholder='XX/XX'
              onChange={handleChange}
            />

            <Form.Input
              label="Insurance Provider"
              name='insurance_prov_num'
              value={setCarAdd.insurance_prov_num}
              placeholder='Insurance Provider'
              onChange={handleChange}
            />

          <Form.Checkbox
            label="Roadside Assistance? Check for yes."
            name='roadside_ass'
            onChange={handleChangeCheckbox}
            checked={setCarAdd.roadside_ass}
          />


        <Button>Add Car</Button>
    </Form>

    )

}

export default AddCar