import React, { useEffect, useState } from 'react'
import SearchInput from '../Search/SearchInput';
import { Title } from '../Title';
import ListLocation from './ListLocation';
import backgroundImage from '../img/background.png';
import LoadingPage from '../Loader/LoadingPage';
import FooterPage from '../Footer/FooterPage';

const LocationApp = () => {
  
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	const handleChangeSearch = (text: string) => {
		setSearchText(text);
	}
  
  const title = "Locations";

  return (
    <>
			{isLoading && <LoadingPage title={title} />}
			{!isLoading && (
        <>
          <main 
            className='flex-grow justify-center px-4 sm:px-8 md:px-36 pt-32'
            style={{
              backgroundImage: `url(${backgroundImage})`, // Establece la imagen de fondo
              backgroundSize: "contain", 
              backgroundPosition: "center", 
              minHeight: "100vh"
            }}
          >
            <div className='flex items-center justify-center'>
              <Title title={title} />
            </div>
            <div className='container mx-auto'>
              <section className='mt-12 mb-8'>
                <div className='flex justify-between items-center px-40'>
                  <div className='w-full'>
                    <SearchInput handleChangeSearch={handleChangeSearch} />
                  </div>
                </div>
              </section>
              <section className='flex flex-col md:flex-row'>
                <div className="flex-grow p-4 md:w-3/4">
                  <div className="flex flex-col md:flex-row">
                    <ListLocation searchText={searchText} />
                  </div>
                </div>
              </section>
            </div>
          </main>
          <FooterPage />
        </>
        )}
    </>
  )
}

export default LocationApp