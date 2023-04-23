import React from 'react'

const SearchInput = ({ handleChangeSearch }: { handleChangeSearch: Function }) => {
  return (
    <div className='mr-4'>
      <input 
        className='w-full rounded-lg h-12 outline-none px-5 text-lg bg-gray-00 border border-gray-700 text-black'
        type="text" 
        name="" 
        id="" 
        placeholder='Search for name...'
        onChange={(event) => handleChangeSearch(event.target.value)}
      />
    </div>
  )
}

export default SearchInput