"use client";
import React, { useState } from 'react'
import {AiFillCaretDown, AiFillLock, AiOutlineClose, AiOutlineSearch  } from 'react-icons/ai';
import {BiMenuAltLeft} from 'react-icons/bi'
const Header = () => {

    const [toggle, setToggle] = useState(false)
    const [isSearch, setIsearch] = useState(false)
    
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleOpenSearchBox = () => {
        setIsearch(!isSearch)
    }
  return (
    <header className='flex items-center h-20 justify-between fixed top-0 left-0 right-0 px-10 z-30'>
        <div className="flex items-center">
            <span className='mr-12 text-2xl font-bold'>Taggo</span>
            <ul className={toggle ? "flex z-50 items-center gap-8 text-xl max-md:flex-col max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-[70%] max-md:items-start max-md:pt-[50px] max-md:px-[50px] max-md:bg-slate-600 ease-in-out duration-300" : "flex items-center gap-8 text-xl max-md:flex-col max-md:absolute max-md:top-0 max-md:left-[-600px] max-md:h-screen max-md:w-[70%] max-md:items-start max-md:pt-[50px] max-md:px-[50px] max-md:bg-slate-600  ease-in-out duration-300"}>
                <span className='absolute top-2 right-2 hidden max-md:block cursor-pointer' onClick={handleToggle}><AiOutlineClose size={25}/></span>
                <li>Chat</li>
                <li>Work</li>
                <li>Link</li>
                <li>Tech</li>
                <li>Cloud</li>
                <li className='flex items-center gap-1'>More <AiFillCaretDown size={14}/></li>
            </ul>
        </div>
        <div className='flex items-center gap-3'>
            <div className={`search relative z-10 bg-white rounded-full ${isSearch ? 'pr-10 pl-5 py-1' : 'p-0'}`}>
                <input type="text"  className={`outline-none text-black ${isSearch ? 'w-[300px] max-sm:w-[200px] duration-500 ease-in-out' : 'w-0 duration-500 ease-in-out'}  `}/>
                <AiOutlineSearch size={24} onClick={handleOpenSearchBox} className={`absolute right-1 top-[50%] translate-y-[-50%] cursor-pointer ${isSearch ? 'bg-neutral-200 rounded-full p-1 duration-500 ease-in-out' : ' ' }`}/>
            </div>
            <AiFillLock size={24} className='cursor-pointer'/>
            <div className='max-md:block hidden'>
                <BiMenuAltLeft size={24} onClick={handleToggle} className='cursor-pointer'/>
            </div>
        </div>
    </header>
  )
}

export default Header