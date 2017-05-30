import React from 'react';

function NavigationHorizontal() {
  return (
    <nav>
      <ul className="navigation-horizontal">
        <li className="item">
          <a href="/" className="link-text">Offer</a>
        </li>
        <li className="item">
          <a href="/" className="link-text">Work</a>
        </li>
        <li className="item">
          <a href="/" className="link-text">Contact</a>
        </li>
        <li className="item">
          <a href="/" className="link-text">
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
