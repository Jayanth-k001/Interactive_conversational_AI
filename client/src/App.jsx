import { useState } from 'react'
import Body from "./components/body"
import Input from "./components/input"
import {fetchResponse} from "./api"
import {useMutation} from 'react-query'

function App() {

  const [chat,setChat]=useState([]);

  const mutation =useMutation({
    mutationFn:()=>{
      return fetchResponse(chat);
    },
   onSuccess:(data)=> setChat((prev)=>[...prev,{sender:'ai',message: data.message.replace(/^\n\n/, "")},]),
  })

  const sendMessage=async(message)=>{
    await Promise.resolve(setChat((prev)=>[...prev,message]));
    mutation.mutate();
  }
  return (
    <div className="bg-[#1a232e] h-screen py-6 relative sm:px-16 px-12
    text-white overflow-hidden flex flex-col
     align-middle justify-between">
        <div class="gradient-01 "></div>
        <div class="gradient-02 "></div>


    <div className="uppercase font-bold text-2xl text-center font-c">Jayanth's GPT </div>
    <div className="h-[90%] overflow-auto w-full max-w-4xl 
    min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin 
      scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md
      "><Body chat={chat}/></div>


    <div className='w-full max-w-4xl min-w-[20rem] self-center' ><Input sendMessage={sendMessage} loading={mutation.isLoading}/></div>

    </div>
  )
}

export default App
