import React, {useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice'
import { generateRandomName } from '../utils/Helper'

function ChatBox() {
    const [LiveChatMessage, setLiveChatMessage] = useState('')

    const dispatch = useDispatch()

    const ChatMessages = useSelector(store => store.chat.messages)
    useEffect(() =>{
        const i = setInterval(()=>{
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: 'hello'
                })
                
            )
        }, 500)

        return () => clearInterval(i)
    },[])
  return (
    <>
    <div className='w-[50%] h-[250px] border border-black m-4 overflow-y-scroll bg-slate-100'>
        {ChatMessages.map((c, i)=>(
             <ChatMessage key={i}  name={c.name} message={c.message}/>
        ))}
        
    </div>
    <form className= ' flex w-[50%] h-30 border border-black mb-5' onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({name: "Kanchan", message: LiveChatMessage}))
        setLiveChatMessage('')
    }}>
        <input className='w-[86%] border border-blue-400' type='text' value={LiveChatMessage} onChange={(e)=> setLiveChatMessage(e.target.value)} />
        <button className='w-[14%] bg-green-200 border border-black ml-2' type='submit'>Send</button>
    </form>
    </>
  )
}

export default ChatBox
