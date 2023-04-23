import React from 'react'

interface ListFiltersProps {
	valueStatus: string;
	valueGenders: string;
	valueSpecies: string;
}

const ListFilters: React.FC<ListFiltersProps> = ( {valueStatus, valueGenders, valueSpecies} ) => {
  return (
    <div className='w-full text-left ml-3'>
			{
				(valueStatus !== '') 
				?
				(<span className="inline-block bg-yellow-700 w-auto text-center text-white text-sm font-semibold py-1 px-4 rounded-full mr-4 mb-1">
					{valueStatus}
				</span>) : ''
			}
			{
				(valueSpecies !== '') 
				?
				(<span className="inline-block text-sm bg-purple-700 w-auto text-center text-white font-semibold py-1 px-4 rounded-full mr-4 mb-1">
				{valueSpecies}
			</span>) : ''
			}
			{
				(valueGenders !== '') 
				?
				(<span className="inline-block bg-orange-700 w-auto text-center text-white text-sm font-semibold py-1 px-4 rounded-full mr-4 mb-1">
				{valueGenders}
			</span>) : ''
			}
		</div>
  )
}

export default ListFilters