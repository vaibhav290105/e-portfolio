// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <main className="mt-16">
        <Intro />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
