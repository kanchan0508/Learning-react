import React from 'react'
import { useSelector } from 'react-redux'


function Sidebar() {
  
  const  isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) return null

  
  return (
    <div className='col-span-2 ml-5 shadow-lg'> 
      <ul className='mt-5'>
        <li className='font-bold'>Home</li>
        <li className="mt-2">Shorts</li>
        <li className="mt-2">Subscription</li>       
      </ul>
      <hr />
      <ul className='mt-5'>
        <li className='font-bold'>You</li>
        <li className="mt-2">Your Channel</li>
        <li className="mt-2">Playlist</li>       
        <li className="mt-2">Your Videos</li>
        <li className="mt-2">Watch Later</li>
        <li className="mt-2">Liked Videos</li>       
      </ul>
      <hr />
      <ul className='mt-5'>
        <li className='font-bold'>Explore</li>
        <li className="mt-2">Trending</li>
        <li className="mt-2">Shopping</li>       
        <li className="mt-2">Music</li>       
        <li className="mt-2">Films</li>       
      </ul>
      <hr></hr>
    </div>
  )
}

export default Sidebar
