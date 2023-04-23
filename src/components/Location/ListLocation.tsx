import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LocationsCard from '../CardApp/LocationsCard';

interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
}

interface ListSearchProps {
    searchText: string;
}

const ListLocation: React.FC<ListSearchProps> = ({ searchText }) => {

    let apiLocations = `https://rickandmortyapi.com/api/location/?&name=${searchText}`;

    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiLocations);
                setLocations(response.data.results);
            } catch (error) {
                console.error('Error al obtener locations:', error);
            }
        }
        fetchData();
    }, [apiLocations]);

    return (
        <div className='md:flex-grow flex flex-wrap justify-evenly'>
            {locations.map((location) => (
                <div key={location.id} className="w-full md:w-1/1 lg:w-1/2 xl:w-1/3 p-4">
                    <LocationsCard
                        {...location}
                    />
                </div>
            ))
            }
        </div>
    )
}

export default ListLocation