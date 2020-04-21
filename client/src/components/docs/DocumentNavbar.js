import React, { useState, useEffect } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'
import DocumentsShow from './DocumentsShow'
import DocumentForm from './DocumentForm'

const DocumentNavbar = (props) => {
  
  const [ category, setCategory] = useState('insurance')
  const [ docs, setDocs ] = useState([])
  const [ toggleFormShow, setToggleFormShow ] = useState(false)
  const {car_id} = props
 
  let categoryDocuments = null

  useEffect( () => {
    axios.get(`/api/cars/${car_id}/documents/`).then(res => {
    return setDocs(res.data )
    }).catch(err => {
      console.log(err)
    }
    )}, [car_id])

  const handleItemClick = (e, { name }) => {
    setCategory(name);
  }

  const renderCategoryDocs = () => {
    switch (category){  
      case "insurance":
         categoryDocuments = docs.filter((doc) => doc.category === 'insurance')
        break;
      case "registration":
         categoryDocuments = docs.filter((doc) => doc.category === 'registration')
        break;
      case "service records":
         categoryDocuments = docs.filter((doc) => doc.category === 'service records')
        break;
      case "other":
         categoryDocuments = docs.filter((doc) => doc.category === 'other')
        break;
      default: 
      categoryDocuments = docs
    }   
      return(
        <div>
          <DocumentsShow docs={categoryDocuments} />
        </div>
      )   
    }

    const toggleForm = () => {
      if (toggleFormShow === true){
        return ( <DocumentForm car_id={car_id} /> )
      }
    }

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name='insurance'
          active={category === 'insurance'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='registration'
          active={category === 'registration'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='service records'
          active={category === 'service records'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='other'
          active={category === 'other'}
          onClick={handleItemClick}
        />
      </Menu>
      <br />
      <Button onClick={()=>{setToggleFormShow(!toggleFormShow)}}><Icon name="plus circle" />UPLOAD YOUR DOCUMENTS</Button>
      
      {toggleForm()}
      <br />
      <br />
      {renderCategoryDocs()}
    </div>
  ) 
}

export default DocumentNavbar