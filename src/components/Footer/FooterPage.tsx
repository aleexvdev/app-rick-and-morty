import React from 'react'
import { Link } from 'react-router-dom'
import { SocialNetworks } from '../../data/SocialNetworks'
import RickAndMortyImage from '../img/rickandmorty.png'
import { BsLink45Deg } from 'react-icons/bs';

const FooterPage = () => {
  return (
    <footer className='flex items-center justify-center w-full text-white py-7 bg-slate-800'>
        <div className='text-center w-80 mr-5'>
            <div>Data provided by The Rick and Morty API</div>
            <div className="flex items-center justify-center pt-3">
                <img src={RickAndMortyImage} alt="The Rick and Morty API" className='w-20' />
                <div className='ml-2 flex items-center justify-center flex-col'>
                    <span>For more information visit: </span>
                    <div className='flex items-start justify-between text-center pb-2'>
                        <BsLink45Deg size={22} />
                        <Link to="https://rickandmortyapi.com/" target='_blank'>RickAndMortyApi.com</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='ml-5'>
            <p className='pb-2 font-medium'>Made by Alexander Valverde AlexVDev</p>
            <div className='flex items-center justify-center'>
                {
                    SocialNetworks.map( (social) => (
                        <a key={social.id} className='mx-3 text-lg rounded-full bg-white' href={social.url} target="_blank" rel="noreferrer">
                            <div className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-400'>
                                {social.icon}
                            </div>  
                        </a>
                    ))
                }
            </div>
        </div>
    </footer>
  )
}

export default FooterPage