
import {
  put,
  select,
  call,
  takeEvery
} from 'redux-saga/effects';

import axios from 'axios';
import { 
  GET_TOURNAMENTS_REQUEST, 
  GET_TOURNAMENTS_FAILURE, 
  GET_TOURNAMENTS_SUCCESS 
} from 'constants/actionTypes';


const instance = axios.create({
  responseType: 'json',
});

function* fetchTournaments() {
  try {
    const response = yield call(instance.get, 'http://localhost:8000/api/tournaments');
    console.log(response.data);
    yield put({ type: GET_TOURNAMENTS_SUCCESS, response: response.data });
  } catch (error) {
    console.log(error);
    yield put({ type: GET_TOURNAMENTS_FAILURE, error });
    console.log('failed');
  }
}

export default function* watchFetchTournaments() {
  yield takeEvery(GET_TOURNAMENTS_REQUEST, fetchTournaments);
}
