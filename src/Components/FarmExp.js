import React from 'react';

class FarmExp extends React.Component {
  render() {
    return (
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
            <button className='f-btn'>send</button>
          </div>
        </div>
      </div>
    );
  }
}
export default FarmExp;
