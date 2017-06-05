import React, { Component } from 'react';

import MenuTopContainer from '../MenuTopContainer';
import MenuOverlayContainer from '../MenuOverlayContainer';

class Home extends Component {

  constructor(props) {
    super(props);
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
      </div>
    );
  }
}

export default Home;
