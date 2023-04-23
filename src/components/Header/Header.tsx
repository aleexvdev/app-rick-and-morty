import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';

const Header = () => {

	const [darkMode, setDarkMode] = useState(false);
	const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtener el valor de desplazamiento vertical (scroll) actual
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Activar/desactivar el degradado del header basado en la posición de scroll
      setScroll(scrollTop > 0);
    };

    // Escuchar el evento de scroll en el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

	return (
		<header className={`flex items-center bg-transparent w-full h-20 px-4 sm:px-8 md:px-36 fixed top-0 z-10 ${scroll ? 'bg-gradient-to-b from-black to-gray-800 shadow-lg' : ''}`}>
			<div className="flex-shrink-0">
				<Link to="/" className="">
					<h1 className='text-white text-3xl'>Rick & Morty</h1>
				</Link>
			</div>
			<div className="flex ml-auto">
				<div className='flex mr-4'>
					<NavBar />
				</div>
				{/* <div className="mr-2">
					<button onClick={toggleDarkMode}>
						{ darkMode ?  <MdDarkMode className='text-2xl' /> : <MdWbSunny className='text-2xl' /> }
					</button>
				</div> */}
			</div>
		</header>
	)
}

export default Header