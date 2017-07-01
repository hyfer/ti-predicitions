import { getMatchDetails} from '../models/matchDetails.js';
import { getHeroList } from '../models/hero.js';

export const getTournamentResults = (req, res) => {
  const tournamentId = req.params.id;

  getMatchDetails(tournamentId, function(data) {
    let heroIds = [];
    let heroPickFrequency = {};
    let max = 0;
    let mostPickedHeroId;
    let tournamentResults = [];
    let heroes = {
        mostPicked: null,
    };

    for (let i = 0; i < data.length; i++) {
      let picksBans = data[i].picks_bans;

      if (picksBans) {
        for (let j = 0; j < picksBans.length; j++) {
          if (picksBans[j].is_pick ) {
            heroIds.push(picksBans[j].hero_id);
          }
        }
      }
    }

    for (let i = 0; i < heroIds.length; i++) {
      heroPickFrequency[heroIds[i]] = (heroPickFrequency[heroIds[i]] || 0) + 1;
      if (heroPickFrequency[heroIds[i]] > max) {
        max = heroPickFrequency[heroIds[i]];
        mostPickedHeroId = heroIds[i];
      }
    }

    getHeroList(function(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === mostPickedHeroId) {
          heroes.mostPicked = data[i];
        }
      }

      tournamentResults.push(heroes);

      //console.log(getTournamentResults);
      res.send(tournamentResults);
    });
  });
};