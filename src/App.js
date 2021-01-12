import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    
      <Router>
        <Dashboard/>
      </Router>
   
  );
}

export default App;
