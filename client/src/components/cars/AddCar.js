import React,{useState,useContext} from 'react'
import axios from 'axios';
import { Form, Button} from 'semantic-ui-react';
import { AuthContext } from '../../providers/AuthProvider';
import {useFormInput,} from "../Hooks/useFormInput";

const AddCar = (props) =>{
  
  const {user} = useContext(AuthContext)
  const make = useFormInput("")
  const year = useFormInput("")
  const model = useFormInput("")
  const color = useFormInput("")
  const license_plate= useFormInput("")
  const policy_exp = useFormInput("")
  const [roadside_ass, setRoadside_ass] = useState(false)
  const miles = useFormInput("")
  const vin = useFormInput ("")
  const policy_number = useFormInput ("")
  const insurance_prov_num = useFormInput ("")
  const insurance_provider = useFormInput("")

    const handleSubmit = e => {
      e.preventDefault()
      axios.post(`/api/users/${user.id}/cars`,{make:make.value,model:model.value,year:year.value,color:color.value,
      license_plate:license_plate.value,policy_exp:policy_exp.value,
      roadside_ass,miles:miles.value,vin:vin.value,policy_number:policy_number.value,
      insurance_prov_num:insurance_prov_num.value,insurance_provider:insurance_provider.value})
      .then
        (res => props.history.goBack())
      .catch( (err) => {
        console.log(err)
      })
    }

    return(
      <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Year"
              autoFocus
              required
              name='year'
              placeholder='Year'
              {...year}
            />
            <Form.Input
              label="Make"       
              name='make'
              required
              placeholder='Make'
              {...make}
            />
            <Form.Input
              label="Model"
              name='model'
              required
              placeholder='Model'
              {...model}
            />
            <Form.Input
              label="Color"
              name='color'
              required
              placeholder='Color'
              {...color}
            />
            <Form.Input
              label="License Plate"
              required
              name='license_plate'
              placeholder='License Plate'
              {...license_plate}
            />
            <Form.Input
              label="Vin Number"
              required
              name='vin'
              placeholder='Vin Number'
              {...vin}
            />
            <Form.Input
              label="Miles"
              required
              name='miles'
              placeholder='Total Miles'
              {...miles}
            />
            <Form.Input
              label="Policy Number"
              optional = "true"
              name='policy_number'
              placeholder='Policy Number'
              {...policy_number}
            />
            <Form.Input
              label="Policy Expiration"
              type = 'date'
              optional = "true"
              name='policy_exp'
              placeholder='XX/XX'
              {...policy_exp}
            />
            <Form.Input
              label="insurance Provider Number"
              optional = "true"
              name='insurance_prov_num'
              placeholder='Insurance Provider Number'
              {...insurance_prov_num}
            />
            <Form.Input
              label="Insurance Provider"
              required
              name='insurance_provider'
              placeholder='Insurance Provider'
              {...insurance_provider}
            />
          <Form.Checkbox
            label="Roadside Assistance? Check for yes."
            name='roadside_ass'
            onChange={(e) => setRoadside_ass(!roadside_ass)}
            checked={roadside_ass}
          />
        <Button>Add Car</Button>
    </Form>
    )
}

export default AddCar


