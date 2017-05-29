import React from 'react';

import Logo from '../SvgImages';
import NavigationList from './NavigationList';

const Navigation = () => (
  <div className="navigation-content">
    <div className="left">
      <Logo />
    </div>
    <div className="right">
      <NavigationList />
    </div>
  </div>
);

export default Navigation;
