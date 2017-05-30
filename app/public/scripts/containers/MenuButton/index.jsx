import React, { Component, PropTypes } from 'react';
import bindActionCreators from 'redux';
import connect from 'react-redux';

import menuOverlay from '../../redux/actions/menuOverlay';

class MenuButtonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  onClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <button
        className={`menu-button ${this.state.isActive ? '-active' : ''}`}
        onClick={this.onClick}
      >
        <div className="top" />
        <div className="bottom" />
      </button>
    );
  }
}

export default MenuButtonContainer;
