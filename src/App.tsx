import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./index.css";
function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
