import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpandableContent extends Component {

  static propTypes = {
    toggleExpandableContent: PropTypes.func,
    isToggled: PropTypes.bool,
  };

  static defaultProps = {
    toggleExpandableContent: null,
    isToggled: false,
  };

  onClick = () => {
    this.props.toggleExpandableContent(false);
  };

  render() {
    const isToggled = this.props.isToggled ? '-active' : '';

    return (
      <div className={`expandable-content ${isToggled}`}>
        <button className="close-button button" onClick={this.onClick}>
          <div className="text">
            Close
          </div>
          <div className="top" />
          <div className="bottom" />
        </button>
        <h3 className="heading-base -small -striked">Redesign of Semcon.com</h3>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lorem urna. Nam a turpis quis quam posuere elementum nec a nibh. Proin sed mi eu enim volutpat mattis nec eu arcu. In at lectus convallis, maximus ante a, rhoncus lectus. Morbi facilisis rhoncus dictum. Maecenas massa risus, aliquet ut nulla et, dignissim molestie lectus.</p>
        <p className="text">Aenean at lacinia augue. In hac habitasse platea dictumst. Nullam facilisis pellentesque nunc, vel volutpat purus vulputate sit amet. Nulla dictum ut mauris quis pulvinar.</p>
        <div className="external-link-list">
          <button className="button-link button">
            <h4 className="heading-base heading -xsmall">Medium</h4>
            <p className="text">Lessons learned when cras mattis consectetur purus sit amet</p>
          </button>
          <button className="button-link button">
            <h4 className="heading-base heading -xsmall">Github</h4>
            <p className="text">React/js image effect</p>
          </button>
          <button className="button-link button">
            <h4 className="heading-base heading -xsmall">Dribble</h4>
            <p className="text">Design elements</p>
          </button>
        </div>
      </div>
    );
  }
}

export default ExpandableContent;
