import React from 'react';

const CbxGender = ({handleChangeGender }: { handleChangeGender: Function }) => {
  
	const genders = ["female", "male", "genderless", "unknown"];
  
	return (
    <select className='w-full text-center h-8 border border-gray-500 rounded px-2' name="" id="" onChange={(event) => handleChangeGender(event.target.value)} key='genders' >
				<option key='Select Gender' value="">Select Gender</option>
				{
					genders.map( (gender) => (
						<option key={gender} value={gender}>{gender}</option>
					))
				}
    </select>
  )
}

export default CbxGender