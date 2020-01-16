import React from 'react';
import { Button } from 'reactstrap';

class FarmExp extends React.Component {
  render() {
    return (
      <div>
        <h5 className='fp-page'>Farming Experts page</h5>
        <div className='f-card'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Special title treatment</h5>
              <p className='card-text'>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <hr />
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                className='txt-area'
                placeholder='comment...'
              ></textarea>
              <Button
                className='fe-btn'
                color='success'
                onClick={this.setSignUp}
                style={{ color: 'white' }}
              >
                Send
              </Button>{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FarmExp;
