import React from 'react';

const CbxStatus = ({ handleChangeStatus }: { handleChangeStatus: Function }) => {
	const status = ["Alive", "Dead", "Unknown"];
	return (
		<select className='w-full text-center h-8 border border-gray-500 rounded px-2' onChange={(event) => handleChangeStatus(event.target.value)} >
			<option key='Select Status' value="">Select Status</option>
			{
				status.map((state) => (
					<option  key={state} value={state}>{state}</option>
				))
			}
		</select>
	)
}

export default CbxStatus