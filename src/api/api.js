import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://restcountries.com/v3.1/all',
	// headers: {
	// 	// "API-KEY": "5fed59e2-86db-4015-9eef-7078801ec907"
	// 	"access_key": "dc042cc89221b93fbac8f29cd5a4536a"
	// }
});

export const countryAPI = {
	getAllCountries() {
		return instance.get();
	}
}