import React from 'react';
import styles from './contact.module.css';
import Heading from '../components/heading'
import Image from 'next/image'; 
import contactImg from  '../images/contact.jpg'
import Font from '../components/Font';

const Contact = () => {
  return (
    <>
    <div>
      <Heading title='Contact Us'/>
    </div>
    <div className={styles['contact-container']}>
    <div className={styles['top']}>
      <h1><Font text='Have a project in mind? Lets work together'/></h1>
      <p> We provides exceptional digital marketing services to help businesses grow our clients online presence. We guarantee top-notch quality.</p>
     </div>
  
      <div className={styles['contact-image']}>
        <Image src={contactImg} alt="Contact" />
      </div>

      {/* Right side: Contact Form */}
      <div className={styles['contact-form']}>
        <form>
          <div className={styles['form-group']}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} placeholder="Your Message"></textarea>
          </div>

          <div className={styles['form-submit']}>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
