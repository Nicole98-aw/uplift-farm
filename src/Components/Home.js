import React from 'react';
import headerImg from '../images/harvest-3679075_1920.jpg';
import vegetables from '../images/vegetables-1149006_1920.jpg';
import chicken from '../images/chicken-2742352_1920.jpg';
import cabbage from '../images/cabbage-3722498_1920.jpg';
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='row'>
            <img className='harvest-img' src={headerImg} alt='' />
          </div>
        </div>
        <h2 className='wwa'>Who we are</h2>
        <p className='para'>
          We are a platform focusing on uplifting farmers,as the name depicts.
          1.By connecting them with buyers around the country.This to increase
          market for them as they will be able to sell not only to the locals
          around them but also to people outside their locality. 2.Connect them
          with farming experts to assist them with challenges they might be
          facing in regards to farming. We will be glad to have you join us.
        </p>
        <img className='veges-img' src={vegetables} alt='' />
        <img className='chic-img' src={chicken} alt='' />
        <img className='cab-img' src={cabbage} alt='' />
      </div>
    );
  }
}

export default Home;
