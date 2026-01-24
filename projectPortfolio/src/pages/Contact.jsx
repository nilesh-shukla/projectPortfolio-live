import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ContactPopUp from '../components/ContactPopUp'
import { FaPhone } from 'react-icons/fa6'

import contactImg from '../assets/contactImg.webp'

function Contact() {

  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData(prev => ({
      ...prev,
      [name]: value
    }));

    if(errors[name]){
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {};
    if(!inputData.name.trim()){
      newErrors.name = 'Required Name';
    }
    if(!isValidEmail(inputData.email.trim())){
      newErrors.email = 'Invalid Email'
    }
    if(inputData.message.trim().length < 5){
      newErrors.message = 'Enter atleast 5 characters';
    }

    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0){
      
      setShowPopUp(true);

      setInputData({
        name: '',
        email: '',
        message: ''
      })
    }
  };

  const closeSuccessPopUp = () => {
    setShowPopUp(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.1 }}
      className='xl:p-45 lg:px-7 px-4 py-40 font-inter'
    >
      <h1 className='mb-10 xl:text-[2.6em] text-4xl tracking-tighter leading-10' style={{fontWeight: 500}}><span className='text-gray-500'>Ready to create something amazing?</span> Let's talk!</h1>

      <div className='flex lg:flex-row flex-col gap-3 text-white'>
        <div className='bg-black p-5 flex flex-col rounded-2xl tracking-tighter xl:w-[75%] w-full shadow-box z-10'>

          <div className='mb-3'> 
            <label htmlFor="name" className='text-white'>Name</label>
            <input 
              type="text" 
              id='name' 
              name='name' 
              value={inputData.name} 
              onChange={handleInputChange} 
              placeholder='Nilesh Shukla' 
              className={`w-full bg-[#2a2a2a] p-3 border-2 mt-2 mb-1 rounded-xl placeholder-[#959595] focus:outline-none focus:ring-0 ${errors.name ? 'border-red-500' : 'border-transparent focus:border-white'}`}
            />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1 flex items-center'>
                  {/* Drawing the icon */}
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  {errors.name}
                </p>
              )}
          </div>
          <div className='mb-3'>
            <label htmlFor="email" className='text-white'>Email</label>
            <input 
              type="email" 
              id='email' 
              name='email' 
              value={inputData.email} 
              onChange={handleInputChange} placeholder='nilesh1234@gmail.com' 
              className={`w-full mt-2 mb-1 border-2 bg-[#2a2a2a] p-3 rounded-xl placeholder-[#959595] focus:outline-none focus:ring-0 ${errors.email ? 'border-red-500' : 'border-transparent focus:border-white'}`}
              />
              {errors.email && (
                <p className='text-red-500 text-sm flex items-center'>
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                {errors.email}
              </p>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="message" className='text-white'>Your  Message</label>
            <textarea 
              id='message'
              name="message" 
              value={inputData.message}
              onChange={handleInputChange}
              placeholder='Enter your message' 
              className={`resize-none bg-[#2a2a2a] p-3 h-32 border-2 mb-1 mt-2 rounded-xl placeholder-[#959595] focus:outline-none focus:ring-0 no-scrollbar ${errors.message ? 'border-red-500' : 'border-transparent focus:border-white'}`}
              />
              {errors.message && (
                <p className='text-red-500 text-sm flex items-center'>
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                {errors.message}
              </p>
              )}
          </div>
          <button onClick={handleSubmit} className={"bg-white text-md mt-4 tracking-tight py-3 hover:bg-gray-300 hover:cursor-pointer duration-300 rounded-2xl text-black"} >Submit</button>
        </div>
        <ContactPopUp isOpen={showPopUp} onClose={closeSuccessPopUp} />

        <div className='rounded-2xl flex flex-col gap-2 justify-between bg-[#F7F7F7] xl:w-[35%] w-full p-5'>
          <div>
            <img src={contactImg} alt="ghibli" className='rounded-2xl w-[25%] mb-10' />
            <p className='text-xl  tracking-tighter text-black' style={{fontWeight: 500}}>Prefer a quick chat?<span className='text-gray-500'> Let's hop on a call and explore the best way to bring your ideas to life</span></p>
            <div className='bg-white rounded-2xl px-2 py-1 whitespace-nowrap mb-4 ml-auto' style={{width: 'min-content', height: 'min-content'}}>
              <h1 className='text-gray-400 text-center'>approximately 15 minutes</h1>
            </div>
          </div>
          <Link to="/bookacall" onClick={() => setIsOpen(false)}>
            <Button className={"bg-[#F7F7F7] w-full text-md tracking-tight py-3 rounded-2xl text-black border-gray-300 border-1 hover:bg-gray-200 hover:cursor-pointer duration-300"}>
              <FaPhone size={18} className="mx-auto" />
            </Button>
          </Link>
        </div>

      </div>
    </motion.div>
  )
}

export default Contact