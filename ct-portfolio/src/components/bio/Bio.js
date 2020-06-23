import React from "react"
const Bio = () => {
    return (
        <div className="relative w-2/3 md:ml-16 ">
            <div id="section1" className=" -mt-8 sm:-mt-18 md:-mt-40 w-1/3 ml-3  ">

                <img className="md:h-64 md:w-64 object-cover object-center sm:h-48 sm:w-48 h-20 w-20 rounded-full  "
                    src="./assets/8FCB1AE1-8323-41A6-9EC7-28171690BA39_1_201_a.jpeg" />
            </div>
            <div id="section2" className="bg-red-100 sm:w-auto md:mt-5 rounded-lg md:-mt-10  shadow-lg bg-white-101 sm:mb-6 mb-4 shadow-lg ">



                <h1 className="text-gray-800 font-mukta text-4xl text-center">Bio</h1>
                <p>I’m a Software engineer focused on building different Full Stack projects with the latest technologies.
                Throughout the years I have serverd in multiple roles and phases of software development including
                Java backend development, black box testing and as a Systems Analyst role.
                Due to my diverse backgroung I'm able to pursue suitable solutions, and finding way to improve
                processes as a whole.</p>



            </div>
        </div>
    )
}

export default Bio;