import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World since React!</p>
        <a
          className="App-link"
          href="https://es.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Store Tech
        </a>
      </header>
    </div>
  );
}

export default App;
