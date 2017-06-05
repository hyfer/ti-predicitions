import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CaseContent extends Component {

  static propTypes = {
    toggleExpandableContent: PropTypes.func,
  };

  static defaultProps = {
    toggleExpandableContent: null,
  };

  onClick = () => {
    this.props.toggleExpandableContent(true);
  };

  render() {
    return (
      <div className="case-content">
        <h2 className="heading-base -small">Redesign of Semcon.com</h2>
        <button className="link link-text -small" onClick={this.onClick}>Learn more</button>
      </div>
    );
  }
}

export default CaseContent;

