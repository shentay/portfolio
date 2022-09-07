import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                My Personal Projects
            </h1>
            <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                    <a 
                        href={project.link}
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="leading-relaxed">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}