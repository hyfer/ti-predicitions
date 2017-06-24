import { getMatchDetails} from '../models/match.js' 

export const getMostPickedHero = (req, res) => {
	getMatchDetails(function(data) {
		let picksBans = [];

		for (let i = 0; i < data.length; i++) {
			picksBans.push(data[i].picks_bans);
		}

 		res.send(picksBans);
	});
};