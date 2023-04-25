import React, { useEffect, useState } from 'react'
import { SocialNetworks } from '../../data/SocialNetworks';
import LoadingPage from '../Loader/LoadingPage';
import { Title } from '../Title'

const HomeMainApp = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

  const title = "Home";

  return (
    <>
			{isLoading && <LoadingPage title={title} />}
			{!isLoading && (
      <main className='flex flex-wrap items-center justify-center h-screen'>
          <div className='text-center absolute z-10 top-36 left-0 right-0 text-white px-16 md:px-0 w-full md:w-auto'>
              <Title title={'APP RICK AND MORTY'} />
              <div className='flex flex-row items-center justify-center'>
                {
                  SocialNetworks.map( (social) => (
                    <a key={social.id} className='mx-3 text-3xl rounded-lg bg-white' href={social.url} target='_blank' rel='noopener noreferrer'>
                      <div className='w-11 h-11 flex items-center justify-center  rounded-lg hover:bg-gray-300'>
                        {social.icon}
                      </div>  
                    </a>
                  ))
                }
              </div>
          </div>
          <div className='relative w-full md:w-auto md:ml-auto'>
              <section className='flex justify-center items-center'>
                  <img src="https://images3.alphacoders.com/812/812062.png" alt="" className='w-full md:w-screen h-screen object-cover md:object-center-right' />
              </section>
          </div>
      </main>
      )}
    </>

  )
}

export default HomeMainApp