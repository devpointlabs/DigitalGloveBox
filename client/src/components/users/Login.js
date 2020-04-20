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

      //   <Header as='h1' textAlign='center'>Login</Header>
      //   <Form onSubmit={this.handleSubmit}>
      //     <Form.Input
      //       label="Email"
      //       autoFocus
      //       required         
      //       name='email'
      //       value={email}
      //       placeholder='Email'
      //       onChange={this.handleChange}
      //     />
      //     <Form.Input
      //       label="Password"
      //       required
      //       name='password'
      //       value={password}
      //       placeholder='Password'
      //       type='password'
      //       onChange={this.handleChange}
      //     />
      //     <Segment textAlign='center' basic>
      //       <Button primary type='submit'>Submit</Button>
      //     </Segment>
      //   </Form>
      // </Segment>
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








// <div class="container">
//   <div class="form sign-in">
//     <h2>Welcome back,</h2>
//     <label>
//       <span>Email</span>
//       <input type="email" />
//     </label>
//     <label>
//       <span>Password</span>
//       <input type="password" />
//     </label>
//     <p class="forgot-pass">Forgot password?</p>
//     <button type="button" class="submit">Sign In</button>
//     <button type="button" class="fb-btn">Connect with <span>facebook</span></button>
//   </div>
//   <div class="sub-cont">
//     <div class="img">
//       <div class="img__text m--up">
//         <h2>New here?</h2>
//         <p>Sign up and discover great amount of new opportunities!</p>
//       </div>
//       <div class="img__text m--in">
//         <h2>One of us?</h2>
//         <p>If you already has an account, just sign in. We've missed you!</p>
//       </div>
//       <div class="img__btn">
//         <span class="m--up">Sign Up</span>
//         <span class="m--in">Sign In</span>
//       </div>
//     </div>
//     <div class="form sign-up">
//       <h2>Time to feel like home,</h2>
//       <label>
//         <span>Name</span>
//         <input type="text" />
//       </label>
//       <label>
//         <span>Email</span>
//         <input type="email" />
//       </label>
//       <label>
//         <span>Password</span>
//         <input type="password" />
//       </label>
//       <button type="button" class="submit">Sign Up</button>
//       <button type="button" class="fb-btn">Join with <span>facebook</span></button>
//     </div>
//   </div>
// </div>

// <a href="https://dribbble.com/shots/3306190-Login-Registration-form" target="_blank" class="icon-link">
//   <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png">
// </a>
// <a href="https://twitter.com/NikolayTalanov" target="_blank" class="icon-link icon-link--twitter">
//   <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png">
// </a>