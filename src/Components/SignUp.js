// import React, { useState } from 'react';
// import axios from 'axios';
import { FormGroup, Label, Input } from 'reactstrap';

// function SignUp(props) {
//   const [inputs, setInputs] = useState();
//   // const [dropdownOpen, setDropdownOpen] = useState(false);

//   // const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const hanleSubmit = async () => {
//     const signupResponse = await axios.post('/register', inputs);
//     console.log(signupResponse.data);
//     props.history.push('/dashboard');
//   };
//   console.log(inputs);

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
class SignUp extends React.Component {
  state = {
    signup: false
  };
  setSignUp = () => {
    this.setState({
      signup: true
    });
  };
  renderSignUp = () => {
    if (this.state.signup) {
      return <Redirect to='/dashboard' />;
    }
  };
  render() {
    return (
      <div>
        <div className='split leftsignup'>
          <div className='center'></div>
        </div>
        <div className='split right'>
          <div className='center'>
            <div style={{ width: '40vw', height: '35rem', float: 'right' }}>
              <div className='card-body'>
                <div className='form-group'>
                  <input
                    type='name'
                    name='fullNames'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Full Names'
                  />
                </div>
                <FormGroup>
                  <Label for='exampleSelect'>Select Role</Label>
                  <Input type='select' name='role' id='exampleSelect'>
                    <option>Farmer</option>
                    <option>Buyer</option>
                    <option>Farming Expert</option>
                  </Input>
                </FormGroup>
                <div className='form-group'>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='Password'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='password2'
                    className='form-control'
                    id='exampleInputPassword2'
                    placeholder='confirm password'
                  />
                </div>
                <div className='btncenter btn'>
                  {this.renderSignUp()}
                  <Button
                    color='success'
                    onClick={this.setSignUp}
                    style={{ color: 'white' }}
                  >
                    Sign Up
                  </Button>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
