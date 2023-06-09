import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface LocationEstructureCharacter {
    props: string;
}

interface CharacterEstructure {
    id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}

const colorTagBg = {
	"Alive" : 'green',
	"Dead" : 'red',
	"unknown" : 'black'
}
const CardDetailsCharacter = (props: LocationEstructureCharacter) => {

    let apiCharacter = props.props;

    const [character, setCharacter] = useState<CharacterEstructure | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(apiCharacter);
				setCharacter(response.data);
			} catch (error) {
				console.error('Error al obtener personajes:', error);
			}
		}
		fetchData();
	}, [apiCharacter]);

    if (!character) {
        return <div>Cargando...</div>; 
    }

    const statusColorBg = colorTagBg[character.status as keyof typeof colorTagBg];

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-5 max-w-md md:p-8">
                <div className="flex items-center justify-center mb-4">
                    <h1 className="text-2xl font-bold">{character.name}</h1> 
                    <span className="bg-gray-400 text-white rounded-lg px-3 py-1 text-sm font-bold ml-2" style={{ backgroundColor: statusColorBg }}>{character.status}</span>
                </div>
                <img src={character.image} alt={character.name} className="w-full rounded-t-lg" />
                <div className="text-center mt-4">
                    <p className="text-gray-600"><span className='font-bold text-gray-800'>Specie: </span>{character.species}</p> 
                    <p className="text-gray-600"><span className='font-bold text-gray-800'>Gender: </span>{character.gender}</p> 
                    <p className="text-gray-600"><span className='font-bold text-gray-800'>Type: </span>{character.type}</p> 
                    <p className="text-gray-600"><span className='font-bold text-gray-800'>Origin: </span>{character.origin.name}</p> 
                    <p className="text-gray-600"><span className='font-bold text-gray-800'>Location: </span>{character.location.name}</p> 
                    <p className="text-gray-600"><span className='font-bold text-gray-800'>Episodes: </span>{character.episode.length}</p> 
                </div>
            </div>
        </div>
    )
}

export default CardDetailsCharacter