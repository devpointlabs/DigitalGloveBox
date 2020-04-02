import React from 'react';
import { Image, Item,  } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Car extends React.Component {
  state = { cars: [] }

  //need to pass props of "group id" to this axios call by making a route in App.js
  componentDidMount(group_id, id){
    // const {group_id, id } = this.state
    axios.get(`/api/users/${group_id}/cars/${id}`)
    .then(res => {
      console.log('mounted')
      console.log(this.state)
      this.setState({ cars: res.data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  //need to map over all our cars in our render and see if any of them match with our user id

  render(){
    const { image, year, make, model } = this.state
    const { group_id, id } = this.state
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