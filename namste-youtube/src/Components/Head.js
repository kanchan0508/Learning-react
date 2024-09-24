import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/AppSlice'
import { YOUTUB_SEARCH_API } from '../utils/Constant'

const Head = () => {
  const [suggestions, setSuggestions]= useState("")
    const dispatch = useDispatch()

    const showSearch = useSelector(store => store.search)

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
    // useEffect(()=>{
    //   const timer = setTimeout( () => getSuggestions(), 200)

    //   return ()=>{
    //     clearTimeout(timer)
    //   }

    // },[suggestions])

   const getSuggestions = async() =>{
    const data = await fetch(`https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${suggestions}`)
    const json = data.json()
   }
  return (
    <div className='grid grid-flow-col '>
      <div className='flex  mt-2 col-span-1'>
      <img className='h-14 cursor-pointer' alt='menu' onClick={()=> toggleMenuHandler()} src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' />
      <img className='h-14'  alt='logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' />
      </div>
      <div className='flex col-span-10 ml-20 items-center'>
        <input className='w-1/2 h-12 mt-5 border border-gray-400 rounded-l-full' type='text' value={suggestions} onChange={(e)=> setSuggestions(e.target.value)} />
        <button className='border border-gray-400 px-3 py-1 mt-5 h-12 rounded-r-full'>Search</button>
      </div>
      <div className='mt-2 col-span-1 '>
        <img className='h-9' alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" />
      </div>
    </div>
  )
}

export default Head
