import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    // <div className="container__layout">
    //   <Header />
    //   <Projects />
    //   <Main />
    //   <Skills />

    //   <Education />
    // </div>
    <>
      <nav className="flex justify-between md:max-w-screen-2xl mx-auto px-20 py-10">
        <Link to="/">vastolya.art</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education">Education</Link>
      </nav>
      <Routes>
        <Route index element={<Main />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
