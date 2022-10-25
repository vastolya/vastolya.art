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
    // <>
    //   <nav className="mx-auto px-20 py-10 flex justify-between md:max-w-screen-2xl">
    //     <Link to="/" className="">
    //       vastolya.art
    //     </Link>
    //     <Link to="/projects" className="hidden md:block">
    //       Watch
    //     </Link>
    //     <Link to="/skills" className="hidden md:block">
    //       CV
    //     </Link>
    //     <Link to="/education" className="hidden md:block">
    //       Contact
    //     </Link>
    //     <Link to="/education" className="block md:hidden">
    //       toogle
    //     </Link>
    //   </nav>
    //   <Routes>
    //     <Route index element={<Main />} />
    //     <Route path="projects" element={<Projects />} />
    //     <Route path="skills" element={<Skills />} />
    //     <Route path="education" element={<Education />} />
    //   </Routes>
    // </>
    <>
      <nav className="fixed top-0 left-0 bg-white w-full shadow z-10">
        <div className="container m-auto flex justify-between items-center text=gray-700">
          <h1 className="pl-8 py-4 text-xl font-bold">
            <Link to="/" className="">
              vastolya.art
            </Link>
          </h1>
          <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <li className="hover:bg-gray-200 py-4 px-6">
              <Link to="/projects" className="">
                projects
              </Link>
            </li>
            <li className="hover:bg-gray-200 py-4 px-6">
              <Link to="/skills" className="">
                cv
              </Link>
            </li>
            <li className="hover:bg-gray-200 py-4 px-6">
              <Link to="/education" className="">
                contacts
              </Link>
            </li>
          </ul>

          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600"></div>
            <div
              className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0
            group-focus:right-0 group-focus:opacity-100 transition-all duration-300"
            >
              <ul className=" w-full text-base pt-10">
                <li>
                  <Link
                    to="/projects"
                    className="block hover:bg-gray-200 py-4 px-6 w-full"
                  >
                    projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="block hover:bg-gray-200 py-4 px-6 w-full"
                  >
                    cv
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education"
                    className="block hover:bg-gray-200 py-4 px-6 w-full"
                  >
                    contacts
                  </Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
      <div className="mt-[60px]">
        <Routes>
          <Route index element={<Main />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
