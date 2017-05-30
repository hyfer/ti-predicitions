import React, { Component } from 'react';

import MenuTop from '../MenuTop';
import MenuOverlay from '../MenuOverlay';
import HeroContent from '../../components/HeroContent';
import VideoPlayer from '../../components/VideoPlayer';
import CaseContent from '../../components/CaseContent';
import ExpandableContent from '../../components/ExpandableContent';
import Image from '../../components/Image';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'https://player.vimeo.com/video/38840688?autoplay=1&loop=1&autopause=0?background=1',
    };
  }

  render() {
    return (
      <div>
        <div className="menu-top">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col col-9">
                  <MenuTop />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-overlay">
          <div className="inner">
            <MenuOverlay />
          </div>
        </div>
        <div className="hero-section">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col col-9">
                  <HeroContent />
                </div>
              </div>
            </div>
          </div>
          <VideoPlayer />
        </div>
        <div className="case-section">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col col-9">
                  <CaseContent />
                </div>
              </div>
            </div>
          </div>
          <ExpandableContent />
          <Image />
        </div>
      </div>
    );
  }
}

export default Home;
