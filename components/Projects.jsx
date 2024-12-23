"use client";
import React from "react";
import { PinContainer } from "./ui/3dPin";
import { projects } from "@/data";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-full w-[100vw] " id="projects">
      <span className="text-6xl font-bold text-start flex justify-start text-purple">
        My-Shop.
      </span>

      <div className="flex flex-col justify-center items-center h-full">
        {projects.map((project) => (
          <PinContainer
            title={project.title}
            href={project.link}
            key={project.id}
          >
            <div className="flex flex-col ">
              <Image src={project.img} alt="" width={600} height={200}/>
              <span className="font-bold text-xl">{project.name}</span>
              <p className="mb-3">{project.des}</p>
            </div>
          </PinContainer>
        ))}
      </div>
     
    </div>
  );
};

export default Projects;
