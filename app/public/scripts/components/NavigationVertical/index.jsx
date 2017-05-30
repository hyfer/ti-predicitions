import React from 'react';

function NavigationHorizontal() {
  return (
    <nav>
      <ul className="navigation-vertical">
        <li className="item">
          <a href="/" className="link-text -large">Offer</a>
        </li>
        <li className="item">
          <a href="/" className="link-text -large">Work</a>
        </li>
        <li className="item">
          <a href="/" className="link-text -large">Contact</a>
        </li>
        <li className="item">
          <a href="/" className="link-text -medium">
            Open positions
            <div className="badge-inline">
              <span className="number">3</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationHorizontal;
