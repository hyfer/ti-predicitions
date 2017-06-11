const api = require('../api.js');

exports.getLeague = function(req, res) {
	let leagueIds = [];

  api.getLeagueListing().then((data) => {
    for (let league of data.result.leagues) {
      if (league.name && league.name.indexOf('The_International') != -1 && league.tournament_url.indexOf('dota2.com') != -1) {
        leagueIds.push(league.leagueid);

      }

      if(league.name && league.name.indexOf('Major') != -1 && league.tournament_url.indexOf('dota2.com') != -1) {
        leagueIds.push(league.leagueid);

      }
    }
  });

  // api.getLeagueListing((data) => {
  //   console.log(data);
  // });

  // .then(() => {
  //   leagueIds.forEach(function(leagueId) {
  //     api.getMatchHistory({league_id: leagueId}).then((data) => {
        
  //     });
  //   });
  // }, (errorResponseStatusText) => {
  //   console.log(errorResponseStatusText);
  // });
};