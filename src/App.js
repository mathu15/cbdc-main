import "./App.css";

// import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "prismjs/themes/prism-coy.css";
import "primeflex/primeflex.css";
import "./assets/demo/flags/flags.css";
import "./assets/demo/Demos.scss";
import "./assets/layout/layout.scss";
import classNames from "classnames";
import Home from "./containers/Home/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CentralBank from "./containers/CentralBank/CentralBank";
import { Toast } from "primereact/toast";
import WBankOne from "./containers/WholesaleBankone/WBankOne";
import WBankTwo from "./containers/WholesaleBanktwo/WBankTwo";
import WBankThree from "./containers/WholesaleBankthree/WBankThree";

function App() {
  return (
    <Router>
      <Toast />
      <>
        <Route path="/" exact component={Home} />
        <Route path="/central-bank" component={CentralBank} />
        <Route path="/wholesale-bank-one" component={WBankOne} />
        <Route path="/wholesale-bank-two" component={WBankTwo} />
        <Route path="/wholesale-bank-three" component={WBankThree} />
      </>
    </Router>
  );
}

export default App;
