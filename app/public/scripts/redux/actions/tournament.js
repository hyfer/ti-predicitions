import { CALL_API } from 'redux-api-middleware';

{
	[CALL_API]: {
		endpoint: 'http://localhost:8000/api/tournaments',
		method: 'GET',
		types: ['REQUEST', 'SUCCESS', 'FAILURE'],
	}

}