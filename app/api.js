import {} from 'dotenv/config';
import Dota2Api from 'dota2-api';
const da = Dota2Api.create(process.env.API_KEY);

module.exports = da;
