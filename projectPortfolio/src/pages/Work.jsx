import { motion } from "framer-motion";

import Cards from "../components/Cards";
import imgProject1 from "../assets/AI.jpg";
import imgProject2 from "../assets/india_tour.jpg";
import imgProject3 from "../assets/leave_form.jpg";
import imgProject4 from "../assets/CarbonWisePoster.jpg"
import imgProject5 from "../assets/cardioVision-image.png";
import imgProject6 from "../assets/Preptera.png"
import imgProject7 from "../assets/VanMitra.png"


function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      viewport={{ amount: 0.1 }}
      id="Projects"
      className="xl:p-45 p-5 xl:mt-auto mt-[8vh]"
    >
          <h1 className="xl:text-[2.6em] text-3xl tracking-tighter font-isans xl:leading-12 leading-tight xl:mb-8 mb-4" style={{fontWeight: 500}}><span className="text-gray-500">Building intelligent interfaces</span> that blend <br className="xl:block hidden" /> data-driven insights with sleek user experiences.</h1>

          <div className='grid auto-rows-auto grid-cols-1 xl:grid-cols-2 gap-2 py-10'>

            <Cards imgName={imgProject1} projectName="BugsSmith" textColor={"text-white"} websiteLink={"https://bugs-smith.vercel.app/"}/>
                
            <Cards imgName={imgProject4} projectName="CarbonWise" textColor={"text-white"}/>            
                                  
            <Cards imgName={imgProject2} projectName="Aasan Yatra" textColor={"text-white"}/>
                
            <Cards imgName={imgProject3} projectName="LeavePoint"/>

            <Cards imgName={imgProject5}  projectName="CardioVision" />

            <Cards imgName={imgProject6} projectName="Preptera" textColor={""}/>

            <div className="xl:col-span-2">
              <Cards imgName={imgProject7}  projectName="VanMitra" className={"xl:w-1/2 w-full mx-auto"} websiteLink={"https://fra-atlas-1-h1q6.onrender.com/"} />
            </div>

          </div>

    </motion.div>
  )
}

export default Work