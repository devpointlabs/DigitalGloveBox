import React from 'react';
import { UserContainer, Button, Form, FormInput} from '../../styled_component/styledComponents';

import { AuthConsumer, } from "../../providers/AuthProvider";

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', first_name: '', last_name: '', phone_number:'', postal_code:'', comm_prefs: true };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, first_name, last_name, phone_number, postal_code, comm_prefs } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, first_name, last_name, phone_number, postal_code, comm_prefs}, history);
    else
      alert('Passwords Do Not Match!')
  }

  handleChangeCheckbox = () => this.setState((prevState) => ({ comm_prefs: !prevState.comm_prefs }))
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, first_name, last_name, comm_prefs, postal_code, phone_number } = this.state;
    
    return (
      <UserContainer>
          <h2 style={{"text-align": "center"}} >Register, it'll just take a second!</h2>
        <Form onSubmit={this.handleSubmit}>
        <FormInput
            label="First Name*"
            required
            autoFocus
            name='first_name'
            value={first_name}
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <FormInput
            label="Last Name*"
            required
            name='last_name'
            value={last_name}
            placeholder='Last Name'
            onChange={this.handleChange}
          />
          <FormInput
            label="Email*"
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
            label="Password*"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          
          <FormInput
            label="Password Confirmation*"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
{/* 
          <FormInput
            label="Check if you'd like to receive rich content on how to better manage your car"
            name='comm_prefs'
            onChange={this.handleChangeCheckbox}
            checked={comm_prefs}
          /> */}
          <Button type='submit'>Submit</Button>
        </Form>
        
      </UserContainer>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}






// import React, {useState, useContext } from 'react'
// import { Segment, Header, Form, Button } from 'semantic-ui-react';

// import { AuthConsumer } from "../providers/AuthProvider";

// const Register = (props) => {

//   const auth = useContext(AuthConsumer)
//   const [register, setRegister] = useState({ email: '', password: '', passwordConfirmation: '', });
  
//   const { email, password, passwordConfirmation } = register;
//   const{ handleRegister} = auth;
//   const { history } = props
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (password === passwordConfirmation)
//       handleRegister({ email, password, passwordConfirmation, }, history);
//     else
//       alert('Passwords Do Not Match!')
//   }

//   const handleChange = (e) => {
//     const { name, value, } = e.target;
//     setRegister({ [name]: value, });
//   }
//   return(

//     <Segment basic>
//       <Header as="h1" textAlign='center'> Register </Header>

//       <Form onSubmit={handleSubmit}>
//           <Form.Input
//             label="Email"
//             required
//             autoFocus
//             name='email'
//             value={email}
//             placeholder='Email'
//             onChange={handleChange}
//           />
//           <Form.Input
//             label="Password"
//             required
//             name='password'
//             value={password}
//             placeholder='Password'
//             type='password'
//             onChange={handleChange}
//           />
//           <Form.Input
//             label="Password Confirmation"
//             required
//             name='passwordConfirmation'
//             value={passwordConfirmation}
//             placeholder='Password Confirmation'
//             type='password'
//             onChange={handleChange}
//           />
      
//         <Segment textAlign='center' basic>
//           <Button primary type='submit'> Submit </Button>
//         </Segment>

//       </Form>
//     </Segment>
//   )
// }

// export default class ConnectedRegister extends React.Component {
//   render(){
//     return(
//       <AuthConsumer>
//         { auth => <Register { ...this.props } auth={auth} />}
//       </AuthConsumer>
//     )
//   }
// }














