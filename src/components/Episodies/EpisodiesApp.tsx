import React, { useState } from 'react'
import SearchInput from '../Search/SearchInput'
import { Title } from '../Title'
import ListEpisodies from './ListEpisodies'

const EpisodiesApp = () => {

	const [searchText, setSearchText] = useState('');

	const handleChangeSearch = (text: string) => {
		setSearchText(text);
	}

	return (
		<main className='flex-grow justify-center px-4 sm:px-8 md:px-36 mt-32'>
			<div className='flex items-center justify-center mt-8 mb-8'>
				<Title title={'Episodies'} />
			</div>
			<div className='container mx-auto'>
				<section className='mt-12 mb-8'>
					<div className='flex justify-between items-center px-40'>
						<div className='w-full'>
							<SearchInput handleChangeSearch={handleChangeSearch} />
						</div>
					</div>
				</section>
				<section className='flex flex-col md:flex-row'>
					<div className="flex-grow p-4 md:w-3/4">
						<div className="flex flex-col md:flex-row">
							<ListEpisodies searchText={searchText} />
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default EpisodiesApp