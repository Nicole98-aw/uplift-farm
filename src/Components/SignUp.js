import React, { useState } from 'react';
import axios from 'axios';
import { FormGroup, Label, Input } from 'reactstrap';

function SignUp() {
  const [inputs, setInputs] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const hanleSubmit = async () => {
    const signupResponse = await axios.post('/register', inputs);
    console.log(signupResponse.data);
  };
  console.log(inputs);
  return (
    <div>
      <div className='split leftsignup'>
        <div className='center'></div>
      </div>
      <div className='split right'>
        <div className='center'>
          <div
            className='card'
            style={{ width: '40rem', height: '35rem', float: 'right' }}
          >
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
                />
              </div>
              <FormGroup>
                <Label for='exampleSelect'>Select Role</Label>
                <Input
                  type='select'
                  onChange={e =>
                    setInputs({ ...inputs, role: [e.target.value] })
                  }
                  name='role'
                  id='exampleSelect'
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
                  id='exampleInputPassword1'
                  placeholder='Email'
                  onChange={handleChange}
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
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password2'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='confirm password'
                  onChange={handleChange}
                />
              </div>
              <div className='btncenter'>
                <button
                  onClick={hanleSubmit}
                  type='submit'
                  className='btn btn-primary'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
