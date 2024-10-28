import React from 'react';
import { Libre_Baskerville } from 'next/font/google';


const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const Services = () => {
  return (
    <div className="services-container">

      <div className="service-item">
        <h2 className={libreBaskerville.className}>
          Responsive Results</h2>
        <p className="service-description">
          We help businesses & individuals promote their products, services or brands through various digital channels and platforms.
        </p>
      </div>

      <div className="service-item">
        <h2 className={libreBaskerville.className}>
        Data-Driven Approach</h2>
        <p className="service-description">
          Effective digital marketing relies heavily on data and analytics. We often have a strong emphasis on collecting and analyzing data.
        </p>
      </div>

      
      <div className="service-item">
        <h2 className={libreBaskerville.className}>
        Customized Strategies</h2>
        <p className="service-description">
          We maximize the client online presence and achieve their specific objectives. Customization is the key to effective and impactful.
        </p>
      </div>
    </div>
  );
};

export default Services;
