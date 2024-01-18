// Footer.js

import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="mail-section">
          <span className="mail-icon">✉️</span>
          <h2>Email us at: example@example.com</h2>
        </div>
      </div>
      <div className="copyright-section">
        <p>&copy; 2024 HireMe (A Smart Hiring Platform). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
