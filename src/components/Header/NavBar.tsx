import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<Fragment>
			<NavLink to="/characters" className="mr-6">
				Characters
			</NavLink>
			<NavLink to="/location" className="mr-6">
				Location
			</NavLink>
			<NavLink to="/episodies" className="mr-6">
				Episodies
			</NavLink>
		</Fragment>
	)
}

export default NavBar