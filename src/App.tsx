import { useState } from "react";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CardWrapper />
    </div>
  );
}

export default App;
