import React, { Component } from 'react';

import MenuButtonContainer from '../MenuButton';
import NavigationHorizontal from '../../components/NavigationHorizontal';
import { Logo, LogoText } from '../../components/SvgImages';

class MenuTopContainer extends Component {

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
    let menuRight = null;
    let menuLeft = null;

    if (this.state.isCollapsed) {
      menuRight = <MenuButtonContainer />;
      menuLeft = <Logo />;
    } else {
      menuRight = <NavigationHorizontal />;
      menuLeft = <LogoText />;
    }

    return (
      <div className="menu-top-content">
        <div className="left">
          {menuLeft}
        </div>
        <div className="right">
          {menuRight}
        </div>
      </div>
    );
  }
}

export default MenuTopContainer;
