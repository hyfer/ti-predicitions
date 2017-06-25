import {} from 'dotenv/config';
import rp from 'request-promise';
import bluebird from 'bluebird';

const fetchMatches = (tournamentId) => {
  const options = {
    uri: 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1',
    qs: {
      key: process.env.API_KEY,
      league_id: tournamentId,
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };

  return new bluebird.Promise((resolve, reject) => {
    rp(options).then(matches => {
      resolve(matches);
    });
  });
};

const fetchMatchDetails = (matchId) => {
  const options = {
    uri: 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1',
    qs: {
      key: process.env.API_KEY,
      match_id: matchId,
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };

  return new bluebird.Promise((resolve, reject) => {
    rp(options).then(matchDetails => {
      resolve(matchDetails);
    });
  });
}

export const getMatchDetails = (callback) => {
  let matchDetailsData = [];

  fetchMatches('4664').then(response => {
    return response.result.matches;

  }).map(matches => {
    return matches.match_id;

  }).map(matchId => {
    return fetchMatchDetails(matchId);

  }, { concurrency: 50 }).then(matchData => {

    let matchDataDetails = [];

    for (let i = 0; i < matchData.length; i++) {
      matchDataDetails.push(matchData[i].result);
    }

    callback(matchDataDetails);

  });

};