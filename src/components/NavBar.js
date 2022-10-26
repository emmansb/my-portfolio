import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


export default function NavBar() {
    const activeLink = 'underline decoration-white hover:decoration-fuchsia-200'
    const normalLink = ''


  return (
    <header class='bg-black'>
    <div className='container mx-auto flex justify-between'>
    <nav className='flex'>

        <NavLink
          to="/"
          >


          <p className='inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-fuchsia-100 text-4xl font-bold cursive tracking-widest'>Emmans</p>
       
        
        </NavLink>

        <NavLink to="/about"
        className={({ isActive }) =>
        isActive ? 
        activeLink : normalLink}>

        <p className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-fuchsia-200'>About Me</p>
       
        </NavLink>
 

        <NavLink to="/project"
        className={({ isActive }) =>
        isActive ? 
        activeLink : normalLink}>

       <p className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-fuchsia-200'>Projects</p>
        
         
            
        </NavLink>

        <NavLink
          to="/post"
          className={({ isActive }) =>
        isActive ? 
        activeLink : normalLink}>
          
          <p className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-fuchsia-200'>Blog Post</p>
      
        
        </NavLink>
  </nav>
      <div className='inline-flex py-2 px-2 my-6'>
        <SocialIcon 
        url='https://twitter.com/mynameisemmansb'
        className='mr-4'
        target='_blank'
        fgColor='#fff'
        style={{height:35, width: 35}}
        />
        <SocialIcon 
        url='https://www.linkedin.com/in/abiodun-adekiitan-763a518a/'
        className='mr-4'
        target='_blank'
        fgColor='#fff'
        style={{height:35, width: 35}}
        />
        <SocialIcon 
        url='https://www.instagram.com/emmansbproduction/'
        className='mr-4'
        target='_blank'
        fgColor='#fff'
        style={{height:35, width: 35}}
        />
      </div>



  </div>
  </header>
  )
}
