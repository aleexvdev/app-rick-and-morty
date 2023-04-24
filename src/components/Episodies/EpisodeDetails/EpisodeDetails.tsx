import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardDetailsCharacter from '../../CardApp/CardDetails/CardDetailsCharacter';
import backgroundImage from '../../img/background.png';
import LoadingPage from '../../Loader/LoadingPage';

interface EpisodieEstructure {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

const EpisodieDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(true);

    let apiEpisode = `https://rickandmortyapi.com/api/episode/${id}`;

    const [episode, setEpisode] = useState<EpisodieEstructure | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEpisode);
                setEpisode(response.data);
            } catch (error) {
                console.error('Error al obtener episodio detalle:', error);
            } finally {
				setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
			}
        }
        fetchData();
    }, [apiEpisode]);

    if (episode === null) {
        return(
            <div>No hay data</div>
        )
    }

    const title = `Episode ${episode.name}`;

    return (
        <>
			{isLoading && <LoadingPage title={title} />}
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
                    <h1 className="text-4xl text-yellow-400 font-bold"><span className='font-bold text-white'>Episode ({episode?.episode}): </span>{episode?.name}</h1> 
                </div>
                <div className="text-center mt-4 text-2xl">
                    <p className="text-orange-300"><span className='font-bold text-white'>Air Date: </span>{episode?.air_date}</p> 
                    <p className="text-orange-300"><span className='font-bold text-white'>Characters: </span>{episode?.characters.length}</p> 
                </div>
                <div className="text-center mt-8 md:flex-grow flex flex-wrap justify-evenly">
                    {
                        episode?.characters.map((character) => (
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

export default EpisodieDetails