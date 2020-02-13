import React from 'react';
import cow from '../images/animals-4295395_1920.jpg';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2 className='abt-page'>About Us</h2>
        <img className='cow-cow' src={cow} alt='' />

        <hr />
        <h3 className='we-help'>We get to help you,</h3>
        <div className='abt'>
          <div className='fr-buy'>
            <h4 className='fr-b'>as a farmer,</h4>
            <p>
              by connecting you with potential customers accross the
              country.We help you sell your
              produce by linking you up with potential customers who register
              with us as buyers.All you need to do is register with us and get
              the opportunity to showcase your products and sell them through
              the website to buyers from different parts of the country.In
              addition to this,you as a farmer also get the opportunity to talk
              to our Farming Experts who will be giving you advice on what to do
              and what not to do in order to produce quality and marketable
              products.
            </p>
          </div>
          <div className='fr-buy'>
            <h4 className='fr-b'>as a buyer,</h4>
            <p>
              to enjoy all the benefits that come with getting access to fresh
              and quality products that come directly from our farmers,delivered
              to you wherever you are at an affordable fee.This is optional
              though.You are able to purchase both in large and small quantities
              just by indicating the quantity of whatever product you want.Sign
              up with us and get the experience you will never live to regret!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
