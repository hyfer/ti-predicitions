
import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';

import axios from 'axios';
import {
  GET_TOURNAMENT_RESULTS_REQUEST,
  GET_TOURNAMENT_RESULTS_FAILURE,
  GET_TOURNAMENT_RESULTS_SUCCESS,
} from 'constants/actionTypes';

const instance = axios.create({
  responseType: 'json',
});

function* fetchTournamentResults(action) {
  try {
    const response = yield call(instance.get, `http://localhost:8000/api/tournament-results/ ${action.tournamentId}`);
    yield put({ type: GET_TOURNAMENT_RESULTS_SUCCESS, response: response.data });
  } catch (error) {
    console.log(error);
    yield put({ type: GET_TOURNAMENT_RESULTS_FAILURE, error });
    console.log('failed');
  }
}

export default function* watchFetchTournamentResults() {
  yield takeEvery(GET_TOURNAMENT_RESULTS_REQUEST, fetchTournamentResults);
}

