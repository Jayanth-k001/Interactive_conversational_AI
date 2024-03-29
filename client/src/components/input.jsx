import React, { useState } from 'react'

const Input=({sendMessage, loading})=>{
    const [value,setValue]=useState("");

    const handleSubmit=()=>{
        if(value==="") return;
        sendMessage({sender:"user",message :value});
        setValue("")
    };

    return (
        <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 my-9 overflow-auto relative'>

    {loading ? (
        <img src="./loader.gif" className="w-8 m-auto" />
      ) : (
        <>
            <textarea placeholder='Type message......' 
            onKeyDown={(e)=>{
                e.keyCode===13 && e.shiftKey===false && handleSubmit();
            }}
            rows={1} 
            value ={value}
            onChange={(e)=>setValue(e.target.value)}
            type="text"
            className='border-0 bg-transparent outline-none w-11/12 px-4' />


            <img 
            onClick={handleSubmit}
            src="./send.png" 
            width={20} 
            alt="send-button" 
            className='absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125'/>
             </>
      )}
        </div>
    )
}

export default Input