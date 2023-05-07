"use client";
import React, { useState } from 'react'
import {AiFillLock, AiOutlineClose, AiOutlineSearch  } from 'react-icons/ai';
import {BiMenuAltLeft} from 'react-icons/bi'
const Header = () => {

    const [toggle, setToggle] = useState(false)
    
    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <header className='flex items-center h-20 justify-between fixed top-0 left-0 right-0 px-10 z-30'>
        <div className="flex items-center">
            <span className='mr-12 text-2xl font-bold'>Taggo</span>
            <ul className={toggle ? "flex items-center gap-8 text-xl max-md:flex-col max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-[70%] max-md:items-start max-md:pt-[50px] max-md:px-[50px] max-md:bg-slate-600 ease-in-out duration-300" : "flex items-center gap-8 text-xl max-md:flex-col max-md:absolute max-md:top-0 max-md:left-[-500px] max-md:h-screen max-md:w-[70%] max-md:items-start max-md:pt-[50px] max-md:px-[50px] max-md:bg-slate-600  ease-in-out duration-300"}>
                <span className='absolute top-2 right-2 hidden max-md:block cursor-pointer' onClick={handleToggle}><AiOutlineClose size={25}/></span>
                <li>Chat</li>
                <li>Work</li>
                <li>Link</li>
                <li>Tech</li>
                <li>Cloud</li>
            </ul>
        </div>
        <div className='flex items-center gap-3'>
            <AiOutlineSearch size={24} className=''/>
            <AiFillLock size={24}/>
            <div className='max-md:block hidden'>
                <BiMenuAltLeft size={24} onClick={handleToggle}/>
            </div>
        </div>
    </header>
  )
}

export default Header