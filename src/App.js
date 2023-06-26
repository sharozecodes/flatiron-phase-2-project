import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/whatever" element={<div>Route 1</div>}></Route>
        <Route path="/about" element={<div>Route 2</div>}></Route>
        <Route path="/" element={<div>Route 3</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
