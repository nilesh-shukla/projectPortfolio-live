import React from 'react'

function ProjectWindow({projectName, projectDescription, workImg}) {
  return (
      //Still under production 
      <div className="p-4 bg-gray-300 rounded-2xl grid grid-cols-2 gap-4 w-[50vh] ">
        <div className="flex items-center">
          <img src={workImg} className="rounded-2xl my-auto" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-center font-oregano font-semibold">{projectName}</h1>
            <p className="text-lg text-left">{projectDescription}</p>
          </div>
          <div className="w-full flex">
            <button className="text-sm p-3 ml-auto bg-purple-600 hover:bg-purple-800 text-white w-fit rounded-xl cursor-pointer">Open Project</button>
          </div>
        </div>
      </div>
  )
}

export default ProjectWindow