import React, {useState, useEffect} from 'react';
import './App.css';
import { countryAPI } from './api/api';
import Countries from './components/Countries';
import Pagination from './components/Pagination';

function App() {
	const [countries, setCountries] = useState([])
	const [loading, setLoading] = useState (false)
	const [currentPage, setCurrentPage] = useState(1)
	const [countriesPerPage] = useState(10)

	useEffect(() => {
		const getCountries = async () => {
		setLoading(true)
		const res = await countryAPI.getAllCountries()
		// console.log(res.data)
		setCountries(res.data)
		setLoading(false)
		}
		getCountries()
	}, [])

const lastCountryIndex = currentPage * countriesPerPage
const firstCountryIndex = lastCountryIndex - countriesPerPage
const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

  return (
    <div className='container mt-5'>
     <h1 className='text-primary'>Countries</h1>
	  <Countries countries={countries} loading={loading}/>
	  <Pagination countriesPerPage={countriesPerPage} totalCountries/>
    </div>
  );
}

export default App;
