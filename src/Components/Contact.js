import React from 'react';
import headerImg from '../images/harvest-3679075_1920.jpg';
import EmailIcon from '../icons/Email';
import CallIcon from '../icons/Call';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <img className='harvest-img' src={headerImg} alt='' />
        <h2>Get in touch with us:</h2>
        <EmailIcon width='90px' height='50px' />
        <p>upliftfarmers@gmail.com</p>
        <CallIcon width='90px' height='50px' />
        <p>+254 92281921</p>
      </div>
    );
  }
}

export default Contact;
