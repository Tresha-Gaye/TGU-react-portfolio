import React from 'react';
import Header from './components/Header';
import About from './components/About';
// import Navigation from './components/Navigation';
import Project from "./components/Project";
import Footer from "./components/Footer";


function App() {
  return (
   <>
      <Header />
      <main>
        <About />
        <Project />
        <Footer />
      </main>
   </>
   
  );
}

export default App;
