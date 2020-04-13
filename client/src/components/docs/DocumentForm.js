import React, { useState } from 'react'
import { Form, Segment, Header, Button } from 'semantic-ui-react'
import axios from 'axios'

import Filepond from './Filepond'

const DocumentForm = (props) => {

  const [ showPond, setShowPond ] = useState(false)
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const { car_id } = props
  const [doc, setDoc] = useState({})
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
         
            <Form.Input
              label="Category"
              required
              name='category'
              value={category}
              placeholder='category'
              onChange={(e) => setCategory(e.target.value)}
            />
             <Form.Input
              label="Name"
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