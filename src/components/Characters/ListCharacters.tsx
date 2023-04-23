import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard, { CharacterProps } from './CharacterCard'; 

interface ListCharactersProps {
  searchText: string;
  valueStatus: string;
  valueGenders: string;
  valueSpecies: string;
}

const ListCharacters: React.FC<ListCharactersProps> = ( {searchText, valueStatus, valueGenders, valueSpecies} ) => {

	let apiCharacters = `https://rickandmortyapi.com/api/character/?&name=${searchText}&status=${valueStatus}&gender=${valueGenders}&species=${valueSpecies}`;

  const [characters, setCharacters] = useState<CharacterProps[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(apiCharacters);
				setCharacters(response.data.results);
			} catch (error) {
				console.error('Error al obtener personajes:', error);
			}
		}
		fetchData();
	}, [apiCharacters]);

	/* const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  ); */
	
	return (
		<div className='md:flex-grow flex flex-wrap justify-evenly'>
			{
				characters.map( (character) => (
					<div key={character.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/2 p-4">
						<CharacterCard 
							{...character}
						/>
					</div>
				))
			}
		</div>
	)
}

export default ListCharacters;