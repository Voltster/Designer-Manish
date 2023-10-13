import Spline from "@splinetool/react-spline";
import Btn from "../component/Btn";
import { AiOutlineArrowRight } from "react-icons/ai";
import * as Icon1 from "react-icons/ai";
import * as Icon2 from "react-icons/bs";
import * as Icon3 from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { motion as m } from "framer-motion";

const contactDetails = [
  {
    icon: "AiOutlineMail",
    heading: "Email",
    description: "graphic.d.manish@gmail.com",
  },
  {
    icon: "BsTelephone",
    heading: "Phone",
    description: "+91 766-858-7752",
  },
  {
    icon: "IoLocationOutline",
    heading: "Location",
    description: "West Delhi, India",
  },
];

const Hero = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <m.section
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="relative bg-black w-full h-full bg-fixed overflow-hidden"
      id="#home"
    >
      <div className="absolute top-20 w-full h-full flex justify-center">
        <Spline
          scene="https://prod.spline.design/SFkcRFmMcr3yrRWq/scene.splinecode"
          className="absolute h-[90vh] w-screen mt-0 -top-2 left-0 "
        />
        <m.div
          animate="visible"
          initial="hidden"
          exit="hidden"
          className="absolute border-0 left-[5%] top-[10%] w-full"
        >
          <p className="paragraph text-xl text-[#c2e6e7] ">Hi There!</p>

          <h1 className="heading z-20 text-[#c2e6e7]">
            I am
            <span className="text-pink-600 backdrop-blur-[2px] stroke-[2px] stroke-slate-800">
              <Typewriter
                words={[" Graphic Designer"]}
                loop={true}
                cursor
                //  cursorStyle='_'
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="z-0 paragraph text-base  text-gray-100 sm:text-xl py-2 mt-2  backdrop-blur-[1px] backdrop-brightness-[100%] rounded-lg px-1  w-[90%]  md:w-8/12  lg:w-6/12 ">
            I specialize in crafting beautifully simple designs that seamlessly
            merge form and function. My love for design fuels my work, and I
            take great pride in it
          </p>
        </m.div>
        <Btn
          variants={moveVariants}
          animate="animation"
          text={"Projects"}
          customClasses={
            "absolute left-[5%]  top-[50%]  bg-pink-600 hover:bg-pink-500 text-gray-100"
          }
          link={`#projects`}
        >
          <AiOutlineArrowRight />
        </Btn>
        {/* Contact -- */}
        <div className="absolute hidden sm:flex left-[5%] bottom-[20%]  flex-row  backdrop-blur-sm">
          {contactDetails.map((ele, i) => {
            let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
            return (
              <div
                key={i}
                // eslint-disable-next-line eqeqeq
                className={`mr-2 pr-2 border-r-[1px] ${
                  i == "2" && "border-none"
                }`}
              >
                <span className="flex flex-row items-center ">
                  <p className="paragraph text-base font-semibold ">
                    {ele.heading}
                  </p>
                  <Icon size={15} className="text-gray-200 mx-2" />
                </span>
                <p className="paragraph text-sm">{ele.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </m.section>
  );
};

export default Hero;
