import { getLeagueListing } from '../models/tournament.js' 

export const getTournamentList = (req, res) => {

	const trimTournamentName = (tournamentName) => {
		const string = '#DOTA_Item_';
		const underscore = new RegExp('_', 'g');
		const yearString = 'TP' // The International 2013 returns as TP from the API.
		let trimmedTournamentName = '';

		trimmedTournamentName = tournamentName.replace(string, '');
		trimmedTournamentName = trimmedTournamentName.replace(yearString, '2013')
		trimmedTournamentName = trimmedTournamentName.replace(underscore, ' ');

		if (!trimmedTournamentName.startsWith('The')) {
			trimmedTournamentName = 'The ' + trimmedTournamentName;
		}

		if(trimmedTournamentName === 'The International') {
			trimmedTournamentName = trimmedTournamentName + ' 2011';
		}

		if(trimmedTournamentName === 'The Shanghai Major') {
			trimmedTournamentName = trimmedTournamentName + ' 2016';
		}

		if(trimmedTournamentName === 'The Kiev Major') {
			trimmedTournamentName = trimmedTournamentName + ' 2017';
		}

		return trimmedTournamentName;
	}

	getLeagueListing(function(tournamentArray) {
		const tournaments = [];

		tournamentArray.forEach(function(tournament) {
			console.log(tournament.leagueid);
			const tournamentObject = {
				id: tournament.leagueid,
				name: trimTournamentName(tournament.name),
			};

			tournaments.push(tournamentObject);
		});

		res.send(tournaments);

	});
};