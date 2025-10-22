import React, {useState} from "react"
import ProjectWindow from "./ProjectWindow";

function Cards({textColor, className, projectName, workImage, imgName, describe, websiteLink}) {
  const [showBox, setShowBox] = useState(false);

  return (
    <a href={websiteLink} target="_blank">
      <div className={`relative aspect-[4/3] flex rounded-3xl overflow-hidden group hover:cursor-pointer ${className}`} onClick={() => setShowBox(!showBox)} >
        <img src={imgName} alt="Project" className='scale-100 group-hover:scale-105 group-hover:blur-xs transition-all duration-300 ease-in-out object-cover w-full z-0' />
        <div className="absolute p-10 inset-0 flex flex-col gap-4 justify-center items-center opacity-0 group-hover:opacity-100 duration-300">
          <h1 className={`font-kode text-4xl font-semibold ${textColor}`}>{projectName}</h1>
          <p className={`${textColor} text-base text-center`}>{describe}</p>
        </div>    
        {showBox && <ProjectWindow workImg={workImage} />}
      </div>
    </a>
  )
}

export default Cards