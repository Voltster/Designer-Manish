import * as Icon1 from "react-icons/ai"
import * as Icon2 from "react-icons/bs"
import * as Icon3 from "react-icons/ai"
import * as Icon4 from "react-icons/fa"
import { motion as m } from "framer-motion"

const socialLinks = [
  {
    icon: "AiFillLinkedin",
    heading: "Linkedin",
    link: "https://www.linkedin.com/in/manish-kumar-a7b900250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

  },
  // {
  //   icon: "BsGithub",
  //   heading: "Github",
  //   link: "https://github.com/Voltster",

  // },
  {
    icon: "AiFillInstagram",
    heading: "Instagram",
    link: "https://instagram.com/manish_143_x?igshid=MzRlODBiNWFlZA==",
  },
  {
    icon: "FaBehanceSquare",
    heading: "Behance",
    link: "https://www.behance.net/manishsagar3",
  },
]

const Footer = () => {

  // Get year
  // const today = 
  const year = new Date().getFullYear();

  return (
    <footer className=' w-full z-0  backdrop-blur-sm opacity-90  mx-auto flex flex-col justify-center items-center py-2 '>
      <div className='w-full flex flex-col gap-y-4 sm:flex-row justify-center items-center px-8 mt-4'>
        {/* Logo */}
        <m.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className='flex item-center  sm:w-[50%]'>
          {/* <div className='w-8 h-8 rounded-full bg-primary'></div> */}
          <p className='text-lg  font-bold text-gray-300'>Manish Kumar</p>
        </m.div>
        {/* Social Icons */}
        <m.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className='  sm:w-[50%] flex justify-end gap-2'>
          {
            socialLinks.map((ele, i) => {
              let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon] || Icon4[ele.icon];
              return (
                <span key={i} className='text-white rounded-full border-[1px] border-gray-400 p-2 hover:bg-indigo-700 hover:border-indigo-600 cursor-pointer'>
                  <a href={`${ele.link}`} target='blank' ><Icon size={18} /></a>
                </span>
              )
            })
          }
        </m.div>
        <div>

        </div>
      </div>
      {/* Copyright */}
      <div className='flex justify-center items-center my-4 border-t-[1px] border-gray-300 w-[95%]'>
        <m.p
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [20, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className='paragraph mt-10 text-center font-medium'>© Copyright {year}, All Rights Reserved by Manish Kumar</m.p>
      </div>
    </footer>
  )
}

export default Footer
