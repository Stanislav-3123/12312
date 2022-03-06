import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://restcountries.com/v3.1/all'
});

export const countryAPI = {
	getAllCountries() {
		return instance.get();
	}
	
}