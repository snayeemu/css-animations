import "./App.css";

function App() {
  const name = "Shaikh Nayeem Uddin";
  const nameArray = name.split("");

  return (
    <div className="main">
      {/* <div className="loading">
        <div className="glass"></div>
        <div className="box"></div>
      </div> */}
      <div className="card">
        {nameArray.map((chars, index) => (
          <span
            className="chars"
            style={{ transitionDuration: `${index * 150}ms` }}
          >
            {chars}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
