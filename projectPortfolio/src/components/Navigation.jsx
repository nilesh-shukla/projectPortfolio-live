import  { useState } from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FaXTwitter, FaEnvelope, FaLinkedinIn, FaRocket } from 'react-icons/fa6'
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header className='fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-5 py-4 xl:px-8 xl:py-2 bg-white'>
        <Link to="/" className="hover:text-gray-600 duration-200">
          <h1 className="text-xl tracking-tighter font-isans font-boldness">Nilesh Shukla</h1>
        </Link>

        <nav className='absolute left-1/2 transform -translate-x-1/2 hidden xl:block'>
          <ul className="flex gap-7 text-sm items-center tracking text-black font-isans font-boldness">
            <li><Link className="inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150" to="/Work">Work</Link></li>
            
            <li><Link className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' to="/About">About</Link></li>

            <li><Link className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' to="/Contact">Contact</Link></li>
          </ul>
        </nav>
          <Link className="hidden xl:block" to="/bookacall">
            <Button className="booking flex items-center gap-2 tracking-tight bg-black rounded-2xl text-white font-isans px-5 py-3 shadow-box cursor-pointer hover:bg-violet-600 duration-300">
              <FaRocket size={16} />
              <span>Start Project</span>
            </Button>
          </Link>

        {/* MENU */}
        <div className="xl:hidden">
          <FontAwesomeIcon 
          icon={isOpen ? faTimes : faEllipsisV}
          className="text-xl text-gray-500 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
         />
        </div>
      </header>

      {/* MENU FUNCTIONALITY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[60px] left-0 w-full bg-white xl:hidden z-[9998] overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul 
              className="flex flex-col items-start px-5 gap-6 py-6 text-black font-isans"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.4 }
                }
              }}
            >
              <li><Link onClick={() => setIsOpen(false)} to="/Work">Work</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/About">About</Link></li>
              <li><Link onClick={() => setIsOpen(false)} to="/Contact">Contact</Link></li>
              <li className="flex text-gray-500 gap-4">
                <button className="border p-3 rounded-2xl border-gray-400">
                  <a href="https://x.com/NileshS32355762">
                    <FaXTwitter size={18}/>
                  </a>
                </button>
                <button className="border p-3 rounded-2xl border-gray-400">
                  <a href="http://outlook.office.com/mail/">
                    <FaEnvelope size={18}/>
                  </a>
                </button>
                <button className="border p-3 rounded-2xl border-gray-400">
                  <a href="https://www.linkedin.com/in/nilesh-shukla21/">
                    <FaLinkedinIn size={18}/>
                  </a>
                </button>
              </li>
              <li className="w-full">
                <Link to="/bookacall" onClick={() => setIsOpen(false)}>
                  <Button className={"w-full flex items-center justify-center gap-2 tracking-tight bg-black rounded-2xl text-white font-isans px-5 py-3 shadow-box cursor-pointer hover:bg-violet-600 duration-300"}>
                    <FaRocket size={16} />
                    <span>Start Project</span>
                  </Button>
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation