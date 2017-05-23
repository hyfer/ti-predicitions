import React, { Component } from 'react';
import VideoPlayer from './../components/video-player';
import PropTypes from 'prop-types';

class HeroModule extends React.Component {

  componentDidMount() {
    if (!this.item) {
      return
    }
    const height = this.item.getBoundingClientRect().height;

    this.setState({
      elemHeight: height
    })
  }

  onArrowClick = () => {
    SmoothScroll.animateScroll(this.state.elemHeight);
  }

  render() {
    return (
      <div ref={(item) => { return this.item = item }} className="hero-module container -full">
        <div className="hero-content">
         </div>
        <VideoPlayer
          videoURL={this.props.videoURL}
          aspectRatio={[16, 9]}
        />
      </div>
    );
  }
}

HeroModule.propTypes = {
  videoURL: PropTypes.string
}
export default HeroModule;
