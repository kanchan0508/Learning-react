import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/AppSlice'

const Head = () => {
    const dispatch = useDispatch()

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col '>
      <div className='flex  mt-2 col-span-1'>
      <img className='h-14 cursor-pointer' alt='menu' onClick={()=> toggleMenuHandler()} src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' />
      <img className='h-14'  alt='logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' />
      </div>
      <div className='flex col-span-10 ml-20 items-center'>
        <input className='w-1/2 h-12 mt-5 border border-gray-400 rounded-l-full' type='text' />
        <button className='border border-gray-400 px-3 py-1 mt-5 h-12 rounded-r-full'>Search</button>
      </div>
      <div className='mt-2 col-span-1 '>
        <img className='h-9' alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" />
      </div>
    </div>
  )
}

export default Head
