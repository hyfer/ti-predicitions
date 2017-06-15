import { getTournamentList } from '../controllers/tournament.js';

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('home.twig');
  });

  app.get('/api/tournaments', getTournamentList);
};
