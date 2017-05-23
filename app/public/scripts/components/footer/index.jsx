import React from 'react';
import { HumblebeeLogo, HiveLogo, Facebook, Instagram, Linkedin } from '../svg-icons';

const Footer = () => {
  return (
    <div className="footer-wrapper bg -dark">
      <div className="row">
        <div className="logo-col -hb col -c2 -sm6"> <HumblebeeLogo /> </div>
        <div className="footer-content col -c6 -sm12">
          <h5 className="-strong"> Want to know more? </h5>
          <h6 className="-strong"> Get in <a href="mailto:hive@humblebee.se"> touch</a> or follow Hive on social media </h6>

          <div className="social-list">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Linkedin /></a>
          </div>
         </div>
        <div className="logo-col -hive col -c2 -sm6"> <HiveLogo />  </div>
       </div>
    </div>
  )
}

export default Footer;
