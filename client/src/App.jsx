import Dashboard from "./components/Dashboard";
import "./App.css";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
    {    
      localStorage.getItem("auth") ? <Dashboard /> : <LoginPage />
    }
    </>
  );
}

export default App;
