import React from "react"

const ProjectCard = (props) => {

    return (

        <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col px-3 mb-16" itemscope=""
                itemtype="https://schema.org/WebSite">
                <div
                    className="no-underline bg-white transition shadow-lg hover:shadow hover:-translateY-sm flex flex-1 flex-col rounded-lg overflow-hidden">
                    <a href="https://crisdc88.github.io/H6-WEATHER-INFO/" target="_blank">
                        <div className="w-full shadow-inner bg-dark-100 bg-cover bg-top min-h-item ">

                            <img className="object-cover object-center"
                                src="./assets/Screen Shot 2020-04-08 at 11.01.09 PM.png" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-4 border-t">
                            <div>
                                <h3 className="font-bold text-xl mb-2 text-black" itemprop="name">Weather Dashboard</h3>
                                <p className="leading-normal text-grey-darkest text-sm " itemprop="description">This
                                    application will give information about the weather for a specific city.</p>
                            </div>
                            <div className="mt-6 text-right overflow-hidden">
                                <span className="inline-flex items-center   text-grey-darker ml-3" title="Views">
                                    <a className="text-sm  font-bold"
                                        href="https://github.com/crisdc88/H6-WEATHER-INFO" target="_blank">GitHub Repo</a>

                                </span>

                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>

    )
}

export default ProjectCard;