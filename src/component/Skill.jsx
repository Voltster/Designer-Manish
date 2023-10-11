/* eslint-disable react/no-unescaped-entities */
import * as Icon1 from "react-icons/si"
import * as Icon2 from "react-icons/bi"
import * as Icon3 from "react-icons/fa"
import * as Icon4 from "react-icons/si"
import * as Icon5 from "react-icons/io5"
import * as Icon6 from "react-icons/tb"
import * as Icon7 from "react-icons/fa"
import * as Icon8 from "react-icons/io5"
import * as Icon9 from "react-icons/ai"
import * as Icon10 from "react-icons/bs"
import * as Icon11 from "react-icons/bi"
import * as Icon12 from "react-icons/bi"

import { motion as m } from "framer-motion";
import { icon } from "./anime"


const skills = [
  {
    icon: "TbAirBalloon",
    heading: "Corel Draw",
  },
  {
    icon: "SiAdobeillustrator",
    heading: "Illustrator",
  },
  {
    icon: "SiAdobephotoshop",
    heading: "Photoshop",
  },
  {
    icon: "SiAdobelightroom",
    heading: "Lightroom",
  },
  {
    icon: "SiAdobepremierepro",
    heading: "Premier Pro",
  },
  {
    icon: "SiAdobeindesign",
    heading: "Indesign",
  },
  {
    icon: "SiCanva",
    heading: "Canva",
  },
  {
    icon: "BiLogoFigma",
    heading: "Figma",
  },

]

const Skill = () => {


  return (
    <section className='w-full md:h-screen z-0  snap-start mt-14 pt-14  lg:mt-16' id='skill'>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        className='w-full sm:w-8/12 mx-auto flex flex-col justify-center items-center gap-3 mt-12 '>
        <p className='hidden sm:visible paragraph text-gray-400 uppercase glassmorphism'>A problem is a chance for you to do your best.</p>
        <h3 className='subHeading text-4xl text-center'>Skills & Experience</h3>
        <div className='bg-gradient-to-r from-[#29144b66] via-gray-100 to-[#29144b6e] w-[18rem] h-[1px] text-white'></div>
        <p className='paragraph text-center glassmorphism w-[90%]'>I'm a Graphic Designer with a passion for visual storytelling. Crafting compelling designs that communicate messages effectively and leave a lasting impression. Proficient in Illustrator, Coral, and Canva, I specialize in Photoshop and Coral for building engaging user experiences. </p>
        <p className='paragraph glassmorphism'>Visit my <a href="https://www.linkedin.com/in/manish-kumar-a7b900250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-indigo-300  hover:underline ' target='blank'>Linkedin</a> for more details.</p>
      </m.div>
      <div

        className=' w-[70%] mx-auto grid grid-cols-3 md:grid-cols-4 gap-3 my-16'>
        {
          skills.map((item, index) => {
            let Icon = Icon1[item.icon] || Icon2[item.icon] || Icon3[item.icon] || Icon4[item.icon] || Icon5[item.icon] || Icon6[item.icon] || Icon7[item.icon] || Icon8[item.icon] || Icon9[item.icon] || Icon10[item.icon] || Icon11[item.icon] || Icon12[item.icon]
            return (
              <m.div
                variants={icon}
                whileInView="whileInView"
                initial="initial"
                exit={"exit"}
                custom={index}
                key={index}
                className='text-gray-100 bg-[#020A0C] bg-opacity-30  backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[100px] lg:h-[150px] flex flex-col justify-center items-center rounded-md hover:text-gray-50 duration-200 group transition-transform  hover:scale-105 p-3 sm:p-2'
              >
                <Icon size={75} className="group-hover:text-gray-100] lg:py-1" />
                <p className='paragraph mt-1'>{item.heading}</p>
              </m.div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Skill
