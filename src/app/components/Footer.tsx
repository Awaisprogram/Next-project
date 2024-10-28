import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a branding agency that digitally works to help companies
            grow. We have a successful track record of working with various
            organizations.
          </p>
        </div>
        <div className="footer-section">
          <h3>Special Links</h3>
          <ul>
            <li>About us</li>
            <li>Our services </li>
            <li>Portfolios</li>
            <li>Blogs</li>
            <li>Premium member</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: awaisbinmehmooodahmed@gmail.com</p>
          <p>Phone: 03183153371</p>
          <p>Scheme 33 , Karachi</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} . Awais Mehmood. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
