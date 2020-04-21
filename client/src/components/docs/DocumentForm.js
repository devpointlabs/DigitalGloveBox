import React, { useState } from 'react'
import { FormInput, Button, Form} from '../../styled_component/styledComponents';
import Select, { components }  from 'react-select';

import axios from 'axios'
import Filepond from './Filepond'

import './DocumentForm.css'


const DocumentForm = (props) => {

  const [ showPond, setShowPond ] = useState(false)
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const { car_id } = props
  const [id, setId] = useState()
  const documentEdit = {category: category, name: name}

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/cars/${car_id}/documents/`, documentEdit)
    .then( res => {
      console.log(res)
      setId(res.data.id)
          setShowPond(true)
        })        
      .catch( res => {
        console.log(res);
      })}

  const categoryOptions = [
    {label: 'Insurance', value: 'insurance'},
    {label: 'Registration', value: 'registration'},
    {label: 'Service Records', value: 'service records'},
    {label: 'Other', value: 'other'}
  ]

  const togglePond = () => {
    if (showPond === true){
      return(
      <Filepond refresh={'refresh'} route={`/api/cars/${car_id}/documents/${id}`}/>
      )
    }else{
      return(
        <>
        <h3 >Please provide document info:</h3>
        <Form onSubmit={handleSubmit}>
          <label className="formLabel"> Select Category*</label>
      
          <Select className="formDropdown"
            onChange={({value}) => setCategory(value)}
            options={categoryOptions}
            autoFocus={true}
            required

          />
          <br />
          <FormInput
            label="Document Name*"
            required
            name='name'
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
            <Button type='submit'>Next</Button>
         </Form>
         
         </>
      )
    }
  }
 
 return(
   togglePond()
  
 )
}

export default DocumentForm


