import React from 'react';
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

import { AuthConsumer, } from "../providers/AuthProvider";

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, } = this.state;
    
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
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














