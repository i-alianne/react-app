import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://i-alianne.com/" target="_blank" rel="noreferrer">
            Alianne
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/i-alianne/react-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
