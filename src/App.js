import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Cv from "./components/Cv";
import Contacts from "./components/Contacts";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="сontacts" element={<Contacts />} />
        <Route path="cv" element={<Cv />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectId" element={<SingleProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
