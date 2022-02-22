import React from 'react'

const Pagination = ({countriesPerPage, totalCountries, paginate }) => {
	const pageNumbers = []

	for (let i = 1; 1 <= Math.ceil(totalCountries/countriesPerPage); i++) {
	pageNumbers.push(i)
	}
	return (
		<div>
			<ul className='pagination'>
				{
				pageNumbers.map(number => (
					<li className='page-item' key={number}>
						<a onClick={() => paginate(number)} href="!#" className='page-link'>
							{number}
						</a>
					</li>
				))
				}
			</ul>
		</div>
	)
}

export default Pagination