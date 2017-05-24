import React from 'react';

import HeroContent from './../components/hero-content';
import VideoPlayer from './../components/video-player';
import CaseContent from './../components/case-content';
import ExpandableContent from './../components/expandable-content';
import Image from './../components/image';
import Footer from './../components/footer';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'https://player.vimeo.com/video/38840688?autoplay=1&loop=1&autopause=0?background=1'
    };
  }

  render() {
    return (
      <div>
        <div className="hero-section">
          <div className="hero-content">
            <div className="container">
              <div className="row">
                <div className="col col-9">
                  <HeroContent/>
                </div>
              </div>
            </div>
          </div>
          <VideoPlayer/>
        </div>
        <div className="case-section">
          <div className="case-content">
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
    )
  }
}

export default Home;
