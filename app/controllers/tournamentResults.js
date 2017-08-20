import { getMatchDetails} from '../models/matchDetails.js';
import { getHeroList } from '../models/hero.js';

export const getTournamentResults = (req, res) => {
  const tournamentId = req.params.id;

  getMatchDetails(tournamentId, function(data) {
    let heroPickIds = [];
    let heroBanIds = [];
    let mostPickedHeroId;
    let mostBannedHeroId;
    let highestWinrateHero;
    let tournamentResults = [];
    let heroes = {
        mostPicked: null,
        mostBanned: null,
        highestWinrate: null,
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

    mostBannedHeroId = getHeroFrequency(heroBanIds);
    mostPickedHeroId = getHeroFrequency(heroPickIds);
    //highestWinrateHero = getHeroWithMostWins(heroPickIds);
    getHighestWinrateHero(heroPickIds);

    function getHeroFrequency(heroIds) {
      let max = 0;
      let mostFrequentHeroId = [];
      let heroFrequency = {};

      for (let i = 0; i < heroIds.length; i++) {
        heroFrequency[heroIds[i]] = (heroFrequency[heroIds[i]] || 0) + 1;

        if (heroFrequency[heroIds[i]] > max) {
          max = heroFrequency[heroIds[i]];
          mostFrequentHeroId = heroIds[i];
        }
      }

      return mostFrequentHeroId;
    }

    function getHighestWinrateHero(heroIds) {
      let max = 0;
      let heroWins = [];
      let heroLosses = [];

      // player_slot 128, 129, 130, 131, 132 is dire
      // player_slot 0, 1, 2, 3, 4 is radiant

      for (let i = 0; i < data.length; i++) {
        let players = data[i].players;

        if (data[i].radiant_win) {
          for (let j = 0; j < players.length; j++) {
            let playerSlot = players[j].player_slot;

            if (playerSlot === 128 || playerSlot === 129 || playerSlot === 130 || playerSlot === 131 || playerSlot === 132) {
              heroWins.push(players[j].hero_id);
            } else {
              heroLosses.push(players[j].hero_id);
            }
          }
        } else {
          for (let j = 0; j < players.length; j++) {
            let playerSlot = players[j].player_slot;

            if (playerSlot === 0 || playerSlot === 1 || playerSlot === 2 || playerSlot === 3 || playerSlot === 4) {
              heroWins.push(players[j].hero_id);
            } else {
              heroLosses.push(players[j].hero_id);
            }
          }
        }
      }

      heroWins.sort();
      let currentWin = null;
      let countWin = null;
      let heroWinsObjects = [];

      for (let i = 0; i <= heroWins.length; i++) {
        if (heroWins[i] != currentWin) {
          if (countWin > 0) {
            var heroResults = {};
            heroResults.id = currentWin;
            heroResults.wins = countWin;
            heroWinsObjects.push(heroResults);
          }

          currentWin = heroWins[i];
          countWin = 1;
        } else {
          countWin++;
        }
      }

      heroLosses.sort();
      let currentLoss = null;
      let countLoss = null;
      let heroLossesObjects = [];

      for (let i = 0; i <= heroLosses.length; i++) {
        if (heroLosses[i] != currentLoss) {
          if (countLoss > 0) {
            var heroResults = {};
            heroResults.id = currentLoss;
            heroResults.losses = countLoss;
            heroLossesObjects.push(heroResults);
          }
          currentLoss = heroLosses[i];
          countLoss = 1;
        } else {
          countLoss++;
        }
      }

      console.log(heroLossesObjects.length);
      console.log(heroWinsObjects.length);

      for (let i = 0; i < heroWinsObjects.length; i++) {
        // console.log(heroLossesObjects.length);
        // console.log(heroWinsObjects.length);
        // let numberOfMatches = heroWinsObjects[i].wins + heroLossesObjects[i].losses;

        // if (numberOfMatches <= 5) {
        //   let winRate = (heroWinsObjects[i].wins / numberOfMatches) * 100;
        //   console.log(winRate);
        // }
      }

      const heroWinsLosses = [];
      // console.log(heroLossesObjects);
      // console.log(heroWinsObjects);
      //return heroWithMostWins;
    }

    getHeroList(function(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === mostPickedHeroId) {
          heroes.mostPicked = data[i];
        }

        if (data[i].id === mostBannedHeroId) {
          heroes.mostBanned = data[i];
        }

        if (data[i].id === highestWinrateHero) {
          heroes.highestWinrate = data[i];
        }
      }

      tournamentResults.push(heroes);

      res.send(tournamentResults);
    });
  });
};