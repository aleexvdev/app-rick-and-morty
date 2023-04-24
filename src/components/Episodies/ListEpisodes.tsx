import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EpisodesCard from '../CardApp/EpisodesCard';
 
interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  characters: string[];
}

interface ListSearchProps {
  searchText: string;
}

const ListEpisodes: React.FC<ListSearchProps> = ({searchText}) => {
	
  let apiEpisodies = `https://rickandmortyapi.com/api/episode/?&name=${searchText}`;

  const [episodes, setEpisodes] = useState<Episode[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(apiEpisodies);
        setEpisodes(response.data.results);
			} catch (error) {
				console.error('Error al obtener episodio:', error);
			}
		}
		fetchData();
	}, [apiEpisodies]);

  return (
    <div className='md:flex-grow flex flex-wrap justify-evenly'>
      {episodes.map((episode) => (
        <div key={episode.id} className="w-full md:w-1/1 lg:w-1/2 xl:w-1/3 p-4">
            <EpisodesCard 
              {...episode}
            />
        </div>
      ))
      }
    </div>
  )
}

export default ListEpisodes