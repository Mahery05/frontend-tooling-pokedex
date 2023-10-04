
import React from 'react'

export default function Header(){return(
    <>
    <div 
    className="flex items-center justify-between flex-wrap bg-red-700 p-6 text-white "
    >
        <div
        className="text-2xl"
        id = "logo"
        >
            pokédex-IIM
            <div 
            className="text-sm pt-2"
            id = "logo-logo"
            >
                Votre Pokédex
            </div>
        </div>
    </div>
    


    <div className="flex items-center justify-center flex-wrap bg-red-800 p-1 text-white">
            <a
            href = "/"
            className = "p-5">
                Home
            </a>
            <a 
            href = "/search"
            className = "p-5">
                Search
            </a>
        </div>
        
        
    </>
)}