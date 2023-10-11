/* eslint-disable no-dupe-keys */
import { motion as m } from "framer-motion";
import { card, } from "../component/anime";
import penTool from "../assets/Svg/vector.svg"
import gallery from "../assets/Svg/gallery.svg"
import person from "../assets/Svg/person.svg"

const cardDetails = [

  {
    category: "Visual Branding and Identity",
    description: "Transform your brand with captivating visual elements that leave a lasting impression. Our services include.",
    servicesList: [
      "Branding and Identity Design",
      "Brand Guidelines",
      "Packaging Design",
      "Business Card Design",
      "Letterhead and Stationery Design",
    ],
    icon: person,       
  },
  {
    category: "Digital Graphics and Printing",
    description: "Enhance your online presence with stunning digital graphics and visuals. Our digital design services encompass:",
    servicesList: [
      "Social Media Graphics",
      "Custom Illustrations and Artwork",
      "Online Advertisements",
      "Website Banners",
      "Digital Artwork",
    ],
    icon: penTool,
  },
  {
    category: "Photo Editing and Retouching",
    description: "Elevate your photos with our meticulous touch. Our skilled editors enhance colors, remove imperfections, and restore memories. Your images, perfected.",
    servicesList: [
      "Photo Retouching",
      "Image Manipulation",
      "Color Correction",
      "Photo Restoration",
    ],
    icon: gallery,
  }



]

const Service = () => {
  return (
    <section className='w-full bg-inherit  z-0 mt-2' id='service'>
      <div className='relative mx-auto flex flex-col w-11/12 md:h-screen max-w-maxContent gap-8  mt-10  text-white'>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className='flex flex-col justify-center items-center gap-x-3 mt-14'>
          <h3 className='subHeading text-4xl  text-center'>My Service</h3>
          <div className='bg-gradient-to-r from-[#29144b66] via-gray-100 to-[#29144b6e] w-[10rem] h-[1px] mt-3'></div>
        </m.div>
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 mx-auto px-4 py-12 justify-center items-center ">
          {
            cardDetails.map((ele, i) => {
          
              return (
                <m.div
                  variants={card}
                  initial="initial"
                  whileInView="whileInView"
                  exit={"exit"}
                  custom={i}
                  key={i}
                  className='flex flex-col gap-4 justify-start items-center sm:w-[80%]  lg:w-[25%] h-[100%]  py-11  px-6  rounded-sm bg-[#020A0C] bg-opacity-10  backdrop-blur-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-[1px] border-gray-400 hover:border-gray-200 transition-all duration-200 ease-in-out glassmorphism'>
                  
                    <img src={ele.icon} alt={ele.icon} className="w-[40%] mx-auto" />
                 
                  <h2 className='text-2xl font-medium'>{ele.category}</h2>
                  <p className='paragraph text-sm'>{ele.description}</p>
                  <ul className="w-full list-disc">
                    {
                      ele.servicesList.map((service, index) => (
                        <li key={index} className="mt-1 text-sm tracking-wide ">{service}</li>
                      ))
                    }
                  </ul>
                </m.div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Service
