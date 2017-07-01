import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTournaments } from 'redux/actions/tournaments';
import { getTournamentResults } from 'redux/actions/tournamentResults';
import TournamentsList from 'components/TournamentsList';

const mapStateToProps = state => {
  console.log(state);

  return{
    tournaments: state.tournamentsData,
    tournamentResults: state.tournamentResultsData,
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getTournaments,
    getTournamentResults,
  }, dispatch)
);

const TournamentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TournamentsList);

export default TournamentsContainer;
