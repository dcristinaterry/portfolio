import React from "react"
import ProjectCard from "../projectsCards/ProjectsCard"

const Projects = () => {

    const myProjects = [
        {
            projectName: "Weather Dashboard",
            description: "This application will give information about the weather for a specific city.",
            image: "./assets/Screen Shot 2020-04-08 at 11.01.09 PM.png",
            github: "https://crisdc88.github.io/H6-WEATHER-INFO/",
            technologies: [],
            deploy: "https://crisdc88.github.io/H6-WEATHER-INFO/"
        },

        {
            projectName: "Weather Dashboard",
            description: "This application will give information about the weather for a specific city.",
            image: "./assets/Screen Shot 2020-04-08 at 11.01.09 PM.png",
            github: "https://crisdc88.github.io/H6-WEATHER-INFO/",
            technologies: [],
            deploy: "https://crisdc88.github.io/H6-WEATHER-INFO/"
        },

        {
            projectName: "Weather Dashboard",
            description: "This application will give information about the weather for a specific city.",
            image: "./assets/Screen Shot 2020-04-08 at 11.01.09 PM.png",
            github: "https://crisdc88.github.io/H6-WEATHER-INFO/",
            technologies: [],
            deploy: "https://crisdc88.github.io/H6-WEATHER-INFO/"
        },

    ]



    return (
        <section className=" bg-gray-100 pt-10 border-t border-orange-920 ">

        <h4 className="text-center text-lg sm:text-2xl lg:text-4xl bg-gray-920 text-orange-920 font-syncopate font-medium p-6 mb-10 text-3xl ">Check out some of my projects</h4>
        <div className=" mx-auto">
            <div className="flex flex-wrap lg:mx-20">
    
                {myProjects.map(item => (
                    <ProjectCard
                        projectName={item.projectName}
                        description={item.description}
                        image={item.image}
                        github={item.github}
                        deploy={item.deploy}
                    />
    
                ))}
    
            </div>
        </div>
    
    </section>
        
    )

}

export default Projects