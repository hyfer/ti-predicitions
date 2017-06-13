import { getTournamentList } from '../controllers/league.js';

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('home.twig');
  });

  app.get('/league', getTournamentList);
};
