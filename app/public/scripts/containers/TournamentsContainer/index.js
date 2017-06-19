import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTournaments } from 'redux/actions/tournaments';
import TournamentsList from 'components/TournamentsList';

const mapStateToProps = state => {
  console.log(state);
  return ({
  tournaments: state.tournamentsData,
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getTournaments,
  }, dispatch)
);

const TournamentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TournamentsList);

export default TournamentsContainer;