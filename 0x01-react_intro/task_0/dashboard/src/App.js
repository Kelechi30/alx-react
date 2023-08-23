import logo from "./holberton-logo.jpg";
import "./App.css";
export default App;

function App() {
  return (
    <div>
      <header className="app-header">
        <img src={logo} alt="holberton logo" />
        <h1>school Dashboard</h1>
      </header>
      <body className="app-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="app-footer">Copyright 2020 - holberton School</footer>
    </div>
  );
}
