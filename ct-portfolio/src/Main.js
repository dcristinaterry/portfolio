import React from 'react';
import Bio from './components/bio/Bio'
import 'font-awesome/css/font-awesome.min.css';
import Skills from './components/Skills';

const Main = () => {

    return (
        <div className="relative flex ">
            <div className="md:w-2/3">
            <Bio />
            <Skills className="relative"/>
            </div>
            <section className="md:w-1/3 bg-red-300" >
                
            </section>
           

        </div>





    );
}

export default Main;