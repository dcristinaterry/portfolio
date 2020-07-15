import React from 'react';

import 'font-awesome/css/font-awesome.min.css';

import MainLeft from './components/mainLeft/MainLeft';
import Blogs from './components/mainRight/Blogs';

const Main = () => {

    return (
        <div className="relative md:flex ">
            <MainLeft />
            <Blogs />
         

        </div>





    );
}

export default Main;