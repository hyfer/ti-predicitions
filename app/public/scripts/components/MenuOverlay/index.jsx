import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavigationVertical from '../NavigationVertical';

class MenuOverlay extends Component {

  static propTypes = {
    // toggleMenuOverlay: PropTypes.func,
    isToggled: PropTypes.bool,
  };

  static defaultProps = {
    // toggleMenuOverlay: null,
    isToggled: false,
  };

  render() {
    const isToggled = this.props.isToggled ? '-active' : '';

    return (
      <div className={`menu-overlay ${isToggled}`}>
        <div className="inner">
          <div className="menu-overlay-content">
            <div className="left">
              Navigate
            </div>
            <div className="right">
              <NavigationVertical />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuOverlay;
