import React from 'react';
import Header from './components/Header';
import About from './components/About';
// import Navigation from './components/Navigation';
import Project from "./components/Project";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';


function App() {
  return (
   <>
      <Header />
      <main>
        <About />
        <ContactForm />
        <Project />
        <Footer />
      </main>
   </>
   
  );
}

export default App;
