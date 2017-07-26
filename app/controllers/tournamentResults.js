import { getMatchDetails} from '../models/matchDetails.js';
import { getHeroList } from '../models/hero.js';

export const getTournamentResults = (req, res) => {
  const tournamentId = req.params.id;

  getMatchDetails(tournamentId, function(data) {
    let heroPickIds = [];
    let heroBanIds = [];
    let heroPickFrequency = {};
    let heroBanFrequency = {};
    let maxBannedHero = 0;
    let maxPickedHero = 0;
    let mostPickedHeroId;
    let mostBannedHeroId;
    let tournamentResults = [];
    let heroes = {
        mostPicked: null,
        mostBanned: null,
    };

    for (let i = 0; i < data.length; i++) {
      let picksBans = data[i].picks_bans;

      if (picksBans) {
        for (let j = 0; j < picksBans.length; j++) {
          if (picksBans[j].is_pick) {
            heroPickIds.push(picksBans[j].hero_id);
          } else {
            heroBanIds.push(picksBans[j].hero_id);
          }
        }
      }
    }

    for (let i = 0; i < heroBanIds.length; i++) {
      heroBanFrequency[heroBanIds[i]] = (heroBanFrequency[heroBanIds[i]] || 0) + 1;
      if (heroBanFrequency[heroBanIds[i]] > maxBannedHero) {
        maxBannedHero = heroBanFrequency[heroBanIds[i]];
        mostBannedHeroId = heroBanIds[i];
      }
    }

    for (let i = 0; i < heroPickIds.length; i++) {
      heroPickFrequency[heroPickIds[i]] = (heroPickFrequency[heroPickIds[i]] || 0) + 1;
      if (heroPickFrequency[heroPickIds[i]] > maxPickedHero) {
        maxPickedHero = heroPickFrequency[heroPickIds[i]];
        mostPickedHeroId = heroPickIds[i];
      }
    }

    getHeroList(function(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === mostPickedHeroId) {
          heroes.mostPicked = data[i];
        }

        if (data[i].id === mostBannedHeroId) {
          heroes.mostBanned = data[i];
        }
      }

      tournamentResults.push(heroes);

      res.send(tournamentResults);
    });
  });
};