import React from 'react';
import headerImg from '../images/harvest-3679075_1920.jpg';
import EmailIcon from '../icons/Email';
import CallIcon from '../icons/Call';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <img className='harvest-img' src={headerImg} alt='' />
        <h3 className='c-page'>Get in touch with us:</h3>
        <p className='c-text'>
          In case of any questions please contact us through our email or call
          us:
        </p>
        <div className='contact'>
          <EmailIcon width='90px' height='50px' />
          <a href='/'>upliftfarmers@gmail.com</a>
          <CallIcon width='90px' height='50px' />
          <p>+254 792281921</p>
        </div>
      </div>
    );
  }
}

export default Contact;
