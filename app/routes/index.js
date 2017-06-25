import { getTournamentList } from '../controllers/tournament.js';
import { getMostPickedHero } from '../controllers/match.js';
import { getHeroList } from '../models/hero.js';

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('home.twig');
  });

  app.get('/api/tournaments', getTournamentList);
  app.get('/api/matches', getMostPickedHero);
  //app.get('/api/heroes', getHeroList);
};
