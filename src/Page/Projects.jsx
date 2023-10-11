import { useState } from 'react'
import Card from '../component/Card'
import projectData from "../utils/data"
import ProjectModal from '../component/ProjectModal'
import { motion as m } from 'framer-motion'


const Projects = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Display Filtered Projects
  const filterProjects = () => {
    if (selectedCategory === "All") {
      return projectData.slice(0, 6);
    }
    if (selectedCategory === "Banners") {
      return projectData.filter((project) => project.category === selectedCategory);
    }
    if (selectedCategory === "illustration") {
      return projectData.filter((project) => project.category === selectedCategory);
    }
    if (selectedCategory === "Photoshop") {
      return projectData.filter((project) => project.category === selectedCategory);
    }
    else {
      return projectData.filter((project) => project.category === selectedCategory);
    }
  };


  const [projectModal, setProjectModal] = useState(null)

  const openProjectModal = (item) => {
    setProjectModal({
      item: item,
      goBack: () => closeProjectModal()
    });
    console.log("YOur click on card")
  };

  const closeProjectModal = () => {
    setProjectModal(null);
  };

  return (
    <section className='w-full bg-inherit  z-10' id='projects'>
      <div className='relative mx-auto flex flex-col w-11/12 h-auto mb-12 max-w-maxContent gap-8  mt-10  text-white justify-center items-center'>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
          className='flex flex-col justify-center items-center gap-x-3 mt-14'>
          <h3 className='subHeading text-4xl  text-center'>Projects</h3>
          <div className='bg-gradient-to-r from-[#29144b66] via-gray-100 to-[#29144b6e] w-[10rem] h-[1px] mt-3'></div>
        </m.div>
        {/*  filter projects when click */}
        <div className="hidden sm:flex justify-center space-x-4 mt-4 border-[1px] border-indigo-800 py-2 px-4 rounded-full font-semibold ">
          <button
            className={`${selectedCategory === "All" ? "bg-indigo-800 font-bold transition-all duration-300" : "bg-transparent"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          <button
            className={`${selectedCategory === "Banners" ? "bg-indigo-800 transition-all duration-300" : "bg-transparent"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            onClick={() => setSelectedCategory("Banners")}
          >
            Banners
          </button>
          <button
            className={`${selectedCategory === "illustration" ? "bg-indigo-800 transition-all duration-300" : "bg-transparent"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            onClick={() => setSelectedCategory("illustration")}
          >
            Illustration
          </button>
          <button
            className={`${selectedCategory === "Photoshop" ? "bg-indigo-800 transition-all duration-300" : "bg-transparent"
              } px-4 py-2 rounded-lg transition-all duration-300`}
            onClick={() => setSelectedCategory("Photoshop")}
          >
            Photoshop
          </button>
        </div>
        <div className='w-[100%] grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {/* Project here */}
          {
            filterProjects().map((item, index) => (
              <Card
                key={index}
                alt={item.alt}
                image={item.image}
                heading={item.heading}
                paragraph={item.description}
                tools={item.tools}
                index={index}

                onClick={() => openProjectModal(item)}
              />
            ))
          }

        </div>
      </div>
      {
        projectModal && <ProjectModal modalData={projectModal} />
      }
    </section>
  )
}

export default Projects
