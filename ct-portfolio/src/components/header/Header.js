import React from "react"


const Header = () => {


    return (
        <header className="bg-gray-910 relative pb-2 sm:pb-10 md:pt-20 md:pb-40">
            <div className="text-center">
                <h1 className="text-5xl sm:text-6xl text-white-101 font-megrim font-black  md:text-6xl  lg:text-10xl pt-6 ">Cristina Terry</h1>
                <h3 className="text-xs sm:text-base  md:text-lg lg:text-2xl text-white-101 font-syncopate sm:mb-4" >Full-Stack Web Developer / Software Engineer</h3>
            </div>
            <div className="text-center mt-8 md:text-right md:bottom-0 md:right-0 md:pr-4 md:absolute  sm:text-center">
                <h2 className="text-2xl text-orange-920  sm:text-2xl lg:text-4xl md:pr-24 font-syncopate font-thin" >Personal Portfolio</h2>
            </div>
        </header>
    )

}

export default Header