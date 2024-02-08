import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <button className="btn">Hover me</button>
    </div>
  );
}

export default App;
