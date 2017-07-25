import {
  GET_TOURNAMENT_RESULTS_REQUEST,
  GET_TOURNAMENT_RESULTS_SUCCESS,
  GET_TOURNAMENT_RESULTS_FAILURE,
} from 'constants/actionTypes';

const initialState = [];

const getTournamentResults = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURNAMENT_RESULTS_REQUEST: {
      return state;
    }

    case GET_TOURNAMENT_RESULTS_SUCCESS: {
      return action.response;
    }
    case GET_TOURNAMENT_RESULTS_FAILURE: {
      return state;
    }

    default:
      return state;
  }
};

export default getTournamentResults;
