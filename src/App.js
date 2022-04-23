import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
// import Navigation from './components/Navigation';
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {

  const [page, setPage] = useState("about");
   const pageRender = () => {
     if (page === "about") {
      return <About />
     }
     if (page === "contact") {
       return <ContactForm />
     }
     if (page === "portfolio") {
      return <Portfolio />
    }
    if (page === "resume") {
      return <Resume />
    }
   }

   const pageChanger = (page) => {
     setPage(page)
   }

  return (
   <>
      <Header
      pageChanger = {
        pageChanger
      }
      />
      <main>
        { pageRender() }
      </main>
      <Footer />
   </>
   
  );
}

export default App;
