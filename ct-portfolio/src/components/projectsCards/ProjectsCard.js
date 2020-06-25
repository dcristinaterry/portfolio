import React from "react"

const ProjectCard = (props) => {

    return (


        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col  p-10 " 
        itemtype="https://schema.org/WebSite">
            <div
                className="no-underline bg-white-100 flex flex-1 flex-col shadow-lg hover:shadow hover:-translateY-sm rounded-lg overflow-hidden">
             
                <a href={props.github} target="_blank">
                    <div className="w-full bg-top min-h-item ">

                        <img className="object-cover object-center" src={props.image} />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-4 border-t bg-white-100">
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-black" >{props.projectName}</h3>
                            <p className="leading-normal text-grey-darkest text-sm " >{props.description}</p>
                        </div>
                        <div className="mt-6 text-right overflow-hidden">
                            <span className="inline-flex items-center   text-grey-darker ml-3">
                                <a className="text-sm  font-bold"
                                    href={props.github} target="_blank">GitHub Repo</a>
                            </span>

                        </div>
                    </div>
                </a>
            </div>
        </div>


    )
}

export default ProjectCard;