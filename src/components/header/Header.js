import React from "react"


const Header = () => {


    return (
        <header className="bg-gray-910 relative pb-2 sm:pb-24 md:pt-20 md:pb-40">
            <div className="text-center">
                <h1 className="text-5xl sm:text-4xl text-white-101 font-megrim font-black  md:text-4xl  lg:text-6xl pt-6 ">Cristina Terry</h1>
                <h3 className="text-xs sm:text-base  md:text-lg lg:text-2xl text-white-101 font-syncopate sm:mb-4" >Full-Stack Web Developer / Software Engineer</h3>
            </div>
            <div className=" mt-8 text-right bottom-0 right-0 pr-4 md:pr-4 absolute">
                <h2 className="text-lg text-orange-920  sm:text-3xl lg:text-4xl md:pr-24 sm:mr-16 font-syncopate font-thin" >Personal Portfolio</h2>
            </div>
        </header>
    )

}

export default Header