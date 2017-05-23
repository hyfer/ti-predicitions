import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoURL: props.videoURL,
      aspectRatio: props.aspectRatio
    };
  }

  getHeight () {
    const {aspectRatio} = this.state;
    const height = aspectRatio[1] / aspectRatio[0] * 100;
    return height;

  }

  getWidth() {
    const {aspectRatio} = this.state;
    const width = aspectRatio[0] / aspectRatio[1] * 100;
    return width;
  }

  render() {
    const style = { minWidth: this.getWidth() + '%', height: this.getHeight() + '%'};

    return (
      <div className="video-wrapper">
        <video className="video-player" muted loop preload="none" autoPlay>
          <source src="http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4" />
        </video>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  videoURL: PropTypes.string.isRequired,
  aspectRatio: PropTypes.array.isRequired
}

export default VideoPlayer;
