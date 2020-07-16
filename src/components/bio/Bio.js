import React from "react"
const Bio = () => {
    return (
        <div className="relative ">
            <div id="section1" className=" -mt-8 sm:-mt-20 md:-mt-40 w-1/3 ml-4  ">

                <img className="md:h-64 md:w-64 object-cover object-center sm:h-48 sm:w-48 h-20 w-20 rounded-full  "
                    src="./assets/8FCB1AE1-8323-41A6-9EC7-28171690BA39_1_201_a.jpeg" />
            </div>
            <div id="section2" className="rounded-lg -mt-10 shadow-lg bg-white-101 sm:mb-6 mb-4 shadow-lg pb-4 px-4">

                <h1 className="text-gray-900 font-megrim text-4xl font-extrabold text-center pt-4 pb-6">BIO</h1>
                <div className="font-electro tracking-wider sm:text-lg md:text-lg text-gray-900 text-justify">
                    <p className="pb-4 ">Since I was a kid I’ve always been interested in change and exploring new things; some might say I was “passionately curious”. I believe it was that curiosity that led me to participate in several professional roles within the IT industry over the past 10 years. This included working as a Systems Analyst, Tester and Software Engineer; collective experience that has given me diverse skills that make me a well-rounded IT professional today. </p>
                    <p className="pb-4 ">I began my career as a Systems Analyst at the largest financial company in Colombia, Bancolombia, where I worked on project “Innova,” which was responsible for a large technology upgrade related to credit card applications. There, I worked on project implementation and migration of the rewards system.  After this fruitful experience in my home country I decided to follow my professor’s suggestion to further my career and technical skills and pursue a master’s degree in computer science in Iowa. After finishing my advanced degree, I left the corn behind and set course for Silicon Valley in California, where I landed yet another role implementing a new testing framework using Java and Selenium which reduce the time of manual testing over 60%. One of my primary tasks focused on migrating different types of data,  such as social media messages through web services for compliance purposes using frameworks such as Spring, and Java as the main language increasing significantly the company's and revenue. </p>
                    <p className="pb-4 ">All of this experience was great but it wasn’t until I started the bootcamp at Berkeley University that I fully realized the role I’ve been searching for; Full Stack Web Development using frameworks such as Tailwinds CSS and React, and languages such as Node, Javascript and MySql. I’ve always been a fan of designs that make sense, are clever and solve a problem with the simplest approach, and that’s why I find Full Stack Web Development to be the perfect way for me to apply my existing skills, learn some new ones and also use my creativity and curiosity to create truly optimum solutions. I believe it will be my next role and the most fulfilling one to date.</p>
                </div>
            </div>
        </div>
    )
}

export default Bio;