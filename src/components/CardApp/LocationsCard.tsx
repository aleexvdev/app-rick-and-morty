import React from 'react'
import { Link } from 'react-router-dom';


export interface LocationProps {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
}
const LocationsCard = (props: LocationProps) => {
    return (
        <div className="bg-gray-200 rounded-lg shadow-md flex flex-col md:flex-row">
            <div className="flex flex-col p-4">
                <Link to={`/location/${props.id}`} className="mb-4 mt-2">
                    <h1 className="text-lg font-semibold">{props.name}</h1>
                </Link>
                <p className="text-gray-800 mb-1"><span className='font-bold'>Dimension: </span>{props.dimension}</p>
                <p className="text-gray-800 mb-1"><span className='font-bold'>type: </span>{props.type}</p>
                <p className="text-gray-800 mb-1"><span className='font-bold'>Residents: </span>{props.residents.length}</p>
            </div>
        </div>
    )
}

export default LocationsCard