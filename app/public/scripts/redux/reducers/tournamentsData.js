import {
  GET_TOURNAMENTS_REQUEST,
  GET_TOURNAMENTS_SUCCESS,
  GET_TOURNAMENTS_FAILURE,
} from 'constants/actionTypes';

const initialState = [];

const getTournaments = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS_REQUEST: {
      return state;
    }

    case GET_TOURNAMENTS_SUCCESS: {
      return action.response;
    }
    case GET_TOURNAMENTS_FAILURE: {
      return state;
    }

    default:
      return state;
  }
}

export default getTournaments;