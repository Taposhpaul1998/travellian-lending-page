import React from 'react'
import { NavLink } from 'react-router'

function MenuBer() {
    return (
        <nav className='flex justify-start items-center gap-8 text-[20px] font-medium text-white'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"#Explore"}>Explore</NavLink>
            <NavLink to={"#Travel"}>Travel</NavLink>
            <NavLink to={"#Blog"}>Blog</NavLink>
            <NavLink to={"#Pricing"}>Pricing</NavLink>
        </nav>
    )
}

export default MenuBer