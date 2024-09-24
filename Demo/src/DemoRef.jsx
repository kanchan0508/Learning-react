import React from 'react'
import { useRef } from 'react'

function DemoRef() {
    const [inputValue, setInputValue] = React.useState(0)

    const ref = useRef(0)
   
  return (
    <div className={`w-80 h-96 m-5 p-5  border border-black `} >
    <button className='border p-2 bg-green-200 rounded-lg' >Toggle Theme</button>
     <h1 className='mt-3 font-bold'>value</h1>
  <input className='border border-black w-60' type='number' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
  <h1> nth prime: </h1>
  <button className='border p-2 bg-green-200 rounded-lg' onClick={()=> {ref.current = ref.current + 1}} >Update Ref</button>
  <h1>ref value : {ref.current}</h1>
  </div>
  )
}

export default DemoRef
