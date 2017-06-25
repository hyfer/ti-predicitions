import {} from 'dotenv/config';
import rp from 'request-promise';
import bluebird from 'bluebird';

const fetchHeroes = () => {
  const options = {
    uri: 'https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1',
    qs: {
      key: process.env.API_KEY,
      language: 'english',
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };

  return new bluebird.Promise((resolve, reject) => {
    rp(options).then(heroes => {
      resolve(heroes);
    });
  });
};

export const getHeroList = (callback) => {
  let heroesObject = {};

  fetchHeroes().then(response => {
    return response.result.heroes;

  }).map(heroes => {
  	heroesObject = {
  		id: heroes.id,
  		name: heroes.localized_name
  	};

  	return heroesObject;

  }).then((heroesArray) => {
  	callback(heroesArray)
  });
};