import React from 'react';
import { Button, Image, Item,  } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Car extends React.Component {
  state = { cars: [] }


  componentDidMount(auth,cars){
    axios.get(`/api/users/${auth.user.id}/cars/${cars.id}`)
    .then(res => {
      console.log('mounted')
      console.log(this.state)
      this.setState({ cars: res.data })
    })
    .catch(err => {
      console.log(err)
    })
  }


  render(){
    const { image, year, make, model } = this.state
    return(
      <Item>
        {/* <Item.Image image={image} /> */}
        <Item.Content>
        <Item.Header as='a'>{year} {make} {model}</Item.Header>
          <Item.Description>{paragraph}</Item.Description>
          <Link to='/'>Car Profile</Link>
        </Item.Content>
      </Item>
    )
  }

}

const paragraph = (
  'All of your cars documents, information, and recent services in one convenient place!'
)