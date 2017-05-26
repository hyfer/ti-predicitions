import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class VideoPlayer extends Component {
  render() {
    return (
      <video className="video-section" muted loop preload="none" autoPlay playsInline>
        <source src="http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4" />
      </video>
    );
  }
}

export default VideoPlayer;
