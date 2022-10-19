import "./App.css";

import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "prismjs/themes/prism-coy.css";
import Home from "./containers/Home/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CentralBank from "./containers/CentralBank/CentralBank";
import PrimeReact from "primereact/api";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/central-bank" component={CentralBank} />
    </Router>
  );
}

export default App;
