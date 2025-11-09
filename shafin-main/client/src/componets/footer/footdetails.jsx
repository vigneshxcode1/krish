// Footer.js
import React from "react";
import "./Footer.css";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section">
          <h1 className="titlefooter">TITLE</h1>
          <Accordion className="footerlinks">
            <Accordion.Item eventKey="0">
      
            </Accordion.Item>
          </Accordion>

          
          <div className="contactlinks">
            <h6>Contact</h6>
            <p>Email: <a href="mailto:@gmail.com?subject=Subject%20Here&body=Body%20Here">email@gmail.com</a></p>

            <p>Ph: <a href="tel:+917812889982">+91 7812889982</a></p>

            <p><a href="/contact">social media</a></p>
          </div>
          <div className="info">
            <h6>INFO</h6>
            <p> <a href="/about">About Us</a></p>
            <p> <a href="/Returnpolicy"></a></p>
            <p>Shipping Policy</p>
            <p>Country: India</p>
            <p>Region: Chennai</p>
          </div>

          <div className="footer-sections">
            <span>&copy; 2025 name. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
