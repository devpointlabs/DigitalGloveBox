import React, { useState } from 'react'
import { Form, Header, Button, Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import Filepond from './Filepond'

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
    {key:'insurance', text: 'Insurance', value: 'insurance'},
    {key:'registration', text: 'Registration', value: 'registration'},
    {key:'service records', text: 'Service Records', value: 'service records'},
    {key:'other', text: 'Other', value: 'other'}
  ]

  const togglePond = () => {
    if (showPond === true){
      return(
      <Filepond document_id={id} car_id={car_id}/>
      )
    }else{
      return(
        <>
        <Header as='h3'>Please provide document info:</Header>
        <Form onSubmit={handleSubmit}>
          <Dropdown
            label="Category"
            required
            placeholder='Select Category'
            name='category'
            fluid
            selection
            options={categoryOptions}
            onChange={(e, data) => setCategory(data.value)}
          />
          <br />
          <Form.Input
            label="Document Name"
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