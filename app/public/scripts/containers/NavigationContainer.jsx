import React, { Component } from 'react';

import NavigationCollapsedContainer from './NavigationCollapsedContainer';
import NavigationList from './../components/NavigationList';
import { Logo, LogoText } from './../components/SvgImages';

class NavigationContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 50) {
      this.setState({
        isCollapsed: true,
      });
    } else {
      this.setState({
        isCollapsed: false,
      });
    }
  }

  render() {
    let navigationType = null;
    let logoType = null;

    if (this.state.isCollapsed) {
      navigationType = <NavigationCollapsedContainer />;
      logoType = <Logo />;
    } else {
      navigationType = <NavigationList />;
      logoType = <LogoText />;
    }

    return (
      <div className="navigation-content">
        <div className="left">
          {logoType}
        </div>
        <div className="right">
          {navigationType}
        </div>
      </div>
    );
  }
}

export default NavigationContainer;
