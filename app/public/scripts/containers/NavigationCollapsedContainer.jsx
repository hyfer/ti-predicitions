import React, { Component } from 'react';

class NavigationCollapsedContainer extends Component {

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
        className={this.state.isActive ? 'navigation-button -active' : 'navigation-button'}
        onClick={this.onClick}
      >
        <div className="top" />
        <div className="bottom" />
      </button>
    );
  }
}

export default NavigationCollapsedContainer;
