import React from 'react';
import FamIcon from '../icons/Farmer';
import MonIcon from '../icons/Money';
import ConIcon from '../icons/Consulting';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <h4 className='account'>Choose Account</h4>
        <div
          className='card'
          style={{ width: '18rem', height: '10rem', marginLeft: '60px' }}
        >
          <div className='card-body'>
            <FamIcon width='190px' height='100px' />
            <h2 className='card-title'>Farmers</h2>
          </div>
        </div>
        <div
          className='card'
          style={{ width: '18rem', height: '10rem', marginLeft: '200px' }}
        >
          <div className='card-body'>
            <MonIcon width='190px' height='80px' />
            <h2 className='card-title'>Buyers</h2>
          </div>
        </div>
        <div
          className='card'
          style={{
            width: '18rem',
            height: '10rem',
            float: 'right',
            marginRight: '50px'
          }}
        >
          <div className='card-body'>
            <ConIcon width='200px' height='50px' />
            <h2 className='card-title'>Farming Experts</h2>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default Dashboard;
