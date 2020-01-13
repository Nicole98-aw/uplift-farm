import React, { useState } from 'react';
import axios from 'axios';
import history from '../util/history';

function Login() {
  const [inputs, setInputs] = useState();
  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async () => {
    const loginResponse = await axios.post('/login', inputs);
    console.log(loginResponse.data);
    // const role = loginResponse.data.role;
    // localStorage.setItem('roles', JSON.stringify(role));
    // history.push('/app');
  };
  return (
    <div>
      <div className='split leftlogin'>
        <div className='center'></div>
      </div>
      <div className='split right'>
        <div className='center'>
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
              className='form-control'
              name='password'
              id='exampleInputPassword1'
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <div className='btn btncenter'>
            <button
              onClick={handleSubmit}
              type='submit'
              className='btn btn-primary'
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
