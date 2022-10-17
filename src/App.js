import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container__layout">
      <Header />
      <Main />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
