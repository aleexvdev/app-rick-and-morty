import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<Fragment>
			<NavLink to="/characters" className="mr-6 text-xl text-white">
				Characters
			</NavLink>
			<NavLink to="/location" className="mr-6 text-xl text-white">
				Location
			</NavLink>
			<NavLink to="/episodies" className="mr-6 text-xl text-white">
				Episodies
			</NavLink>
		</Fragment>
	)
}

export default NavBar