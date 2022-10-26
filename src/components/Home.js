import React from 'react'
import image from '../asset/bg.png'

export default function Home() {
  return (
    <main>
      <img src={image} alt='Emmans' className='absolute object-cover w-full h-full brightness-125'/>
        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
          <h1 className='text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name'>
            Hi. I'm Emmans Abiodun</h1>
        </section>
    </main>
  )
}
