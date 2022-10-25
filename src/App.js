import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
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
