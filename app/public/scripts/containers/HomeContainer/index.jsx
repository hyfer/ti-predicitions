import React, { Component } from 'react';

import MenuTopContainer from '../MenuTopContainer';
import MenuOverlayContainer from '../MenuOverlayContainer';
import CaseContentContainer from '../CaseContentContainer';
import ExpandableContentContainer from '../ExpandableContentContainer';
import HeroContent from '../../components/HeroContent';
import VideoPlayer from '../../components/VideoPlayer';
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
        <MenuOverlayContainer />
        <div className="menu-top">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col col-9">
                  <MenuTopContainer />
                </div>
              </div>
            </div>
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
                  <CaseContentContainer />
                </div>
              </div>
            </div>
          </div>
          <ExpandableContentContainer />
          <Image />
        </div>
      </div>
    );
  }
}

export default Home;
