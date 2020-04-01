import React from 'react';
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import axios from 'axios';

export default class Car extends React.Component {
  state = { car:{} }

  componentDidMount(user_id, id){
    axios.get(`/api/users/${user_id}/cars/${id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }


  render(){
    // const { year, make, model } = this.state
    return(
      <Item>
        {/* <Item.Image /> some way to pull car image from the database? */}
        <Item.Content>
        {/* <Item.Header as='a'>{year} {make} {model}</Item.Header> */}
          <Item.Description>{paragraph}</Item.Description>
          <Button>Car Profile</Button>
        </Item.Content>
      </Item>
    )
  }

}

const paragraph = (
  'All of your cars documents, information, and recent services all in one convenient place!'
)