import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./sections/Home/Home.jsx";
import About from "./sections/About/About.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Education from "./sections/Education/Education.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className="app-main" style={{paddingTop: 100}}>
        <Home />
        <hr></hr>
        <About />
        <hr></hr>
        <Skills />
        <hr></hr>
        <Projects />
        <hr></hr>
        <Education />
        <hr></hr>
        <Contact />
        <hr></hr>
      </main>
      <Footer />
    </div>
  );
}

export default App;



// Color Combination for Portfolio Website

// Page Background: #0f172a
// Section / Card Background: #111827
// Navbar Background: #020617
// ✨ Accent & Actions
// Primary Accent (buttons, links, highlights): #38bdf8
// Hover Accent: #60a5fa
// 📝 Text
// Headings / Main Text: #e5e7eb
// Secondary / Muted Text: #9ca3af
// Borders & Dividers
// Border Color: #1f2937

