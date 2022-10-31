import "./App.css";

import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "prismjs/themes/prism-coy.css";
import Home from "./containers/Home/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CentralBank from "./containers/CentralBank/CentralBank";
import { Toast } from "primereact/toast";
import WBankOne from "./containers/WholesaleBankone/WBankOne";

function App() {
  return (
    <Router>
      <Toast />
      <>
        <Route path="/" exact component={Home} />
        <Route path="/central-bank" component={CentralBank} />
        <Route path="/wholesale-bank-one" component={WBankOne} />
      </>
    </Router>
  );
}

export default App;
