import React, { useState } from 'react'
import CbxGender from '../Filters/CbxGender'
import CbxSpecies from '../Filters/CbxSpecies'
import CbxStatus from '../Filters/CbxStatus'
import ListFilters from '../Filters/ListFilters'
import SearchInput from '../Search/SearchInput'
import { Title } from '../Title'
import ListCharacters from './ListCharacters'

const CharactersApp = () => {

	const [searchText, setSearchText] = useState('');
	const [valueStatus, setValueStatus] = useState('');
	const [valueGenders, setValueGenders] = useState('');
	const [valueSpecies, setValueSpecies] = useState('');

	const handleChangeSearch = (text: string) => {
		setSearchText(text);
	}

	const handleChangeStatus = (text: string) => {
		setValueStatus(text);
	}

	const handleChangeSpecie = (text: string) => {
		setValueSpecies(text);
	}

	const handleChangeGender = (text: string) => {
		setValueGenders(text);
	}

	return (
		<main className='flex-grow justify-center px-4 sm:px-8 md:px-36 mt-32'>
			<div className='flex items-center justify-center mt-8 mb-8'>
				<Title title={'Characters'} />
			</div>
			<div className='container mx-auto'>
				<section className='mt-12 mb-8'>
					<div className='flex justify-between items-center px-40'>
						<div className='w-full'>
							<SearchInput handleChangeSearch={handleChangeSearch} />
						</div>
					</div>
					<div className='mt-4'>
						<div className='flex justify-between items-center px-40 my-4'>
							<span className='text-lg font-bold'>Filters: </span>
							<ListFilters valueStatus={valueStatus} valueGenders={valueGenders} valueSpecies={valueSpecies} />
						</div>
						<div className='flex justify-between items-center px-40'>
							<div className='w-60 mr-6'>
								<CbxStatus handleChangeStatus={handleChangeStatus} />
							</div>
							<div className='w-60 mr-6'>
								<CbxSpecies handleChangeSpecie={handleChangeSpecie} />
							</div>
							<div className='w-60 mr-6'>
								<CbxGender handleChangeGender={handleChangeGender} />
							</div>
						</div>
					</div>
				</section>
				<section className='flex flex-col md:flex-row'>
					<div className="flex-grow p-4 md:w-3/4">
						<div className="flex flex-col md:flex-row">
							<ListCharacters searchText={searchText} valueStatus={valueStatus} valueGenders={valueGenders} valueSpecies={valueSpecies} />
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default CharactersApp