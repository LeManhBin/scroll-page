'use client'
import React from 'react'

const Banners = ({banner}:any) => {

  return (
    <div className='banner-container h-[100vh] w-[80%] mx-auto flex items-center flex-wrap-reverse gap-10 max-md:pt-6'>
        <div className="left flex flex-col items-center gap-3 md:flex-1 md:items-start md:gap-5">
            <h1 className='title text-4xl font-bold'>{banner.title}</h1>
            <p className='content text-center md:text-left'>
                {banner.content}
            </p>
            <button className='border-2 px-3 py-1 rounded-[30px] border-rose-500 text-xl font-bold hover:bg-rose-500 hover:text-white ease-in-out duration-300'>{banner.button}</button>
        </div>
        <div className="right md:flex-1 relative flex flex-col items-center">
            <img src={banner.image} alt=""/>
            <div className='shadow w-[50%] h-[20%] blur-xl bg-slate-900 absolute bottom-[-30%] left-[50%] translate-x-[-50%] rounded-[50%]'>
            </div>
        </div>
    </div>
  )
}

export default Banners