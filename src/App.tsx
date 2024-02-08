import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="box-1"></div>
      <h1>Something Cool</h1>
    </div>
  );
}

export default App;
