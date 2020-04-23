import React from 'react';

import { AuthConsumer, } from "../../providers/AuthProvider";

import { Button, Form, FormInput, UserContainer } from '../../styled_component/styledComponents';



class Login extends React.Component {
  state = { email: '', password: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;
  
    return (
      <div style={styles.container}>
        <UserContainer>
          <Form onSubmit={this.handleSubmit}>
            <h2 style={{"text-align": "center"}} >Welcome Back! Please Sign In.</h2>
              
              <FormInput 
                label="Email*"
                type="email" 
                required 
                autoFocus  
                name='email'
                value={email}
                placeholder='Email'
                onChange={this.handleChange} 
                />
          
              <FormInput 
              required
              label='Password*'
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
              />
      

              <Button type="submit">Sign In</Button>
          </Form>
        </UserContainer>
      </div>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

const styles = {
  container: {
    padding: '5em 10% 6em',
    height: '100%',
    position: 'relative',
    minHeight: '100%',
    overflow: 'auto',
  },
}