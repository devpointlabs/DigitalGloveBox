import React, { useState, useEffect } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import DocumentNavbar from './DocumentNavbar'
import axios from 'axios'
import { AuthConsumer } from '../../providers/AuthProvider'
import Filepond from './Filepond'

const DocumentUpload = (props) => {

  const [car, setCar] = useState({})
  const { id }  = props.match.params
  const user_id = props.auth.user.id

  useEffect( () => {
    axios.get(`/api/users/${user_id}/cars/${id}`).then(res => {
      (setCar( res.data ))
    }).catch(err => {
      console.log(err)
    }
    )}, [user_id, id])
  
  return (
    <>
      <h1>Documents</h1>
      <h4>Upload and store all of you car-related documents, including your service records, insurance file and more.</h4>
      <h1>{car.year} {car.make} {car.model}</h1>
      <img alt="user car">{car.image}</img>
      <br />
      <DocumentNavbar />
      <br />
      <Button><Icon name="plus circle" />UPLOAD YOUR DOCUMENTS</Button>
      <Filepond  car_id={ id }/>
    </>
  )
}

const ConnectedDocumentUpload = (props) => (
  <AuthConsumer> 
    { auth =>
      <DocumentUpload {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedDocumentUpload