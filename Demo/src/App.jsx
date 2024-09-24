import { useState } from 'react'
import { findNthPrime } from './constant'
import { useMemo } from 'react'
import DemoRef from './DemoRef'

function App() {
  const [inputValue, setInputValue] = useState(0)
  const [darktheme, setDarkTheme] = useState(false)
 

  const prime = useMemo(()=> findNthPrime(inputValue), [inputValue]) 

  return (
    <>
    <div className={`w-80 h-96 m-5 p-5  border border-black ${darktheme ? 'bg-black text-white' : ''}`} >
      <button className='border p-2 bg-green-200 rounded-lg' onClick={()=> setDarkTheme(!darktheme)}>Toggle Theme</button>
       <h1 className='mt-3 font-bold'>value</h1>
    <input className='border border-black w-60' type='number' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
    <h1> nth prime: {prime}</h1>
  
 </div>
 <DemoRef />
 </>
  )
}

export default App
