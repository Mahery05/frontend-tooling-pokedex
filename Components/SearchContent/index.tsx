import React from 'react'
import Button from '../Button'



type Forms =
{
    inputValue:string;
    changed: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function SearchContent(props: Forms){return(
    <>
    <form >
        <input className=" w-96 bg-transparent border border-red-800 rounded  w-full text-gray-700 py-5 px-10 leading-tight focus:outline-red-700"
        type="text"
        placeholder="Cherchez un Pokémon"
        value = {props.inputValue}
        onChange = {props.changed}
        />    
            
    </form>
    </>
)}