import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by <a href="https://i-alianne.com/">Alianne</a>{" "}
        and is open-sourced on{" "}
        <a href="https://github.com/i-alianne/react-app">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
