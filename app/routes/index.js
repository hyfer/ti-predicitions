import { getTournamentList } from '../controllers/tournament.js';
import { getMostPickedHero } from '../controllers/match.js';

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('home.twig');
  });

  app.get('/api/tournaments', getTournamentList);
  app.get('/api/matches', getMostPickedHero);
};
