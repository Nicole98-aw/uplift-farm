import React from 'react';

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <div className='split left'>
          <div className='center'></div>
        </div>
        <div className='split right'>
          <div className='center'>
            <div
              className='card'
              style={{ width: '40rem', height: '35rem', float: 'right' }}
            >
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <input
                      type='name'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Full Names'
                    />
                  </div>
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
                      type='town'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Town'
                    />
                  </div>
                  <div className='btncenter'>
                    <button type='submit' className='btn btn-primary'>
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
