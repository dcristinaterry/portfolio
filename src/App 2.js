import React from 'react';
import Main from "./Main"
import Header from './components/header/Header';
import Projects from './components/projectSection/Projects';
import Footer from './components/footer/Footer'



function App() {
  return (
    <div>
      <Header />
      <Main />
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
