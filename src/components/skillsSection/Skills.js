import React from "react"
import resume from "./asset/D.CristinaTerry_R0623.pdf"

const Skills = () => {

    let skillsArr = ["JavaScript","mySql", "Node Js", "webServices", "Java", "HTML", "CSS", "Tailwind CSS","Bootstrap", "HandleBars", "Sequelize", "Mongo", "mongoose", "Responsive Design",
        "Eclipse", "VS Code", "mySql Workbench", "Jira", "Zira", "Systems Analysis", "ETL","Data Migration","Requirements Gathering", "Ambiguity Analysis", "Project Coordination", "Test Automation", "Fluent in English and Spanish"]

    return (
        <div id="section2" className="relative sm:w-auto  md:mt-32  rounded-lg overflow-hidden shadow-lg bg-white-101 sm:mb-6 mb-4">
            <div className="w-full py-4">

                <div>

                    <h2 className="text-gray-900 font-megrim text-4xl text-center  font-extrabold pb-4" >skills</h2>

                    <div className="text-center text-base font-spaceMono pb-4" >
                        
                        {skillsArr.map((item, index) => (

                            index < (skillsArr.length - 1) ? (
                                <span key={index} className="inline-block pr-2 ">
                                    {item} <i class="fa fa-circle"  style={{ fontSize: '5px', margin: 'auto', transform: 'translate(0, -3px)'}}></i>
                                </span>
                            ) : (
                                <span key={index} className="inline-block pr-2">
                                 {item}
                            </span>
                                )
                             
                        )

                        )}
                    </div>
                </div>
            </div>
            {/* <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div> */}
            <div>
                <div className="text-center pb-2">
                    <a href="https://www.linkedin.com/in/dcristinaterry/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square pr-10" style={{ fontSize: '40px' }}></i></a>
                    <a href="https://github.com/dcristinaterry" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github pr-10" style={{ fontSize: '40px' }}></i></a>
                    <a href={resume} target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o pr-10" style={{ fontSize: '40px' }}></i></a>
                    <a ><i className="fa fa-google pr-2" style={{ fontSize: '40px' }}></i><span className="font-spaceMono text-xl bold" >crisdc88@gmail.com</span></a>
                </div>
            </div>

        </div>
    )

}

export default Skills