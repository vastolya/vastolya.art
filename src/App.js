import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Catalog from "./components/Catalog";
import Cv from "./components/Cv";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="skills" element={<Contacts />} />
        <Route path="cv" element={<Cv />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
