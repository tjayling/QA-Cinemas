import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons"

export default function Socials() {
  return (
    <div class="social-container">
        <h6>Socials</h6>
        <a href='https://en-gb.facebook.com/' className='facebook social'>
        <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a href='https://twitter.com/' className='Twitter social' >
        <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <a href='https://www.instagram.com/' className='Instagram social'>
        <FontAwesomeIcon icon={faInstagram} size="1x" /> 
        </a>
    </div>
  );
}

