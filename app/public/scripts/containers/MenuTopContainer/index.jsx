import React, { Component } from 'react';

import MenuButtonContainer from '../MenuButtonContainer';
import NavigationHorizontal from '../../components/NavigationHorizontal';
import { Logo, LogoText } from '../../components/SvgImages';
import getScreenWidth from '../../utils/getScreenWidth';
import debounce from '../../utils/debounce';

class MenuTop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: true,
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    this.checkScrollPosition(); // Check initial scroll position
    window.addEventListener('scroll', debounce(this.onScroll, 100));
    window.addEventListener('resize', debounce(this.onResize, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
  }

  onResize = () => {
    /* Set scroll position on resize */
    this.setState({
      scrollPosition: window.pageYOffset || document.documentElement.scrollTop,
    });

    /* Check viewport size and add scroll event on desktop, otherwise remove it */
    if (getScreenWidth().lg) {
      this.checkScrollPosition();
      window.addEventListener('scroll', this.onScroll);
    } else {
      this.checkScrollPosition();
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  onScroll = () => {
    /* Set scroll position on scroll */
    this.setState({
      scrollPosition: window.pageYOffset || document.documentElement.scrollTop,
    });

    this.checkScrollPosition();
  }

  /* Check wether scroll is in top of viewport and viewport size is desktop. Should always be collapsed on devices smallar than desktop */
  checkScrollPosition = () => {
    if (this.state.scrollPosition <= 50 && getScreenWidth().lg) {
      this.setState({
        isCollapsed: false,
      });
    } else {
      this.setState({
        isCollapsed: true,
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

export default MenuTop;
