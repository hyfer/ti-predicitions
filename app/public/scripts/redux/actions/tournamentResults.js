import { GET_TOURNAMENT_RESULTS_REQUEST } from 'constants/actionTypes';

export const getTournamentResults = tournamentId => {
  return {
    type: GET_TOURNAMENT_RESULTS_REQUEST,
   	tournamentId: tournamentId,
  }
};

export default getTournamentResults;
