import React from 'react';

const CbxSpecies = ({handleChangeSpecie }: { handleChangeSpecie: Function }) => {
  
	const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <select className='w-full text-center h-8 border border-gray-500 rounded px-2' name="" id="" onChange={(event) => handleChangeSpecie(event.target.value)} key='especies'>
				<option key='Select Specie' value="">Select Specie</option>
				{
					species.map( (specie) => (
					<option key={specie} value={specie}>{specie}</option>
					))
				}
    </select>
  )
}

export default CbxSpecies