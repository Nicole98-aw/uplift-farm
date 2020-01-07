import React from 'react';
import headerImg from '../images/harvest-3679075_1920.jpg';
import vegetables from '../images/vegetables-1149006_1920.jpg';
import chicken from '../images/chicken-2742352_1920.jpg';
import cabbage from '../images/cabbage-3722498_1920.jpg';
class Home extends React.Component {
  render() {
    return (
      <div>
        <img className='harvest-img' src={headerImg} alt='' />
        <h2 className='wwa'>Who we are</h2>
        <p className='para'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </p>
        <img className='veges-img' src={vegetables} alt='' />
        <img className='chic-img' src={chicken} alt='' />
        <img className='cab-img' src={cabbage} alt='' />
      </div>
    );
  }
}

export default Home;
