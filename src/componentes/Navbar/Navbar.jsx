import React from 'react'
import logo1 from "../../assets/go-logo-1.svg"
import { MdMenuOpen } from "react-icons/md"
import { RiMenuUnfoldLine } from "react-icons/ri"
import DarkMode from "./DarkMode"
const NavLinks = [
    {
        id:1,
        name: "Home",
        link: "#"
    },
    {
        id:2,
        name: "Products",
        link: "#about"
    },
    {
        id:3,
        name: "Pricing",
        link: "contact"
    },
    {
        id:4,
        name: "Contact",
        link: "#contact"
    }
];


function Navbar() {
    const [showMenu, setshowMenu] = React.useState(false)
    const toggleMenu = () =>{
        setshowMenu(!showMenu)
    }
  return (
    <div style={{color: 'var(--text-color)'}} className='relative z-[9999] duration-300'>
        <div className='mx-auto px-4 sm:px-12 py-2 md:py-0'>
            <div className='flex justify-between items-center'>
                {/* logo section */}
                <div className='flex items-center gap-3'>
                    <img src={logo1} alt="logo vite" className='h-13 cursor-pointer'/>
                    <p className='text-3xl'>
                        VR <span className='font-bold'>Wordl</span>
                    </p>
                </div>
                {/* destopk menu section */}
                <nav className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        {
                            NavLinks.map(({id, name, link}) =>{
                                return(
                                    <li key={id}>
                                        <a href={link}
                                        style={{
                                            "--hover-text": "var(--primary)",
                                            "--hover-border": "var(--secondary)"
                                        }} className='text-xl font-semibold py-2 transition-colors duration-500 hover:text-[var(--hover-text)]
                                                      hover:border-b-2 hover:border-[var(--hover-border)]'>{name}</a>
                                    </li>
                                )
                            })}
                            {/* Dark mode feature */}
                            <DarkMode/>
                    </ul>
                </nav>
                {/* Mvile view navbar */}
                <div className='md:hidden block'>
                    <div className='flex items-center gap-4'>
                        <DarkMode/>
                        {
                            showMenu ?  <MdMenuOpen onClick={toggleMenu} className='cursor-pointer' size={30}/> : <RiMenuUnfoldLine onClick={toggleMenu} size={30} className='cursor-pointer'/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar
