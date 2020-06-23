import React from "react"


const Header = () => {


    return (
        <header className="bg-gray-910 relative pb-2 sm:pb-10 md:pt-20 md:pb-40">
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl text-white-101 font-serif font-black  md:text-6xl  lg:text-6xl md:mb-2 pt-6 ">Cristina Terry</h1>
                <h3 className="text-xs sm:text-xs md:text-lg lg:text-lg text-white-101 font-serif font-black  sm:mb-4" >Full-Stack Web Developer / Software Engineer</h3>
            </div>
            <div className="text-center mt-8 md:text-right md:bottom-0 md:right-0 md:pr-4 md:absolute  sm:text-center">
                <h2 className="text-xl text-orange-910  sm:text-4xl lg:text-5xl md:pr-24" >Personal Portfolio</h2>
            </div>
        </header>
    )

}

export default Header