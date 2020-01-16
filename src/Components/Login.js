// import React, { useState } from 'react';
// import axios from 'axios';

// function Login(props) {
//   const [inputs, setInputs] = useState();
//   const handleChange = e => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const handleSubmit = async () => {
//     const loginResponse = await axios.post('/login', inputs);
//     console.log(loginResponse.data);
//     // props.history.push('/dashboard');
//     const role = loginResponse.data.role;
//     localStorage.setItem('roles', JSON.stringify(role));
//     // history.push('/app');
//   };

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
class Login extends React.Component {
  state = {
    login: false
  };
  setLogin = () => {
    this.setState({
      login: true
    });
  };
  renderLogin = () => {
    if (this.state.login) {
      return <Redirect to='/dashboard' />;
    }
  };
  render() {
    return (
      <div>
        <div className='split leftlogin'>
          <div className='center'></div>
        </div>
        <div className='split right'>
          <div className='center' style={{ width: '40vw', marginTop: '20%' }}>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                name='password'
                id='exampleInputPassword1'
                placeholder='Password'
              />
            </div>
            <div className='btn btncenter'>
              {this.renderLogin()}
              <Button
                color='success'
                onClick={this.setLogin}
                style={{ color: 'white' }}
              >
                Login
              </Button>{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
