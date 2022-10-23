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
    <div className="bg-slate-200 flex justify-around h-12">
      <div className="m-3">vastolya.art</div>
      <ul className="flex gap-x-12 m-3">
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </div>
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
