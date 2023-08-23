import "./App.css";
import logo from "./holberton-logo.jpg";
import { getFooterCopy, getFullYear } from "./utils";
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
        <label for="in">Email</label>
        <input type="email" id="in" />
        <label for="pass">password</label>
        <input type="password" id="pass" />
        <button>ok</button>
      </body>
      <footer className="app-footer">
        Copyright {getFullYear()} - {getFooterCopy()}
      </footer>
    </div>
  );
}
