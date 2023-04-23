import React from 'react'
import { Title } from '../Title'

const HomeMainApp = () => {
  return (
    <main className='flex flex-wrap items-center justify-center h-screen'>
        <div className='text-center absolute z-10 top-36 left-0 right-0 text-white px-16 md:px-0 w-full md:w-auto'>
            <Title title={'APP RICK AND MORTY'} />
        </div>
        <div className='relative w-full md:w-auto md:ml-auto'>
            <section className='flex justify-center items-center'>
                <img src="https://images3.alphacoders.com/812/812062.png" alt="" className='w-full md:w-screen h-screen object-cover md:object-center-right' />
            </section>
        </div>
    </main>


  )
}

export default HomeMainApp