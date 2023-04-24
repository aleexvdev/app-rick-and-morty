import React from 'react';
import backgroundImage from '../img/background.png'

const Error404 = () => {
  return (
    <main
      className='flex-grow justify-center px-4 sm:px-8 md:px-36 pt-32'
      style={{
        backgroundImage: `url(${backgroundImage})`, // Establece la imagen de fondo
        backgroundSize: "contain",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >
      <div className="flex justify-center items-center h-full pt-32">
        <div className="text-center">
          <h1 className="text-white text-9xl font-bold"><span className='text-yellow-500'>404</span> Error</h1>
          <p className="text-gray-300 text-3xl mt-8">Opps! That page doesn't exist!</p>
        </div>
      </div>
    </main>
    
  )
}

export default Error404