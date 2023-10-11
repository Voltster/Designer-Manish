import { useState } from 'react'
import Btn from './Btn'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Squash as Hamburger } from 'hamburger-react'
import logo from "../assets/Logo/logo.svg"
import { AnimatePresence, motion as m } from "framer-motion"
import { menuSlide, slide } from './anime'


const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Service', href: '#service' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <m.nav
            initial={{ y: -25 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className=' w-full px-6 z-50 fixed inset-x-0 top-0 flex justify-center items-center navbar  p-4'>
            <div className=' relative w-full md:w-[880px]  rounded-md flex md:justify-around items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={logo} alt="Logo" width={40} className='cursor-pointer rounded-full' />
                    <p className='text-lg text-[#3AB2E0] font-extrabold '>Manish Kumar</p>
                </div>
                {/* Medium screen */}
                <div className='hidden md:flex  md:gap-x-6 items-center ml-6 flex-2 bg-inherit'>
                    {/* Nav-link */}
                    {
                        navigation.map((navLink, index) => (
                            <a
                                href={navLink.href}
                                key={index}
                                className="text-sm font-semibold leading-6 text-gray-300  cursor-pointer duration-200 transition-all ease-in-out hover:text-indigo-500">{navLink.name}</a>
                        ))
                    }
                    {/* Ghost btn */}
                    <Btn
                        outline={true}
                        customClasses={"ml-10"}
                        text={"Let Talk "}
                        link={"#contact"}
                    ><AiOutlineArrowRight /></Btn>
                </div>

                {/*Small-screen Navlinks */}
                <div className={`block md:hidden ml-auto cursor-pointer h-[43px] text-gray-200 ${isActive && ("text-gray-50")}`} >
                    <Hamburger
                        toggled={isActive} toggle={setIsActive}
                    />
                </div>
                <AnimatePresence mode='wait'>
                    {/* <Curve> */}
                    {
                        isActive && (
                            <m.div variants={menuSlide} animate="enter" exit="exit" initial="initial"
                                className='md:hidden p-4 w-[80%] bg-gray-900 grid-Bg rounded-lg fixed top-[4.4rem] -right-24 sm:-right-40 h-screen  flex flex-col items-center  gap-12 pt-16'>
                                {
                                    navigation.map((navLink, index) => (
                                        <m.a variants={slide} animate="enter" exit="exit" initial="initial" custom={index}
                                            href={navLink.href}
                                            key={index}
                                            className="text-lg font-semibold leading-6 text-gray-200 hover:text-indigo-500 cursor-pointer duration-200 transition-all ease-in-out "

                                        >{navLink.name}</m.a>
                                    ))
                                }
                                <Btn outline={true}
                                    customClasses={"ml-0"}
                                    text={"Let Talk "}
                                    link={`#contact`}
                                ></Btn>
                            </m.div>
                        )
                    }
                    {/* </Curve> */}
                </AnimatePresence>
            </div>
        </m.nav>
    )
}

export default Navbar
