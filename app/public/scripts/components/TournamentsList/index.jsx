import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TournamentsList extends Component {
  static propTypes = {
    getTournaments: PropTypes.func,
    getTournamentResults: PropTypes.func,
    tournaments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    tournamentResults: PropTypes.arrayOf(PropTypes.shape({
      mostPicked: PropTypes.object,
    })),
  }

  static defaultProps = {
    getTournaments: null,
    getTournamentResults: null,
    tournaments: [],
    tournamentResults: [],
  }

  componentWillMount() {
    this.props.getTournaments();
  }

  onClick(tournamentId) {
    this.props.getTournamentResults(tournamentId);
  }


  renderTournaments = tournaments => (
    tournaments.map((tournament, key) => (
      <button key={key} onClick={() => { this.onClick(tournament.id)} }>{tournament.name}</button>
    ))
  );

  render() {
    const { tournaments } = this.props;
    return (
      <div>
        <h1>Posts</h1>
        {this.renderTournaments(tournaments)}
      </div>
    );
  }
}

export default TournamentsList;
