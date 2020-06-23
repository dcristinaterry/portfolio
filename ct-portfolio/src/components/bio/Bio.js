import React from "react"
const Bio = () => {
    return (
        <div className="relative md:ml-16 ">
            <div id="section1" className=" -mt-8 sm:-mt-20 md:-mt-40 w-1/3 ml-4  ">

                <img className="md:h-64 md:w-64 object-cover object-center sm:h-48 sm:w-48 h-20 w-20 rounded-full  "
                    src="./assets/8FCB1AE1-8323-41A6-9EC7-28171690BA39_1_201_a.jpeg" />
            </div>
            <div id="section2" className="rounded-lg -mt-10 shadow-lg bg-white-101 sm:mb-6 mb-4 shadow-lg pb-4 px-4">

                <h1 className="text-gray-900 font-megrim text-4xl font-extrabold text-center pt-4 pb-6">BIO</h1>
                <div className="font-electro tracking-widest text-xl text-gray-900 text-justify">
                    <p className="pb-4 ">Since I was a kid I’ve always been interested in change and exploring new things, one might say I'm “passionately curious”. I believe it was that curiosity that led me to serve in several different professional roles within the IT industry over the past 10 years. This included working as a Systems Analyst, Tester and Software Engineer, and provided me with the chance to learn different skills within my industry. </p>
                    <p className="pb-4 "> I began my career as a Systems Analyst at the largest financial company in Colombia, Bancolombia, where I worked on project “Innova,” which was responsible for a large technology upgrade related to credit card applications. There, I worked on project implementation and migration of the rewards system.  After this fruitful experience in my home country I decided to follow my professor’s suggestion to further my career and technical skills and pursue a master’s degree in computer science in Iowa. After finishing my advanced degree, I left the corn behind and set course for Silicon Valley in California, where I landed yet another role implementing a new testing framework. One of my major projects later on was migrating different types of data such as social media data using web Services. </p>
                    <p className="pb-4 ">All of this experience was great but it wasn’t until I started the Full Stack Bootcamp at Berkeley University that I realized that all of those years of experience were propelling me towards the role I was built for, and that is full-stack development. I have always been a fan of designs that make sense, are clever and solve a problem with the simplest approach, and that’s why I find in full stack web development, an opportunity to apply my existing skills, learn some new ones and also use my creativity and curiosity to create truly optimum solutions. I believe it will be my next role and the most fulfilling one to date. </p>
                </div>
            </div>
        </div>
    )
}

export default Bio;