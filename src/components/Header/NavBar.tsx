import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

	const handleClick = (params:string) => {
		console.log('Se hizo clic en ', params);
	};

	return (
		<Fragment>
			<NavLink to="/characters" className="mr-6 text-xl text-white" onClick={() => handleClick('characters')}>
				Characters
			</NavLink>
			<NavLink to="/location" className="mr-6 text-xl text-white" onClick={() => handleClick('location')}>
				Location
			</NavLink>
			<NavLink to="/episodes" className="mr-6 text-xl text-white" onClick={() => handleClick('espisodes')}>
				Episodes
			</NavLink>
		</Fragment>
	)
}

export default NavBar