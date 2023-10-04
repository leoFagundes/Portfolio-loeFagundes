import './Global.css';
import AboutMe from './components/AboutMe';
import Certificates from './components/Certificates';
import Me from './components/Me';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="main">
      <NavBar />
      <Me />
      <AboutMe />
      <Projects />
      <Skills />
      <Certificates />
    </main>
  );
}

export default App;
