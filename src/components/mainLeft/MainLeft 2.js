import React from 'react';
import Bio from '../bio/Bio';
import Skills from '../skillsSection/Skills'


const MainLeft = () => {
    return (

        <div className="md:w-2/3 md:ml-16">
            <Bio />
            <Skills className="relative" />
        </div>
    )
}

export default MainLeft;