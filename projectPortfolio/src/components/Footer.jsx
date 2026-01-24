import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import Button from './Button';
import { FaRocket } from 'react-icons/fa6'
import myImage from "../assets/myImage2.png"

function Footer() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        id="Projects"
        className="xl:px-40 xl:py-10 p-4 font-isans bg-[url('./assets/background.webp')]"
      >
        <div className="relative grid xl:grid-cols-2 grid-cols-1 gap-20">
          <img src={myImage} alt="myImage" className="opacity-80 aspect-auto bg-transparent justify-center items-center object-center rounded-3xl xl:mb-0 mb-10" />
          <div className="relative m-auto flex flex-col xl:w-full">
            <p className="xl:text-[4em] text-3xl tracking-tight leading-tight text-white xl:mb-5 mb-8"><span className="text-gray-500">Start a project,</span> and I’ll take care of the rest</p>
            <Link to="/bookacall" onClick={() => setIsOpen(false)}>
              <Button className="hover:bg-[#d0d1d3] duration-300 cursor-pointer tracking-tight font-isans shadow-box rounded-2xl bg-white text-black px-5 py-3 min-w-max flex items-center gap-2 whitespace-nowrap">
                <FaRocket size={18} />
                <span>Start Project</span>
              </Button>
            </Link>
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-6 mt-[10vh] text-white">
              <div className="flex flex-col gap-2">
                <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#6C7179] duration-300">Home</Link>
                <Link to="/work" onClick={() => setIsOpen(false)} className="hover:text-[#6C7179] duration-300">Works</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#6C7179] duration-300">About</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#6C7179] duration-300">Contact</Link>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://x.com/NileshS32355762" className="hover:text-[#6C7179] duration-300 ">{"X(Twitter)"}</a>
                <a href="#" className="hover:text-[#6C7179] duration-300">Youtube</a>
                <a href="https://www.instagram.com/nil_esh21/?next=%2F" className="hover:text-[#6C7179] duration-300">Instagram</a>
                <a href="https://github.com/nilesh-shukla" className="hover:text-[#6C7179] duration-300">Github</a>
              </div>
              <div className="flex flex-col xl:gap-2 gap-4">
                <a href="https://www.linkedin.com/in/nilesh-shukla21/" className="hover:text-[#6C7179] duration-300">LinkedIn</a>
              </div>
            </div>
            <div className=" ml-auto flex-1 mt-18 ">
               <h1 className="text-sm text-[#6C7179]">&copy;2025 All rights reserved</h1>
               <h1 className="text-lg text-[#6C7179] tracking-tight whitespace-nowrap">Created by <span className="text-xl text-white">Nilesh Shukla</span></h1>
            </div>
          </div>
         </div>
      </motion.div>
    </div>
  )
}

export default Footer