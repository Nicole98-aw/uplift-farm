import React from 'react';
import cow from '../images/animals-4295395_1920.jpg';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2 className='abt-page'>About Us</h2>
        <p>
          Need to buy?Need to sell?We have got you covered because we are all about connection.Just like the name uplift farmers,we help you sell your produce by linking you up with potential customers who register with us as buyers.All you need to do is register with us and get the opportunity to showcase your products and sell them through the website to buyers from different parts of the country.In addition to this,you as a farmer also get the opportunity to talk to our Farming Experts who will be giving you advice on what to do and what not to do in order to produce quality and marketable products. 
        </p>
        <hr />
        <img className='cow-cow' src={cow} alt='' />
      </div>
    );
  }
}

export default About;
