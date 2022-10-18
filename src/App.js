import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container__layout">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
