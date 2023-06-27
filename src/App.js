import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Whatever from "./Components/Whatever";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/whatever">
          <Whatever />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
