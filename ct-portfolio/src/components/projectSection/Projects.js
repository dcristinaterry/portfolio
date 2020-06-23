import React from "react"
import ProjectCard from "../projectsCards/ProjectsCard";

const Projects = () => {

    return (
        <section className="bg-gray-100  md:py-12 ">
            <div className="container md:ml-16">
                <h4 className="text-black text-center font-serif font-bold text-3xl mb-12">Check out some of my projects</h4>

                <ProjectCard />

            </div>
        </section>
    )

}

export default Projects;