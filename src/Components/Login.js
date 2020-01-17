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
import { Button } from 'reactstrap';
import axios from 'axios';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      email: '',
      password: ''
    };
  }
  setLogin = props => {
    this.setState({
      login: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:4000/login/', userData).then(res => {
      if (res.status === 200) {
        window.location.href = '/dashboard';
      }
      console.log(res.data);
    });
    console.log(props);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                name='password'
                id='exampleInputPassword1'
                placeholder='Password'
                onChange={this.handleChange}
              />
            </div>
            <div className='btn btncenter'>
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
