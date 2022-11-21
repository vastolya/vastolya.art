import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
// import CV from "./components/CV";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        {/* <Route path="cv" element={<CV />} /> */}
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectId" element={<SingleProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
