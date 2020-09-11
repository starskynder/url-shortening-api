import React from "react";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="footer__list">
        <li className="footer__listitem">Features</li>
        <li className="footer__listitem">
          <a href="" className="footer__link">
            Link Shortening
          </a>
        </li>
        <li className="footer__listitem">
          <a href="" className="footer__link">
            branded links
          </a>
        </li>
        <li className="footer__listitem">
          <a href="" className="footer__link">
            analytics
          </a>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__listitem">Resources</li>
        <li className="footer__listitem">
          <a href="#" className="footer__link">
            Blog
          </a>
        </li>
        <li className="footer__listitem">
          <a href="#" className="footer__link">
            Developers
          </a>
        </li>
        <li className="footer__listitem">
          <a href="#" className="footer__link">
            support
          </a>
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__listitem">Company</li>
        <li className="footer__listitem">
          <a href="#" className="footer__link">
            About
          </a>
        </li>
        <li className="footer__listitem">
          <a href="#" className="footer__link">
            Our Team
          </a>
        </li>
        <li className="footer__listitem">
          <a href="#" className="footer__link">
            careers
          </a>
        </li>
        <li className="footer__listitem">
          <a href="#" className="footer__link">
            contact
          </a>
        </li>
      </ul>
      <div className="socials">
        <a className="footer__social footer__link">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="footer__social footer__link">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="footer__social footer__link">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a className="footer__social footer__link">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
