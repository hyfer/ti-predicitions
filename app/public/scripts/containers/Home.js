import React from 'react';

import HeroModule from './../components/hero-module';
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
        <HeroModule videoURL={this.state.videoURL} />
      </div>
    )
  }
}

export default Home;
