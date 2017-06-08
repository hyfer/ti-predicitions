import React from 'react';

const NavigationHorizontal = () => (
  <nav>
    <ul className="navigation-block -horizontal">
      <li className="item">
        <a href="/" className="link-text -white">Offer</a>
      </li>
      <li className="item">
        <a href="/" className="link-text -white">Work</a>
      </li>
      <li className="item">
        <a href="/contact" className="link-text -white">Contact</a>
      </li>
      <li className="item">
        <a href="/" className="link-text -white">
          Open positions
        </a>
      </li>
    </ul>
  </nav>
);

export default NavigationHorizontal;
