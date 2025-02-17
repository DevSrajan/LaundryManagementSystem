import React from "react";
import { Link } from "react-router-dom";

import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer id="Footer">
      <Container>
        <Row className="py-3">
          <Col md={6} className="py-3">
            <h4 className="text-title">LAUNDRYWALA Online Laundry Service</h4>
            <p className="text-white">Email: mtechnologylko@gmail.com</p>
            <p className="text-white">Phone: +91 8953422402</p>
          </Col>
          <Col md={3} className="py-3">
            <h5>Quich Links</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <Link>Get Help</Link>
              </li>
              <li className="py-2">
                <Link>Privacy Policy</Link>
              </li>
              <li className="py-2">
                <Link>Cookie Policy</Link>
              </li>
              <li className="py-2">
                <Link>About Us</Link>
              </li>
              <li className="py-2">
                <Link>Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="py-3">
            <h5>Follow Us On</h5>
            <ul className="list-unstyled social-icons">
              <li className="mx-2 ">
                <a href="/">
                  {" "}
                  <i className="fab fa-facebook face"></i>
                </a>
              </li>
              <li className="mx-2">
                {" "}
                <a href="/">
                  <i className="fab fa-youtube you"></i>
                </a>
              </li>
              <li className="mx-2">
                <a href="/">
                  <i className="fab fa-instagram insta"></i>
                </a>
              </li>
            </ul>
            <h5>Login</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <a
                  href="http://localhost:2000/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Admin Login
                </a>
              </li>
              <li className="py-2">
                <a href="/delivery-login">Delivery Login</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom d-flex justify-content-center">
          <p className="text-secondary">
            Copyright &copy;Developed by{" "}
            <a
              href="https://www.mtechnologies.org"
              target="_blank"
              rel="noreferrer"
            >| Mecatredz Softwares & Innovations (P) Ltd |
              Srejan Mishra & Shani Singh
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
