import React, { Component } from 'react';

class Image extends Component {

  render() {
    return (
      <img className="background-image" srcSet="images/semcon-375.jpg 375w,
        images/semcon-768.jpg 768w,
        images/semcon-1024.jpg 1024w,
        images/semcon-1280.jpg 1280w,
        images/semcon-1440.jpg 1440w,
        images/semcon-1920.jpg 1920w," />
    );
  }
}

export default Image;