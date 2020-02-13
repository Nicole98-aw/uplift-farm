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
        <div className='dashboard-card'>
          <div
            className='card'
            style={{ width: '15rem', height: '10rem', cursor: 'pointer' }}
            onClick={() => this.props.history.push('/farmerspost')}
          >
            <div className='card-body'>
              <FamIcon width='190px' height='100px'  style={{ paddingTop: '0.5rem'}}/>
              <h2 className='card-title'>Farmers</h2>
            </div>
          </div>
          <div
            className='card'
            style={{
              width: '15rem',
              height: '10rem',
              cursor: 'pointer'
            }}
            onClick={() => this.props.history.push('/buyersorders')}
          >
            <div className='card-body'>
              <MonIcon width='220px' height='80px' />
              <h2 className='card-title' style={{ paddingBottom: '50px' }}>
                Buyers
              </h2>
            </div>
          </div>
          <div
            className='card'
            style={{
              width: '15rem',
              height: '10rem',
              cursor: 'pointer'
            }}
            onClick={() => this.props.history.push('/farmexp')}
          >
            <div className='card-body'>
              <ConIcon width='200px' height='50px' />
              <h2 className='card-title'>Farming Experts</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
