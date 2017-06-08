import React, { Component } from 'react';

import MenuTopContainer from 'containers/MenuTopContainer';
import MenuOverlayContainer from 'containers/MenuOverlayContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <MenuOverlayContainer />
        <div className="menu-top">
          <div className="inner">
            <div className="container">
              <div className="row">
                <div className="col col-8">
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
