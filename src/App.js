import "./App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Logout from "./components/Logout";

function App() {
  return (
    <main>
      <Nav />
      <Login />
      <Homepage />
      <Logout />
    </main>
  );
}

export default App;
