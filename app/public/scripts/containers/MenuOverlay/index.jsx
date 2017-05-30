import React, { Component } from 'react';

import NavigationVertical from '../../components/NavigationVertical';

class MenuOverlayContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
    };
  }

  onScroll = () => {
  }

  render() {
    return (
      <div className="menu-overlay-content">
        <div className="left">
          Navigate
        </div>
        <div className="right">
          <NavigationVertical />
        </div>
      </div>
    );
  }
}

export default MenuOverlayContainer;
