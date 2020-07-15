import React from "react"

const ProjectCard = (props) => {

    return (


        <div className="w-full md:w-1/2 lg:w-1/3 flex  p-10 " >
            <div
                className="no-underline bg-white-100 flex flex-1 flex-col shadow-lg hover:shadow hover:-translateY-sm rounded-lg ">

                <a href={props.deploy} target="_blank">
                    <div className="">
                        <div className="w-full h-40">

                            <img className="" src={props.image} />
                        </div>
                        <div className=" p-4 border-t bg-white-100">
                            <div>
                                <h3 className="font-bold text-xl mb-2 text-black" >{props.projectName}</h3>
                                <p className="leading-normal text-grey-darkest text-sm " >{props.description}</p>
                            </div>
                            <div className="mt-6 text-right  border-t-2 ">

                                <div className="m-4 mr-2 h-16 ">


                                    <span className="items-center   text-grey-darker ">

                                    {props.technologies.map(item => (
                                            <button className="float-left translate-x-8 inline-block bg-green-910 m-2 p-2 rounded-lg bg-opacity-50 font-spaceMono">{item}</button>
                                        ))}
                                        <a className="text-sm  font-bold " href={props.github} target="_blank">
                                            <i className="fa fa-github" style={{ fontSize: '40px' }}></i>
                                        </a>
                                      
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>


    )
}

export default ProjectCard;