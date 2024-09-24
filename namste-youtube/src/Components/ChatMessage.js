import React from 'react'

function ChatMessage({name, message}) {
  return (
    <div className='flex shadow-sm items-center  mt-2'>
         <img className='h-9' alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" />
         <span className='font-bold px-2'>{name}</span>
         <p>{message}</p>
      
    </div>
  )
}

export default ChatMessage
