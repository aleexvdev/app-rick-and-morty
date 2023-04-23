import React from 'react';
import { Link } from 'react-router-dom';

export interface EpisodeProps {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  characters: string[];
}

const EpisodiesCard = (props: EpisodeProps) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md flex flex-col md:flex-row">
      <div className="flex flex-col p-4">
				<Link to={`/${props.id}`} className="mb-4 mt-2">
					<h1 className="text-lg font-semibold">{props.name}</h1>
				</Link>
        <p className="text-gray-800 mb-1"><span className='font-bold'>Episode: </span>{props.episode}</p>
        <p className="text-gray-800 mb-1"><span className='font-bold'>Air Date: </span>{props.air_date}</p>
        <p className="text-gray-800 mb-1"><span className='font-bold'>Characters: </span>{props.characters.length}</p>
      </div>
    </div>
  )
}

export default EpisodiesCard