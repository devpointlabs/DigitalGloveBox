import React, { Fragment } from 'react'


import { Button, Form, FormInput } from '../../styled_component/styledComponents';



import { AuthConsumer, } from "../../providers/AuthProvider";
import Filepond from '../docs/Filepond';
import { AccountStyles } from '../../styles/AccountStyles';

class Account extends React.Component {

  state = {
     editing: false, 
     formValues: { 
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        postal_code: '',
        comm_prefs: null,
      }} ;

  


  componentDidMount(){
  
    const { auth: {user: { first_name, last_name, email, phone_number, postal_code, comm_prefs, image }}} = this.props;
    this.setState({ formValues: {first_name, last_name, email, phone_number,postal_code, comm_prefs} });
    console.log(this.state)
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
  


  
  // handleChangeCheckbox = () => this.setState((prevState) => console.log (!prevState.formValues.comm_prefs) )
  
  handleChangeCheckbox = () => {
    const { formValues } = this.state;
    this.setState({formValues: { ...formValues, comm_prefs: !formValues.comm_prefs  }})
  }


  // handleChangeCheckbox = () => this.setState({formValues: {comm_prefs: (prevState) => ( !prevState.formValues.comm_prefs) }})

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: {first_name, last_name, email, phone_number,postal_code, comm_prefs } } = this.state;
    const { auth: { user, updateUser, }, } = this.props;
    // debugger
    updateUser(user.id, { first_name, last_name, email, phone_number, postal_code, comm_prefs });
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
      },
    });
  }

  optInView = () => {
    const { auth: { user } } = this.props;
    if (user.comm_prefs === true){
        return(
      <span> You are subscribed to our communications! &#127752; </span>)
    }else {
      return(
      <span> You are not subscribed to our communications. </span>)
    }
      
  }

  accountView = () => {
    const { auth: { user } } = this.props;
    return (
        <div style={{textAlign:'center'}}>
          <h1>{user.first_name} {user.last_name}</h1>
          <div style={{display:'flex', justifyContent:'center'}}> {this.photoExists()} </div>
          <h3>Your account information:</h3>

          <h5>Email - {user.email}</h5>
          <h5> Phone Number - {user.phone_number}</h5>
          <h5> Zip Code - {user.postal_code}</h5>
          {this.optInView()}
        </div>
    )
  }

  editView = () => {
    const { auth: { user },} = this.props;
    
    console.log(user)
    const { formValues: { first_name, last_name, email, phone_number,postal_code, comm_prefs }} = this.state;
  
  return (

    <Form onSubmit={this.handleSubmit}>
    
      <FormInput
            label="First Name"
            required
            autoFocus
            name='first_name'
            value={first_name}
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <FormInput
            label="Last Name"
            required
            name='last_name'
            value={last_name}
            placeholder='Last Name'
            onChange={this.handleChange}
          />
          <FormInput
            label="Email"
            required
            name='email'
            type='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />

          <FormInput
            label="Phone Number"
            optional
            name='phone_number'
            value={phone_number}
            placeholder='(XXX) XXX XXXX'
            onChange={this.handleChange}
          />
          <FormInput
            label="Zip Code"
            optional
            name='postal_code'
            value={postal_code}
            placeholder='Zip Code'
            onChange={this.handleChange}
          />

          <FormInput
            label="Check if you'd like to receive rich content on how to better manage your car"
            name='comm_prefs'
            type='checkbox'
            onChange={this.handleChangeCheckbox}
            checked={comm_prefs}
          />

        <Button>Update</Button>
        </Form>
  )
  }

  photoExists = () => {
    const { auth: { user } } = this.props;
    
    if(!user.image){
      return(
      <div  style={{width:'250px', textAlign: 'center'} }>
        <h5> You currently have no photo! Upload One: </h5>
        <Filepond refresh={true} route={`/api/users/${user.id}`}/> 
      </div>)

    }
    return (
      <div style={{width:'250px', textAlign: 'center'}} >
      
       <img style={{borderRadius: "3px"}} width="250" height="auto"src={user.image}  />
       <br />

       <h5> Would you like to update your Photo?</h5>
       <Filepond refresh={true} route={`/api/users/${user.id}`}/> 
     </div>
     )
  }
       

  render(){
    const { editing, } = this.state;

    return(
      <div style={styles.container}>
        <AccountStyles>
            { editing ? this.editView() : this.accountView()}
        
          <Button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
        </AccountStyles>
      </div>
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


const styles = {
  container: {
    padding: '5em 10% 6em',
    height: '100%',
    position: 'relative',
    minHeight: '100%',
    overflow: 'auto',
  },
}