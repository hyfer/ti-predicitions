import { getMatchDetails} from '../models/match.js' 

export const getMostPickedHero = (req, res) => {
  getMatchDetails(function(data) {
    let picksBans = [];

    for (let i = 0; i < data.length; i++) {
      let picksBans = data[i].picks_bans;

      if (picksBans) {
        for (let j = 0; j < picksBans.length; j++) {
           console.log(picksBans[j]);
        }
      }
    }

    res.send(picksBans);
  });
};