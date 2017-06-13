import api from '../api.js';
import https from 'https';

export const getLeagueListing = (callback) => {
	const tournaments = [];

  api.getLeagueListing().then((data) => {
    for (let league of data.result.leagues) {
      if (league.name && league.name.indexOf('The_International') != -1 && league.tournament_url.indexOf('dota2.com') != -1 && league.name.indexOf('Qualifier') === -1) {
        tournaments.push(league);

      }

      if(league.name && league.name.indexOf('Major') != -1 && league.tournament_url.indexOf('dota2.com') != -1 && league.name.indexOf('Qualifier') === -1) {
        tournaments.push(league);
      }
    }

    callback(tournaments);
  });
};