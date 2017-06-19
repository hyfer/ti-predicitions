import watchFetchTournaments from './tournaments';

export default function* rootSaga () {
  yield [
    watchFetchTournaments(),
  ];
}