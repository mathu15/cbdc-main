import React from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import items from "../../components/Header/Items";

import { TabMenu } from "primereact/tabmenu";
import WBOHome from "../../components/WBOneTab/WBOHome";
// import WBOCbdcManager from "../../components/WBOneTab/WBOCbdcManager";
// import WBOAccessControls from "../../components/WBOneTab/WBOAccessControls";
// import WBORequests from "../../components/WBOneTab/WBORequests";
// import WBOTreasury from "../../components/WBOneTab/WBOTreasury";

// import WBOMoneySwipeTrans from "../../components/WBOneTab/WBOMoneySwipetrans";
import WB2CbdcManager from "../../components/WBToo2Tab/WB2CbdcManager";
import WB2AccessControl from "../../components/WBToo2Tab/WB2AccessControl";
import WB2Requests from "../../components/WBToo2Tab/WB2Requests";
import WB2Treasury from "../../components/WBToo2Tab/WB2Treasury";
import WB2MoneySwipeTrans from "../../components/WBToo2Tab/WB2MoneySwipeTrans";
import WB2Home from "../../components/WBToo2Tab/WB2Home";
import WB2FxTrade from "../../components/WBToo2Tab/WB2FxTrade";

const WBankTwo = () => {
  const history = useHistory();

  const wizardItems = [
    {
      label: "HOME",
      icon: "pi pi-fw pi-th-large",
      command: () => history.push("/wholesale-bank-two"),
    },
    {
      label: "CBDC MANAGER",
      icon: "pi pi-fw pi-dollar",
      command: () => history.push("/wholesale-bank-two/cbdc-manager"),
    },
    {
      label: "FX TRADE",
      icon: "pi pi-fw pi-desktop",
      command: () => history.push("/wholesale-bank-one/fx-trade"),
    },
    {
      label: "ACCESS CONTROLS",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("/wholesale-bank-two/access-controls"),
    },
    {
      label: "REQUESTS",
      icon: "pi pi-fw pi-sort-alt",
      command: () => history.push("/wholesale-bank-two/requests"),
    },
    {
      label: "TREASURY DASHBOARD",
      icon: "pi pi-fw pi-chart-pie",
      command: () => history.push("/wholesale-bank-two/treasury-dashboard"),
    },
    {
      label: "DECENTRALIZED LIQUIDITY EXCHANGE",
      icon: "pi pi-fw pi-share-alt",
      command: () => history.push("/wholesale-bank-two/treasury-dashboard"),
    },
    {
      label: "INTRASETTLE TRANSACTION DASHBOARD",
      icon: "pi pi-fw pi-book",

      command: () => history.push("/wholesale-bank-two/corda-dashboard"),
    },
    {
      label: "RETAIL CBDC",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/wholesale-bank-two/treasury-dashboard"),
    },
  ];

  return (
    <div>
      <Menubar
        start={
          <NavLink to="/">
            <img
              src={"images/intrasettle_White.svg"}
              alt="logo"
              style={{ width: "13rem" }}
            />
          </NavLink>
        }
        // model={items.wbtwo}
        end={
          <>
            <i
              className="pi text-2xl pi-home pr-2"
              // style={{ fontSize: "1.2em" }}
            ></i>
            <span className="text-2xl">
              Wholesale Bank Two powered by Intrasettle
            </span>
          </>
        }
        className="pt-4 pb-4 layout-topbar"
      />
      <div className=" col-12  justify-content-around pt-8 pl-7">
        <TabMenu
          model={wizardItems}
          activeIndex={0}
          // setActiveIndex={(e) => e.index}
          // end={<Button label="noifications" icon="pi pi-bell" />}
          style={{ fontSize: "1.3rem" }}
        />
      </div>
      <Route exact path={"/wholesale-bank-two"} component={WB2Home} />
      <Route
        path={"/wholesale-bank-two/cbdc-manager"}
        component={WB2CbdcManager}
      />
      <Route path={"/wholesale-bank-one/fx-trade"} component={WB2FxTrade} />
      <Route
        path={"/wholesale-bank-two/access-controls"}
        component={WB2AccessControl}
      />
      <Route path={"/wholesale-bank-two/requests"} component={WB2Requests} />
      <Route
        path={"/wholesale-bank-two/treasury-dashboard"}
        component={WB2Treasury}
      />

      <Route
        path={"/wholesale-bank-two/corda-dashboard"}
        component={WB2MoneySwipeTrans}
      />
    </div>
  );
};

export default WBankTwo;
