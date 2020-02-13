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
          As the name depicts,we are a platform focusing on uplifting farmers
          and the country as a whole.We uplift farmers by expanding markets for them.This by giving them an opportunity to advertise their products and therefore be able to sell them not only within their localities but also accross the country.
          Buyers,especially those that would like to purchase in bulk,will be able to get products that are fresh from farms at an affordable price without being exploited.You get to pay for the equivalence of the quality of whatever product you purchase.No paying more for less.
          Our farmers are also at an advantage of getting agricultural advice from our farming experts so that they may be aware of what to do and what not to do so as to improve quantity and quality.

        </p>
        <img className='veges-img' src={vegetables} alt='' />
        <img className='chic-img' src={chicken} alt='' />
        <img className='cab-img' src={cabbage} alt='' />
      </div>
    );
  }
}

export default Home;

