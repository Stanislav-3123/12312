import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [countries, setCountries] = useState([])
	const [loading, setLoading] = useState (false)
	const [currentPage, setCurrentPage] = useState(1)
	const [countriesPerPage] = useState(10)

	useEffect(() => {
		const getCountries = async () => {
		setLoading(true)
		const res = await axios.get('https://api.countrylayer.com/v2/all',
		headers: {
			"access_key": "dc042cc89221b93fbac8f29cd5a4536a"
		})
		
		
		console.log(res)
		}
		getCountries()
	}, [])
  return (
    <div>
     
    </div>
  );
}

export default App;
