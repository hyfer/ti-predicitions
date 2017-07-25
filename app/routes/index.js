import { getTournamentList } from '../controllers/tournament.js';
import { getTournamentResults } from '../controllers/tournamentResults.js';

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('home.twig');
  });

  app.get('/api/tournaments', getTournamentList);
  app.get('/api/tournament-results/:id', getTournamentResults);
};
