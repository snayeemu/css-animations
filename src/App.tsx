import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="box-1"></div>
      <div className="box-2-container">
        <div className="box-2"></div>
      </div>
    </div>
  );
}

export default App;
