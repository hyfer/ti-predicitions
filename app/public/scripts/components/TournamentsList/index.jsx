import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TournamentsList extends Component {
  static propTypes = {
    getTournaments: PropTypes.func,
    tournaments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }

  static defaultProps = {
    getTournaments: null,
    tournaments: [],
  }

  componentWillMount() {
    this.props.getTournaments();
  }

  renderTournaments = tournaments => (
    tournaments.map((tournament) => (
      <h2 key={tournament.id}>{tournament.name}</h2>
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
export default TournamentsList
