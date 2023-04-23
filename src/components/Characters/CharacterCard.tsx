import React from 'react'

export interface CharacterProps {
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
	"Unknown" : 'black'
}

const CharacterCard = (props: CharacterProps) => {
	const statusColorBg = colorTagBg[props.status as keyof typeof colorTagBg];
	// const statusColorTagText = colorTagText[props.status as keyof typeof colorTagText];

	return (
		<div className="bg-gray-200 rounded-lg shadow-md flex flex-col md:flex-row">
      <div className="w-full md:w-44">
        <img
          className="h-full w-full object-cover rounded-lg md:rounded-l-lg"
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-lg font-semibold mb-2">{props.name}</h2>
        <p className="text-gray-700 mb-1"><span className='font-bold'>Gender: </span>{props.gender}</p>
        <p className="text-gray-700 mb-1"><span className='font-bold'>Species: </span>{props.species}</p>
        <p className="text-gray-700 mb-4"><span className='font-bold'>Location: </span>{props.location.name}</p>
        <div className="mt-auto">
          <span className="inline-block text-white text-xs font-semibold py-1 px-2 rounded-full mb-1" style={{ backgroundColor: statusColorBg }}>
            {props.status}
          </span>
        </div>
      </div>
    </div>
	)
}

export default CharacterCard;