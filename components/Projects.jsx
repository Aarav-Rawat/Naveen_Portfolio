"use client";
import React from "react";
import { PinContainer } from "./ui/3dPin";
import { projects } from "@/data";

const Projects = () => {
  return (
    <div className="py-20 relative h-">
      <span className="text-6xl font-bold text-start text-purple">
        Project.
      </span>

      <div className="flex justify-center items-center ">
        {projects.map((project) => (
          <PinContainer
            title={project.title}
            href={project.link}
            key={project.id}
          >
            <div className="flex flex-col relative">
              <img src={project.img} alt="" />
              <span className="font-bold text-xl">Verzatile - a digital store</span>
              <p className="mb-3">This is where you can buy products and even create one and become seller to monetize it</p>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
