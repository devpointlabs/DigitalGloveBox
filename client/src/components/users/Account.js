import React, { Fragment } from 'react'
import { Form, Grid, Container, Divider, Header, Button, } from 'semantic-ui-react';

import { AuthConsumer, } from "../../providers/AuthProvider";

class Account extends React.Component {

  state = {
     editing: false, 
     formValues: { 
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        postal_code: '',
        comms_prefs: true,
      }};
  
  componentDidMount(){
    const { auth: {user: { first_name, last_name, email, phone_number, postal_code, comm_prefs }}} = this.props;
    this.setState({ formValues: {first_name, last_name, email, phone_number,postal_code, comm_prefs} });
  };

  toggleEdit = () => {
    this.setState( state => {
      return { editing: !state.editing,};
    });
  };

   
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
    }})
  }
  
  

  handleChangeCheckbox = () => this.setState((prevState) => ({ formValues: { comm_prefs: !prevState.comm_prefs }}))

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: {first_name, last_name, email, phone_number,postal_code, comm_prefs } } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    updateUser(user.id, { first_name, last_name, email, phone_number,postal_code, comm_prefs });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
      },
    });
  }

  optInView = () => {
    const { auth: { user } } = this.props;
    console.log(user)
    if (user.comm_prefs === true){
        return(
      <Header as="h5"> You are subscribed to our communications! &#127752; </Header>)
    }else {
      return(
      <Header as="h5"> You are not subscribed to our communications. </Header>)
    }
      
  }

  accountView = () => {
    const { auth: { user } } = this.props;
    return (
      <Fragment>
         <Grid.Column width={8}>
          <Header as="h1">Welcome {user.first_name} {user.last_name} </Header>
          <Header as="h3">Here is your account information:</Header>
          <Header as="h5">Email - {user.email}</Header>
          <Header as="h5"> Phone Number - {user.phone_number}</Header>
          <Header as="h5"> Zip Code - {user.postal_code}</Header>
          {this.optInView()}
        </Grid.Column>
      </Fragment>
    )
  }

  editView = () => {
    const { auth: { user },} = this.props;
    const { formValues: { first_name, last_name, email, phone_number,postal_code, comm_prefs }} = this.state;
  
  return (
    <Form onSubmit={this.handleSubmit}>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={8}>
      <Form.Input
            label="First Name"
            required
            autoFocus
            name='first_name'
            value={first_name}
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Last Name"
            required
            name='last_name'
            value={last_name}
            placeholder='Last Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            required
            name='email'
            type='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />

          <Form.Input
            label="Phone Number"
            optional
            name='phone_number'
            value={phone_number}
            placeholder='(XXX) XXX XXXX'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Zip Code"
            optional
            name='postal_code'
            value={postal_code}
            placeholder='Zip Code'
            onChange={this.handleChange}
          />

          <Form.Checkbox
            label="Check if you'd like to receive rich content on how to better manage your car"
            name='comm_prefs'
            onChange={this.handleChangeCheckbox}
            checked={comm_prefs}
          />

        <Button>Update</Button>
      </Grid.Column>
    </Form>
  )
  }

  render(){
    const { editing, } = this.state;

    return(
      <Container>
      <Divider hidden />
      <Grid>
        <Grid.Row>
          <Grid.Column>
          { editing ? this.editView() : this.accountView()}
          </Grid.Column>
        </Grid.Row>
        </Grid>
        <br />
            <Button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
      </Container>

    )
  }
}



const ConnectedAccount = (props) => (
  <AuthConsumer>
    { auth => 
      <Account { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedAccount
