import React from 'react'

interface TitleProp {
  title: string;
}

export const Title: React.FC<TitleProp> = ( {title} ) => {
  return (
    <h1 className='text-center font-bold text-5xl  tracking-wide leading-loose text-white'>
        {title}
    </h1>
  )
}
