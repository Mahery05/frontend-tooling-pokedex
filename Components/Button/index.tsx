
import React from 'react'

interface Btn{
    name: string,
     clickedButton:React.MouseEventHandler<HTMLButtonElement>
}
export default function Button(props:Btn){return(

    <button 
    className="bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-7 rounded"
    onClick = {props.clickedButton}
    >
        {props.name}
    </button>
)}