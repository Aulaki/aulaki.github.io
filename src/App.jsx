import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null
      ? JSON.parse(saved)
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
      <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
