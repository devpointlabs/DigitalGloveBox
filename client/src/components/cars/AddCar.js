import React,{useState,useContext,useEffect,} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Icon } from 'semantic-ui-react';
import { FormContainer, FormInput, Button, Form} from '../../styled_component/styledComponents';
// Button, Form, FormInput
import { AuthContext } from '../../providers/AuthProvider';
import {useFormInput,} from "../Hooks/useFormInput";
import {Redirect} from 'react-router-dom'
import Filepond from '../docs/Filepond';

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

  const [ toggleForm, setToggleForm ] = useState('car')
  const [id, setId] = useState()
  const [redirect,setRedirect]= useState(null)

 
    
  useEffect(()=>{
        setModel(props.model)
        setYear(props.year)
        setMake(props.make)
  }, [props.model, props.make, props.year])



      
    const handleSubmit = ( e ) => {
      e.preventDefault()
      axios.post(`/api/users/${user.id}/cars`,{make:make,model:model,year:year,color:color.value,
      license_plate:license_plate.value,policy_exp:policy_exp.value,roadside_ass,
      miles:miles.value,vin:vin.value,policy_number:policy_number.value,
      insurance_prov_num:insurance_prov_num.value,insurance_provider:insurance_provider.value}, )
      .then(
        res => {
        
          return(
          setId(res.data.id),
          setToggleForm('filepond')
          )
        }
           )
        // (res => setRedirect({redirect:"/"}))
      .catch( (err) => {
        console.log(err)
      })
    }

    const handleCarSubmit= () =>{
      setToggleForm('addInsurance')
    }
   

    const renderForms = () => {

      if (toggleForm === 'filepond'){
        if (redirect===true){
          return <Redirect to={'/dashboard'} />
        }else{
        return (
          <FormContainer>
            <span> <Icon name="plus circle" />UPLOAD YOUR CAR PHOTO OR RETURN TO DASHBOARD</span> 
          <Filepond route={`/api/users/${user.id}/cars/${id}`}/>
          <br />
          <Link to={{pathname: '/dashboard'}}> 
            <Button> Back to Car Profile</Button>
          </Link> 
        </FormContainer>)}
      } else if(toggleForm === 'addInsurance'){

        return (
          <FormContainer>
          <form style={{ position: "relative", margin: "2rem 0", }} method="post" onSubmit={handleSubmit}>
              <FormInput
                label="Policy Number"
                optional = "true"
                name='policy_number'
                placeholder='Policy Number'
                {...policy_number}
              />
              <FormInput
                label="Policy Expiration"
                type = 'date'
                optional = "true"
                name='policy_exp'
                placeholder='XX/XX'
                {...policy_exp}
              />
              <FormInput
                label="Insurance Provider Number"
                optional = "true"
                name='insurance_prov_num'
                placeholder='Insurance Provider Number'
                {...insurance_prov_num}
              />
              <FormInput
                label="Insurance Provider*"
                required
                name='insurance_provider'
                placeholder='Insurance Provider'
                {...insurance_provider}
              />
            <FormInput
              label="Roadside Assistance? Check for yes."
              name='roadside_ass'
              onChange={(e) => setRoadside_ass(!roadside_ass)}
              checked={roadside_ass}
              type='checkbox'
            />
          <Button onClick={()=>setRedirect(true)}>Save</Button> <Button >Save & Add Photo</Button>

        </form>
        </FormContainer>
        )


      } else{
        return (
          <FormContainer>
          <Form onSubmit={handleCarSubmit}>
      
              <FormInput
                label="Color*"
                name='color'
                required
                placeholder='Color'
                {...color}
              />
              <FormInput
                label="License Plate*"
                required
                name='license_plate'
                placeholder='License Plate'
                {...license_plate}
              />
              <FormInput
                label="Vin Number*"
                required
                name='vin'
                placeholder='Vin Number'
                {...vin}
              />
              <FormInput
                label="Miles*"
                required
                name='miles'
                placeholder='Total Miles'
                {...miles}
              />
              
          <Button >Add Insurance Info</Button>
          
        </Form>
        </FormContainer>
        )}
    }
              
    return(
      <div style={styles.container}>
        {renderForms()}
      </div>
    )
}

export default AddCar

const styles = {
  container: {
    padding: '5em 10% 6em',
    height: '100%',
    position: 'relative',
    minHeight: '100%',
    overflow: 'auto',
  },
}
