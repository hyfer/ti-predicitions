import React from 'react';

function NavigationList() {
  return (
    <ul className="navigation-list">
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
        <a href="/" className="link-text">Open positions</a>
        <div className="badge-inline">
          <span className="number">3</span>
        </div>
      </li>
    </ul>
  );
}

export default NavigationList;
