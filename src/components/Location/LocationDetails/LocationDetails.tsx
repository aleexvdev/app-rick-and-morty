import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import CardDetailsCharacter from '../../CardApp/CardDetails/CardDetailsCharacter';
import backgroundImage from '../../img/background.png';
import LoadingPage from '../../Loader/LoadingPage';

interface LocationEstructure {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
}

const LocationDetails = () => {

  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  let apiLocation = `https://rickandmortyapi.com/api/location/${id}`;

  const [location, setLocation] = useState<LocationEstructure | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiLocation);
        setLocation(response.data);
      } catch (error) {
        console.error('Error al obtener personajes:', error);
      } finally {
				setTimeout(() => {
          setIsLoading(false);
        }, 2000);
			}
    }
    fetchData();
  }, [apiLocation]);

  return (
    <>
			{isLoading && <LoadingPage />}
			{!isLoading && (
        <main
          className='flex-grow justify-center px-4 sm:px-8 md:px-36 pt-32'
          style={{
            backgroundImage: `url(${backgroundImage})`, // Establece la imagen de fondo
            backgroundSize: "contain",
            backgroundPosition: "center",
            minHeight: "100vh"
          }}
        >
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-4xl text-yellow-400 font-bold"><span className='font-bold text-white'>Location: </span>{location?.name}</h1> 
          </div>
          <div className="text-center mt-4 text-2xl">
              <p className="text-orange-300"><span className='font-bold text-white'>Dimension: </span>{location?.dimension}</p> 
              <p className="text-orange-300"><span className='font-bold text-white'>Type: </span>{location?.type}</p> 
              <p className="text-orange-300"><span className='font-bold text-white'>Residents: </span>{location?.residents.length}</p> 
          </div>
          <div className="text-center mt-8 md:flex-grow flex flex-wrap justify-evenly">
          
            {
              location?.residents.map((character) => (
                <div className="w-full md:w-1/1 lg:w-1/2 xl:w-1/4 p-4">
                  <CardDetailsCharacter props={character} />
                </div>
              ))
            }
          </div>
        </main>
        )}
      </>
  )
}

export default LocationDetails