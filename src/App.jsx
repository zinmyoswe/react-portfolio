import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import WorkExperience from './sections/WorkExperience/WorkExperience';
import './index.css';
import Education from './sections/Education/Education';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <WorkExperience />
      <Education />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
