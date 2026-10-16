import { motion } from "framer-motion"

import Experience from "../components/Experience";
import Stack from "../components/Stack";
import Button from "../components/Button";
import FAQ from "../components/FAQ";
import { CONTACT_MAILTO } from "../constants/contact";

import aboutImg from "../assets/AboutImg.jpg"
import Collab from "../assets/reactLogo.webp"
import JS from "../assets/JS.webp"
import Discord from "../assets/express.png"
import NodeJS from "../assets/nodeJs.webp"
import LIn from "../assets/typescript.png"
import GitHub from "../assets/github.png"
import Java from "../assets/java.jpg"
import Postgre from "../assets/postgresql.png"

import pencilImg from "../assets/pencilImg.png"

function About() {
  return (
    <>
      <motion.div
        className="font-inter xl:mt-auto mt-25"
      >
        <div className="xl:p-45 md:px-8 md:py-0 p-6 font-inter">
          <h1 className="xl:text-[2.6em] text-3xl tracking-tighter xl:leading-12 leading-tight mb-12" style={{fontWeight : 500}}><span className="text-gray-500">I blend data-driven insights,<br className="xl:block hidden" /> and dynamic experiences</span> to build intelligent <br className="xl:block hidden" /> and impactful digital solutions</h1>

          <div className="flex xl:flex-row flex-col gap-2">

            <div className="hidden xl:block xl:order-1 order-2 w-full xl:w-[38%] rounded-2xl p-5">
                <img src={pencilImg} className="rounded-2xl"/>
            </div>

            {/* Imagery */}
            <div className="xl:flex-1 w-full xl:w-[55%] xl:h-auto h-[40vh] xl:order-2 order-1 rounded-4xl">
              <img src={aboutImg} className="rounded-4xl h-full object-cover"/>
            </div>

          </div>
        </div>

        {/* Describing Myself */}
        <div className="flex xl:flex-row xl:gap-0 gap-4 flex-col xl:px-45 xl:py-5 px-7 pt-45">
          <div className="xl:w-[38%]">
            <h1 className="text-gray-600 text-xl">About Me</h1>
          </div>
          <div className="xl:w-[62%]">
            <h1 className="text-4xl">I blend strategic thinking with visual clarity to create digital products that are both beautiful and effective</h1><br />
            <p className="text-xl tracking-tighter leading-tight text-[#6d6d6d] ">As a technology-driven problem solver, my focus is on building intelligent digital solutions through clean interfaces, responsive interactions, and data-informed systems that elevate usability and performance. Whether it’s developing ML-based models, crafting interactive dashboards, or engineering scalable ReactJS applications, my approach combines design thinking with technical depth to align user needs with business outcomes.</p>
              <br />
            <p className="text-xl tracking-tighter leading-tight text-[#6d6d6d]">Over the years, I’ve worked with early-stage startups, product teams, and solo founders to bring ideas to life through strategic engineering and thoughtful UI development. I believe great products emerge from the synergy of design and data—where simplicity meets precision and creativity is backed by insight. From understanding user behavior to deploying robust systems, I ensure every project is built with clarity, efficiency, and purpose.</p>
          </div>
        </div>

        {/* Experience */}
        <div className="xl:p-45 md:px-7 px-4 py-45">
          <h1 className="text-black tracking-tight lg:text-4xl text-3xl mb-10">Coding Experiences</h1>
          <div className="flex flex-col gap-2">
            <Experience className="bg-[#7430F7] shadow-box z-50" textColor="text-white" expColor={"text-white"} exp="Backend Development" language="Golang, NodeJS" time="2024-Present" />
            <Experience className="bg-[#f4f4f4] z-10" textColor="text-[#979797]" exp="Machine Learning" language="Scikit-Learn, Matplotlib, Algorithms" time="2023-24" />
            <Experience className="bg-[#f4f4f4]" textColor="text-[#979797]" exp="Database Management" language="MySQL, PostgreSQL" time="2021-23" />
            <Experience className="bg-[#f4f4f4]" textColor="text-[#979797]" exp="FrontEnd Developement" language="React, JavaScript, TypeScript" time="2020-21" />
            <Experience className="bg-[#f4f4f4]" textColor="text-[#979797]" exp="Data Strucuture Analysis" language="JAVA, C++" time="2019-20" />
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="xl:px-45 md:px-7 px-4">
          <h1 className="text-black tracking-tight text-4xl mb-10">My stacks</h1>
          <div className="grid lg:grid-rows-3 lg:grid-cols-2 grid-rows-6 grid-cols-1 gap-2">
            <Stack className="bg-[#7430F7] shadow-box z-50" textColor="text-white" titleColor="text-white" image={Collab} imgColor={"bg-gray-200 p-1"} title="React" description="Building dynamic, reusable, and interactive user interfaces" />
            <Stack className="bg-[#f7f7f7]" textColor="text-[#979797]" image={LIn} title="Typescript" description="Writing scalable, type-safe, and maintainable applications" />
            <Stack className="bg-[#f7f7f7] z-10" textColor="text-[#979797]" image={JS} title="Javascript" description="Powering the modern web with logic and interactivity" />
            <Stack className="bg-[#f7f7f7]" textColor="text-[#979797]" image={Discord} title="ExpressJS" description="Simplifying backend development with flexible API architecture" />
            <Stack className="bg-[#f7f7f7] z-10" textColor="text-[#979797]" image={NodeJS} imgColor={"bg-white p-1"} title="NodeJS" description="A smooth and secure solution for development" />
            <Stack className="bg-[#f7f7f7]" textColor="text-[#979797]" image={GitHub} title="GitHub" description="The place where I build and ship code together" />
            <Stack className="bg-[#f7f7f7]" textColor="text-[#979797]" image={Java} title="Java" description="A powerful, object-oriented programming language" />
            <Stack className="bg-[#f7f7f7]" textColor="text-[#979797]" image={Postgre} title="PostgreSQL" description="Managing structured data with reliability and efficiency" />
          </div>
        </div>

        <div className="flex xl:flex-row flex-col xl:p-45 md:px-7 px-4 py-40 gap-10">
            <div className="font-inter flex flex-col xl:w-1/2 xl:gap-2 gap-4">
                    <div className="flex items-center overflow-hidden">
                    <h1 className="xl:text-xl text-lg text-gray-500 mb-2 mr-2">FAQs</h1><hr className="w-full text-[#e4e4e4]" />
                    </div>
                    <p className="xl:text-4xl text-3xl tracking-tighter xl:leading-tight leading-8 mb-6"><span className="text-gray-500">Answers to common questions to help you understand</span> the process and how we can work together</p>
                    <a href={CONTACT_MAILTO}>
                    <Button buttonName="Email Me" className="emailMe hover:bg-violet-600 duration-300 cursor-pointer tracking-tight font-inter shadow-box rounded-2xl bg-black text-white px-5 py-3 w-30" />
                    </a>
                </div>
            <div className="bg-gray-100 xl:w-1/2 rounded-2xl p-3 flex flex-col gap-5">
                    <div className="flex justify-center items-center">
                    <button className="w-40 tracking-tight font-inter shadow-box rounded-2xl bg-violet-600 text-white py-2">I'm here to help you</button>
                    </div>
                    <div className="flex flex-col gap-3 tracking-tight">
                    <FAQ solution={"The timeline depends on the project’s scope and complexity. ML projects typically take 3–6 weeks, depending on the data, model complexity, and deployment needs. Websites can take from 2–4 weeks based on the number of pages and interactions. I’ll provide a detailed timeline after reviewing the project brief."}>What's your typical project timeline?</FAQ>
                    <FAQ solution={"Yes! I believe in collaboration and refining the work to match your vision. Each project includes a set number of revision rounds, which we’ll define in the project scope"}>Do you offer revisions?</FAQ>
                    <FAQ solution={"I strive to ensure that all clients are satisfied with the final result. If you’re not happy, I’ll work with you to make it right."}>What if I'm not satisfied with the final result?</FAQ>
                    <FAQ solution={"Absolutely! If you already have brand guidelines, I’ll ensure the designs and functionalities align with your established identity while still bringing fresh creativity to the project"}>Can you work with my existing brand guidelines?</FAQ>
                    <FAQ solution={"Yes, I provide one month of post-project support to address any questions or minor adjustments you may need."}>Do you provide post-project support?</FAQ>
                    <FAQ solution={"The best way to reach me is via email or through the contact form on my website. I aim to respond within 24 hours."}>What’s the best way to reach you?</FAQ>
                    </div>
            </div>
        </div>
        
      </motion.div>
    </>
  )
}

export default About;