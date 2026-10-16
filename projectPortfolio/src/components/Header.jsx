import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useEffect } from 'react';

import MySphere from './MySphere';
import Button from './Button';
import { CONTACT_MAILTO } from '../constants/contact';

function Header() {

  const containerRef = useRef(null);
  const sphereRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() =>{
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if(containerRef.current){
        containerRef.current.style.transform = `translateY(-${currentScrollY*0.2}px)`;
      }
      if(sphereRef.current){
        sphereRef.current.style.transform = `translateY(${currentScrollY*0.1}px)`;
      }
    };

    let ticking = false;
    const throttledScroll = () => {
      if(!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', throttledScroll, {passive : true});
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <div className='m-0 relative h-screen overflow-hidden' >
      <div
        ref={containerRef}
        className='relative w-full h-full min-h-screen'
        style={{
          willChange : 'transform'
        }} 
      >

        {/* BACKGROUND SPHERE */}
        <div
          ref={sphereRef} 
          className='absolute xl:top-auto md:top-1/7 top-1/2 left-1/2 transform -translate-x-1/2 w-full h-full'
          style={{
            willChange : 'transform'
          }}
        >
          <MySphere />
        </div>
        
        {/* DESCRIPTION SECTION */}
        <div className='absolute xl:bottom-0 xl:top-auto md:top-[10vh] top-[15vh] left-0 right-0 px-4 xl:px-14 pb-8' >
          <div className='flex flex-col xl:flex-row justify-between'>
            <div className='flex-1 xl:basis-1/3 flex-shrink-0 '>
              <div className='w-fit font-inter text-gray-500 flex items-center gap-[2px] shadow rounded-3xl px-2 py-1 mb-4 bg-white/80 backdrop-blur-sm'>
                <FontAwesomeIcon icon={faCircle} className="text-green-600 text-[10px] mr-2" />
                <span className='text-sm'> 2 projects left in April </span>
              </div>
              <p className='text-3xl xl:text-5xl font-inter tracking-tight text-gray-900 xl:leading-12 leading-9'>
                 Solving problems using <br className='hidden xl:block' /> intelligent algorithms, providing <br className='hidden xl:block' /> engaging web experiences
              </p>
            </div>

            <div className='flex flex-col gap-6 xl:pl-2 pb-8 xl:basis-1/3 flex-shrink-0 xl:-mt-6'>

              <p className='text-gray-800 tracking-tight leading-5'>Driven by curiosity in ML and front-end craft, I create interfaces that feel natural and purposeful. With a focus on collaboration, I help shape data-centric ideas into interactive, human-friendly solutions</p>
                <a href={CONTACT_MAILTO}>
                <Button buttonName="Email Me" className="hover:bg-violet-600 duration-300 cursor-pointer tracking-tight font-inter shadow-box rounded-2xl bg-black text-white px-5 py-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;