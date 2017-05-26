import React, { Component } from 'react';

import { Logo } from './svg-images';
import NavigationList from './navigation-list';

class NavigationContent extends Component {

  render() {
    return (
      <div className="navigation-content">
      	<div className="left">
      		<Logo />
      	</div>
      	<div className="right">
      		<NavigationList />
      	</div>
      </div>
    );
  }
}

export default NavigationContent;