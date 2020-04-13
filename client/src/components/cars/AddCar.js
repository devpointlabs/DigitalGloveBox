import React,{useState,useContext,useEffect,} from 'react'
import axios from 'axios';
import { Form, Button, } from 'semantic-ui-react';
import { AuthContext } from '../../providers/AuthProvider';
import {useFormInput,} from "../Hooks/useFormInput";
import {Redirect} from 'react-router-dom'

const AddCar = (props) =>{
  
  const { user } = useContext(AuthContext)
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [make, setMake] = useState("")
  const color = useFormInput("")
  const license_plate= useFormInput("")
  const policy_exp = useFormInput("")
  const [roadside_ass, setRoadside_ass] = useState(false)
  const miles = useFormInput("")
  const vin = useFormInput ("")
  const policy_number = useFormInput ("")
  const insurance_prov_num = useFormInput ("")
  const insurance_provider = useFormInput("")
 
  const [redirect,setRedirect]= useState(null)

 
    
  useEffect(()=>{
        setModel(props.model)
        setYear(props.year)
        setMake(props.make)
  }, [props.model, props.make, props.year])

    if (redirect) {
      return <Redirect to={redirect} />
    }
      
    const handleSubmit = e => {
      e.preventDefault()
      axios.post(`/api/users/${user.id}/cars`,{make:make,model:model,year:year,color:color.value,
      license_plate:license_plate.value,policy_exp:policy_exp.value,
      roadside_ass,miles:miles.value,vin:vin.value,policy_number:policy_number.value,
      insurance_prov_num:insurance_prov_num.value,insurance_provider:insurance_provider.value})
      .then
        (res => setRedirect({redirect:"/"}))
      .catch( (err) => {
        console.log(err)
      })
    }
              
    return(
      <Form onSubmit={handleSubmit}>
      
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


