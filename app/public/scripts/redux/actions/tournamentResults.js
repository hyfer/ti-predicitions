import { GET_TOURNAMENT_RESULTS_REQUEST } from 'constants/actionTypes';

export const getTournamentResults = tournamentId => ({
  type: GET_TOURNAMENT_RESULTS_REQUEST,
  ...tournamentId,
});

export default getTournamentResults;
