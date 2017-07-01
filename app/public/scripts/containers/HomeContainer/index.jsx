import React from 'react';

import MenuTopContainer from 'containers/MenuTopContainer';
import MenuOverlayContainer from 'containers/MenuOverlayContainer';
import TournamentsContainer from 'containers/TournamentsContainer';

const Home = () => (
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
    <TournamentsContainer />
  </div>
);

export default Home;
