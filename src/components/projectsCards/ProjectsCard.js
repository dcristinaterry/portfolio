import React from "react"

const ProjectCard = (props) => {

    return (


        <div className="w-full md:w-1/2 lg:w-1/3  p-10 " >
            <div
                className="no-underline bg-white-100 shadow-lg hover:shadow hover:-translateY-sm rounded-lg ">

                <a href={props.deploy} target="_blank">
                    <div className="overflow-hidden">
                        <div className="">

                            <img className="w-full h-80 object-cover  " src={props.image} />
                        </div>
                        <div className=" p-4 border-t bg-white-100">
                            <div>
                                <h3 className="font-bold text-xl mb-2 text-black" >{props.projectName}</h3>
                                <p className="leading-normal text-grey-darkest text-sm " >{props.description}</p>
                            </div>
                            <div className="my-8 border-t-2   ">

                                <div className="m-4 h-16 flex flex-wrap ">


                                    <span className=" items-center  text-grey-darker w-11/12 ">

                                        {props.technologies.map(item => (
                                            <button className="float-left text-sm inline-block bg-green-910 m-1 p-2 rounded-lg bg-opacity-50 font-mono">{item}</button>
                                        ))}
                                       

                                    </span>
                                    <a className="text-sm  font-bold w-1/12 bg-orange-920 rounded-lg bg-opacity-50 p-3 m-auto" href={props.github} target="_blank">
                                            <i className="fa fa-github" style={{ fontSize: '40px' }}></i>
                                        </a>
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