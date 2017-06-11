const Dota2Api = require('dota2-api');
const da = Dota2Api.create('484ADB51C401C2EC25E043ADEF5E9554');

module.exports = function(app) {
  app.get('/', (req, res) => {

    da.getLeagueListing().then((data) => {
      for (let league of data.result.leagues) {
        if (league.name && league.name.indexOf('The_International') != -1 && league.tournament_url.indexOf('dota2.com') != -1) {
          console.log(league);
        }

        if(league.name && league.name.indexOf('Major') != -1 && league.tournament_url.indexOf('dota2.com') != -1) {
          console.log(league);
        }
      }

    }, (errorResponseStatusText) => {
      console.log(errorResponseStatusText);
    });

    // da.getMatchHistory({league_id: 65006}).then((data) => {
    //   for (let match of data.result.matches) {
    //     console.log(match);
    //   }

    // }, (errorResponseStatusText) => {
    //   console.log(errorResponseStatusText);
    // });

      res.render('home.twig');
  });
};
