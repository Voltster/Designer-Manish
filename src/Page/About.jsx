/* eslint-disable react/no-unescaped-entities */
import Btn from '../component/Btn';
import manish from "../assets/Image/manish.jpg";
import resumePdf from "../assets/Manish.pdf";
import { motion as m } from "framer-motion";

const About = () => {
  const downloadResume = () => {
    // Function to trigger the resume download
    window.open(resumePdf);
  };

  return (
    <section className='w-full bg-inherit z-0 mt-4 overflow-hidden' id='about'>
      <div className='relative mx-auto flex w-11/12 h-[100%] max-w-maxContent flex-col items-center justify-center gap-8  mt-10'>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className='flex flex-col justify-center items-center gap-x-3  mt-12'>
          <h3 className='subHeading text-4xl text-center'>About</h3>
          <div className='bg-gradient-to-r from-[#29144b66] via-gray-100 to-[#29144b6e] w-[6rem] h-[1px] mt-1'></div>
        </m.div>
        <div className="flex w-full flex-col md:flex-row gap-x-20 gap-y-4 items-center justify-center ">
          <m.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            className="  relative">
            <img src={manish} className='relative rounded-sm bg-indigo-400 p-[1px] z-10' width={325} alt='author pic' loading='lazy' />
            <div className='border-2 border-indigo-600 w-[100%] h-[97%] absolute top-[20px] left-[10px] z-0'></div>
          </m.div>
          <m.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
            className="w-full md:w-[42%] flex gap-2 lg:gap-4 flex-col glassmorphism lg:py-3 px-6">
            <p className='paragraph font-semibold'>Who am I?</p>
            <h2 className='subHeading'>I'm Manish, a Graphic Designer.</h2>
            <p className='paragraph'>
              Hey there, I'm Manish — graphic designer dedicated to creating visual excellence. I'm also your go-to guy for branding and graphic design needs. Let's turn your ideas into digital masterpieces!
            </p>
            <p className='paragraph font-semibold lg:mt-4'>Contact</p>
            <p className='paragraph'>
              If you'd like to say hi or get started with your project and need my help, feel free to contact me at <strong><a href="mailto:"></a></strong>.
            </p>
            <div className='flex flex-row gap-4 mt-4'>
              <Btn text={"HIRE ME"}
                link={`#contact`}
              ></Btn>
              <Btn outline={true} text={"DOWNLOAD RESUME"} onclick={downloadResume}></Btn>
            </div>
          </m.div>
        </div>

      </div>
    </section>
  );
}

export default About;
