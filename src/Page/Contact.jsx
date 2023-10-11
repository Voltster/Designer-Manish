/* eslint-disable react/no-unescaped-entities */

import { useForm, ValidationError } from '@formspree/react';
import { motion as m } from "framer-motion"

const Contact = () => {

    const [state, handleSubmit] = useForm("xleyokpw");
    // if (state.succeeded) {
    //     return 
    // }
    return (
        <section className='relative  flex flex-col max-w-maxContent items-center text-white justify-center  py-8' id='contact'>
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ y: [-50, 0], opacity: 1 }}
                transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
                className='flex flex-col justify-center items-center gap-x-3 mt-16'>
                <h3 className='subHeading text-4xl text-center'>Contact</h3>
                <div className='bg-gradient-to-r from-[#29144b66] via-gray-100 to-[#29144b6e] w-[7rem] h-[1px] mt-2'></div>
            </m.div>
            <div className="relative flex  items-top justify-center sm:items-center sm:pt-0 mt-12 rounded-lg py-8 glassmorphism">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden ">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <m.div
                                initial={{ x: 0, opacity: 0 }}
                                whileInView={{ x: [-250, 0], opacity: 1 }}
                                transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
                                className="p-6 mr-2 bg-inherit  sm:rounded-lg">
                                <h1 className="text-4xl sm:text-5xl text-gray-100 font-extrabold tracking-tight">
                                    Let's Collaborate
                                </h1>
                                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-300  mt-2">
                                    Ready to start a creative conversation? Fill out the form, and let's begin shaping your design vision.
                                </p>

                                <div className="flex items-center mt-8 text-gray-400 ">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Nihal Vihar, West Delhi, India
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +91 7668587752
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-400">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        <a href="mailto:graphic.d.manish@gmail.com">graphic.d.manish@gmail.com</a>
                                    </div>
                                </div>
                            </m.div>

                            <m.form
                                onSubmit={handleSubmit}

                                initial={{ x: 0, opacity: 0 }}
                                whileInView={{ x: [250, 0], opacity: 1 }}
                                transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
                                className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">Full Name</label>
                                    <input 
                                    type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-inherit border border-gray-500 text-gray-100 font-medium focus:border-indigo-500 focus:outline-none" required/>
                                    <ValidationError 
                                        prefix="Name" 
                                        field="name"
                                        errors={state.errors}
                                     />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-inherit border border-gray-500 text-gray-100 font-medium focus:border-indigo-500 focus:outline-none"  required/>
                                    <ValidationError 
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="message" className="hidden">Message</label>
                                    <textarea type="text" name="message" id="message" placeholder="Enter Your Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-inherit border border-gray-500 text-gray-100 font-medium focus:border-indigo-500 focus:outline-none" required/>
                                    <ValidationError 
                                        prefix="Message" 
                                        field="message"
                                        errors={state.errors}
                                    />
                                </div>

                                <button type="submit" disabled={state.submitting} className="md:w-32 bg-indigo-700 hover:bg-indigo-600 text-gray-100 font-bold py-3 px-6 rounded-lg mt-3  transition ease-in-out duration-300 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
                                    Submit
                                </button>
                            </m.form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact
