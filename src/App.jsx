import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import WorkExperience from './sections/WorkExperience/WorkExperience';
import './index.css';
import Education from './sections/Education/Education';
import { ThemeProvider } from './common/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Hero />
      <Projects />
      <Skills />
      <WorkExperience />
      <Education />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
