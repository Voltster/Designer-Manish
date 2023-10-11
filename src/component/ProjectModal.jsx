/* eslint-disable react/prop-types */
import {IoChevronBackCircleOutline}  from "react-icons/io5"
import {BiLinkExternal}  from "react-icons/bi"
import { AnimatePresence, motion } from "framer-motion";
import useOnClickOutside from '../hook/useOnClickOutside';
import { useRef } from "react";

const ProjectModal = ({modalData}) => {
  const {item , goBack} = modalData

  const modalRef = useRef(null)

  useOnClickOutside(modalRef, ()=>{
    goBack()
  })

  const modalVariants = {
    
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const toolsVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
  
      opacity: 1,
      transition: {
        delay: ({ index }) => index * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="fixed inset-0  !mt-0  bg-black bg-opacity-30 backdrop-blur-sm shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
    <AnimatePresence mode='wait'>
   
    <motion.div variants={modalVariants}
      animate="visible"
      initial="hidden"
      exit="hidden" 
      className="fixed ml-auto right-0 inset-0 !mt-0 overflow-auto sm:w-[444px]  md:w-[544px]" ref={modalRef}>
      <aside className='relative' >
        <div className="absolute top-20 -mt-12 right-0 w-full    bg-[#020A13] p-8 pb-16 ">
            <div 
              className='relative rounded-sm p-1  flex justify-between mt-12 mb-2'>
              <IoChevronBackCircleOutline size={25} onClick={goBack} 
              className='cursor-pointer text-[#463d8e]' />
              <span onClick={goBack} className='font-bold cursor-pointer text-[#463d8e]'>Back to project</span>
            </div>
          <div className=' text-black bg-[#020A13] w-full p-1 flex flex-col border-t-[1px]'>
            <h2 className='text-xl font-bold text-[#e1e1e1] mt-4 mb-2'>{item.heading}</h2>
            <p className='text-[#C6C6C6] mb-6'>{item?.description}</p>
            <motion.img 
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              initial={{
                y: 20,
                opacity: 0,
              }} 
              src={item.image} alt={item.alt} className='w-[full] h-[300px] object-cover rounded-md' loading='lazy'/>
            <h4 className='text-[#E1E1E1] text-[1.124rem] font-medium mt-8 mb-3'>Graphic Tools</h4>
            <p>
              <ul className="flex items-center space-x-2">
              {
                item.tools.map((tool, i) => (
                  <motion.li variants={toolsVariants}
                  animate="visible"
                  initial="hidden"
                   key={i} className='text-[#e1e1e1] text-xs font-bold bg-[#13283e] rounded-md py-[6px]  px-3 '
                  >{tool}</motion.li>
                ))
              }
              </ul>
            </p>
            <h4 className='text-[#E1E1E1] text-[1.124rem] font-medium mt-8 mb-3'>Behance</h4>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer"  className='text-[#3b5269] font-medium'>{item.demoLink}</a>
           
          </div>
            
        </div>
        
      </aside>
      <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className=' fixed bottom-0 right-0 w-full sm:max-w-[444px] sm:w-[444px] md:max-w-[544px] md:w-[544px] p-4 bg-[#4F3888] text-gray-50 font-semibold flex gap-1 justify-center items-center cursor-pointer hover:underline z-[200] overflow-auto'>Open Project
    <BiLinkExternal size={25}/></a>
    </motion.div>

   
    </AnimatePresence>
    </div>
  )
}

export default ProjectModal
