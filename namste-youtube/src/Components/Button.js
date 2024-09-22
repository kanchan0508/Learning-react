import React from 'react'

function Button({name}) {
  return (
    <div className='ml-3'>
      <button className='bg-gray-100 text-lg ml-3 text-black border border-gray-400  rounded-lg py-2 px-2'>{name}</button>
    </div>
  )
}

export default Button
