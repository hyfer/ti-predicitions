import watchFetchTournaments from './tournaments';
import watchFetchTournamentResults from './tournamentResults';

export default function* rootSaga() {
  yield [
    watchFetchTournaments(),
    watchFetchTournamentResults(),
  ];
}
