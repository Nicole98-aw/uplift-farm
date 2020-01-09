import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className='split left'>
          <div className='center'></div>
        </div>
        <div className='split right'>
          <div className='center'>
            <form>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Email'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password confirmation'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password confirmation'
                />
              </div>
              <div className='btn btncenter'>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
