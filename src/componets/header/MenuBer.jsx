import React from 'react'
import { NavLink } from 'react-router'

function MenuBer() {
    return (
        <nav className='flex justify-start items-center gap-8 '>
            <NavLink
                to={"/"}
                className={`text-[20px] font-rubik font-medium text-white relative after:content-[''] after:w-full after:h-[2px] after:border-none after:bg-[#FF7757] after:absolute after:bottom-0 after:left-0  after:rounded-full`}
            >Home</NavLink>
            <NavLink
                to={"#Explore"}
                className={`font-rubik font-light text-white text-[20px] relative after:content-[''] after:w-0 hover:after:w-full after:h-[2px] after:border-none after:bg-[#FF7757] after:absolute after:bottom-0 after:left-0  after:rounded-full after:duration-300`}
            >Explore</NavLink>
            <NavLink
                to={"#Travel"}
                className={`font-rubik font-light text-white text-[20px] relative after:content-[''] after:w-0 hover:after:w-full  after:h-[2px] after:border-none after:bg-[#FF7757] after:absolute after:bottom-0 after:left-0  after:rounded-full after:duration-300`}
            >Travel</NavLink>
            <NavLink
                to={"#Blog"}
                className={`font-rubik font-light text-white text-[20px] relative after:content-[''] after:w-0 hover:after:w-full  after:h-[2px] after:border-none after:bg-[#FF7757] after:absolute after:bottom-0 after:left-0  after:rounded-full after:duration-300`}
            >Blog</NavLink>
            <NavLink
                to={"#Pricing"}
                className={`font-rubik font-light text-white text-[20px] relative after:content-[''] after:w-0 hover:after:w-full after:h-[2px] after:border-none after:bg-[#FF7757] after:absolute after:bottom-0 after:left-0  after:rounded-full after:duration-300`}
            >Pricing</NavLink>
        </nav>
    )
}

export default MenuBer