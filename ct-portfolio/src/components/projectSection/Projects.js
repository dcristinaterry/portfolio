import React from "react"
import ProjectCard from "../projectsCards/ProjectsCard"

const Projects = () => {

    const myProjects = [
        {
            projectName: "Study-Buddy",
            description: "This application will allow students to interact within their own class/cohort to better schedule and host group study sessions",
            image: "./assets/ScreenStudyBuddy.png",
            github: "https://github.com/dcristinaterry/P3-Study-Budy",
            technologies: ["Tailwind Css", "JavaScript", "Axios", "Node Js" ,"Express",  "Sequelize", "mySql"],
            deploy: ""
        },

        {
            projectName: "Groceries List",
            description: "This application will allow you to have save your list of Items and move them to different places to avoid forgetting any item..",
            image: "./assets/ScreenGroceries.png",
            github: "https://github.com/dcristinaterry/GROCERIES-LIST",
            technologies: ["Node Js", "mySql", "Express", "Jquery","HandleBars", "Bootstrap"],
            deploy: "https://ct-groceries-list.herokuapp.com/"
        },

        {
            projectName: "Weather Dashboard",
            description: "With this application you will be able to check the weather for a City and have a 5 day weathercast",
            image: "./assets/ScreenWeather.png",
            github: "https://github.com/dcristinaterry/WEATHER-INFO",
            technologies: ["Jquery", "Bootstrap", "Ajax"],
            deploy: "https://dcristinaterry.github.io/WEATHER-INFO/"
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
                        technologies = {item.technologies}
                    />
    
                ))}
    
            </div>
        </div>
    
    </section>
        
    )

}

export default Projects