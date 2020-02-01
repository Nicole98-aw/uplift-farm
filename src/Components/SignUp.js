// import React, { useState } from 'react';
// import axios from 'axios';
import { FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

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

import React, { useState } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
function SignUp(props) {
  const [signups, setSignups] = useState();
  const handleSignup = props => {
    axios.post('/signup', signups).then(res => {
      if (typeof res.data == 'string') {
        return (window.location.href = '/dashboard');
      } else {
        return alert('Please Fill all fields!');
      }
      // console.log(res.data);
    });
    // console.log(props);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setSignups({ ...signups, [name]: value });
  };
  console.log(signups);
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
                  onChange={handleChange}
                  required
                />
              </div>
              <FormGroup>
                <Label for='exampleSelect'>Select Role</Label>
                <Input
                  type='select'
                  name='role'
                  id='exampleSelect'
                  onChange={handleChange}
                >
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
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password2'
                  className='form-control'
                  id='exampleInputPassword2'
                  placeholder='confirm password'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='btncenter btn'>
                <Button
                  type='submit'
                  color='success'
                  onClick={handleSignup}
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

export default SignUp;
