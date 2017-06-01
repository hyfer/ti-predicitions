import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuButton extends Component {

  static propTypes = {
    toggleMenuOverlay: PropTypes.func,
    isToggled: PropTypes.bool,
  };

  static defaultProps = {
    toggleMenuOverlay: null,
    isToggled: false,
  };

  onClick = () => {
    if (this.props.isToggled) {
      this.props.toggleMenuOverlay();
    } else {
      this.props.toggleMenuOverlay();
    }
  };

  render() {
    const isToggled = this.props.isToggled ? '-active' : '';
    return (
      <button className={`menu-button ${isToggled}`} onClick={this.onClick}>
        <div className="top" />
        <div className="bottom" />
      </button>
    );
  }
}

export default MenuButton;
