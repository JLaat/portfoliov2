import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardWrapper from "./components/icons/CardWrapper/CardWrapper";
import Menu from "./components/Menu/Menu";
import Projects from "./pages/Projects/Projects";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
