import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {

	// const [darkMode, setDarkMode] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [activeCharacter, setActiveCharacter] = useState(false);
	const [activeLocation, setActiveLocation] = useState(false);
	const [activeEpisode, setActiveEpisode] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			setScroll(scrollTop > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	/* const toggleDarkMode = () => {
			setDarkMode(!darkMode);
		} 
		<div className="mr-2">
			<button onClick={toggleDarkMode}>
				{ darkMode ?  <MdDarkMode className='text-2xl' /> : <MdWbSunny className='text-2xl' /> }
			</button>
		</div> 
	*/
  	
	const handleClick = (params:string) => {
		// e.preventDefault();
		// console.log('Se hizo clic en ', params);
		if (params === 'characters') {
			setActiveCharacter(true);
			setActiveLocation(false);
			setActiveEpisode(false);
		} else if (params === 'location') {
			setActiveCharacter(false);
			setActiveLocation(true);
			setActiveEpisode(false);
		} else if (params === 'episodes') {
			setActiveCharacter(false);
			setActiveLocation(false);
			setActiveEpisode(true);
		} else {
			setActiveCharacter(false);
			setActiveLocation(false);
			setActiveEpisode(false);
		}
	};

	const active2 = (activeCharacter) ? 'border-b-4 border-yellow-300 font-bold text-1xl text-yellow-300' : '';
	const active3 = (activeLocation) ? 'border-b-4 border-yellow-300 font-bold text-1xl text-yellow-300' : '';
	const active4 = (activeEpisode) ? 'border-b-4 border-yellow-300 font-bold text-1xl text-yellow-300' : '';
	
	return (
		<header className={`flex items-center bg-transparent w-full h-20 px-4 sm:px-8 md:px-36 fixed top-0 z-10 ${scroll ? 'bg-gradient-to-b from-black to-gray-800 shadow-lg' : ''}`}>
			<div className="flex-shrink-0">
				<Link to="/" className="" onClick={() => handleClick('home')}>
					<h1 className='text-white text-3xl'>Rick & Morty</h1>
				</Link>
			</div>
			<div className="flex ml-auto">
				<div className='flex mr-4'>
					<Fragment>
						<NavLink to="/characters" className={`mr-6 text-xl text-white ${active2}`} onClick={() => { handleClick('characters') }}>
							Characters
						</NavLink>
						<NavLink to="/location" className={`mr-6 text-xl text-white ${active3}`} onClick={() => { handleClick('location')}}>
							Location
						</NavLink>
						<NavLink to="/episodes" className={`mr-6 text-xl text-white ${active4}`} onClick={() => { handleClick('episodes')}}>
							Episodes
						</NavLink>
					</Fragment>
				</div>
			</div>
		</header>
	)
}

export default Header