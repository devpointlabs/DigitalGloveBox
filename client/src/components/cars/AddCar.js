import React,{useState, useEffect,useContext} from 'react'
import axios from 'axios';
import { Form, Button} from 'semantic-ui-react';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';

const AddCar = (props) =>{
  
  const {user} = useContext(AuthContext)
  const [addCars, setAddCars] = useState([])
  

useEffect( () => {
  axios.get(`/api/users/${user.id}/cars`)
  .then(res => {    
    setAddCars(res.data)
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
},[])

// const [make,setMake] = useState('')
// const [model,setModel] = useState('')
// const [year,setYear] = useState('')
// const [color,setColor] = useState('')
// const [license_plate,setLicense_plate] = useState('')
// const [vin,setvin] = useState('')
// const [miles,setMiles] = useState('')
// const [policy_number,setPolicy_number] = useState('')
// const [policy_exp,setPolicy_exp] = useState('')
// const [roadside_ass,setRoadside_ass] = useState('')
// const [insurance_prov_num,setInsurance_prov_num] = useState('')

// const car = cars

// const defaultValues= {
  // make: car.make,
  // model: car.model,
  // year: car.year,
  // color: car.color,
  // license_plate: car.license_plate,
  // vin: car.vin,
  // miles: car.miles,
  // policy_number: car.policy_number,
  // policy_exp: car.policy_exp,
  // roadside_ass: car.roadside_ass,
  // insurance_prov_num: car.insurance_prov_num,
// }

// const [carAdd, setCarAdd] = useState({})
  
// const car = {
//   make: make,
//   model:model,
//   year: year,
//   color: color,
//   license_plate: license_plate,
//   vin: vin,
//   miles: miles,
//   policy_number: policy_number,
//   policy_exp: policy_exp,
//   roadside_ass: roadside_ass,
//   insurance_prov_num: insurance_prov_num,

// }
    const handleSubmit = e => {
      e.preventDefault()
      axios.post(`/api/users/${user.id}/cars`, addCars)
      .then(res => {
        console.log(res.data)
        setAddCars(res.data);
        
        //go back to dash page

      }).catch( (err) => {
        console.log(err)
      })
    }
    

    

    const handleChangeCheckbox= e => {
      setAddCars({roadside_ass: !addCars.roadside_ass})}    

    const handleChange = e => {
      const { name, value } = e.target
      setAddCars({
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
              value={addCars.year}
              placeholder='Year'
              onChange={handleChange}
            />
            <Form.Input
              label="Make"
              required
              
              name='make'
              value={addCars.Make}
              placeholder='Make'
              onChange={handleChange}
            />
            <Form.Input
              label="Model"
              required
              
              name='model'
              value={addCars.model}
              placeholder='Model'
              onChange={handleChange}
            />
            <Form.Input
              label="Color"
              required
              name='color'
              value={addCars.color}
              placeholder='Color'
              onChange={handleChange}
            />
            <Form.Input
              label="License Plate"
              required
              name='license_plate'
              value={addCars.license_plate}
              placeholder='License Plate'
              onChange={handleChange}
            />
            <Form.Input
              label="Vin Number"
              required
              name='vin'
              value={addCars.vin}
              placeholder='Vin Number'
              onChange={handleChange}
            />
            <Form.Input
              label="Miles"
              required
              name='miles'
              value={addCars.miles}
              placeholder='Total Miles'
              onChange={handleChange}
            />

            <Form.Input
              label="Policy Number"
              optional
              name='policy_number'
              value={addCars.policy_number}
              placeholder='Policy Number'
              onChange={handleChange}
            />

            <Form.Input
              label="Policy Expiration"
              name='policy_exp'
              value={addCars.policy_exp}
              placeholder='XX/XX'
              onChange={handleChange}
            />

            <Form.Input
              label="Insurance Provider"
              name='insurance_prov_num'
              value={addCars.insurance_prov_num}
              placeholder='Insurance Provider'
              onChange={handleChange}
            />

          <Form.Checkbox
            label="Roadside Assistance? Check for yes."
            name='roadside_ass'
            onChange={handleChangeCheckbox}
            checked={addCars.roadside_ass}
          />


        <Button>Add Car</Button>
    </Form>

    )

}

export default AddCar