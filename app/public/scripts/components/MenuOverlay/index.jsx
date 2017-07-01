import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuOverlay extends Component {

  static propTypes = {
    isToggled: PropTypes.bool,
  };

  static defaultProps = {
    isToggled: false,
  };

  render() {
    const isToggled = this.props.isToggled ? '-active' : '';

    return (
      <div className={`menu-overlay ${isToggled}`}>
        <div className="inner" />
      </div>
    );
  }
}

export default MenuOverlay;
