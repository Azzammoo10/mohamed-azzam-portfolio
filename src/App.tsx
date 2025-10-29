import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
//import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificationsSection } from "./components/Certification2"
import { EducationSection } from './components/EducationSection';


function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>

      <About />

      <Skills />
      <Experience />
      <Projects />
      <CertificationsSection />
      <EducationSection/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
