import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import items from "../../components/Header/Items";

import { TabMenu } from "primereact/tabmenu";

import WB3CbdcManager from "../../components/WBTree3Tab/WB3CbdcManager";
import WB3AccessControl from "../../components/WBTree3Tab/WB3AccessControl";
import WB3Treasury from "../../components/WBTree3Tab/WB3Treasury";
import WB3MoneySwipeTrans from "../../components/WBTree3Tab/WB3MoneySwipetrans";
import WB3Home from "../../components/WBTree3Tab/WB3Home";
import WB3Requests from "../../components/WBTree3Tab/WB3Requests";

const WBankThree = () => {
  const history = useHistory();

  const wizardItems = [
    {
      label: "HOME",
      icon: "pi pi-fw pi-th-large",
      command: () => history.push("/wholesale-bank-three"),
    },
    {
      label: "CBDC MANAGER",
      icon: "pi pi-fw pi-dollar",
      command: () => history.push("/wholesale-bank-three/cbdc-manager"),
    },
    {
      label: "ACCESS CONTROLS",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("/wholesale-bank-three/access-controls"),
    },
    {
      label: "REQUESTS",
      icon: "pi pi-fw pi-sort-alt",
      command: () => history.push("/wholesale-bank-three/requests"),
    },
    {
      label: "TREASURY DASHBOARD",
      icon: "pi pi-fw pi-chart-pie",
      command: () => history.push("/wholesale-bank-three/treasury-dashboard"),
    },
    {
      label: "DECENTRALIZED LIQUIDITY EXCHANGE",
      icon: "pi pi-fw pi-share-alt",
      command: () => history.push("/wholesale-bank-three/treasury-dashboard"),
    },
    {
      label: "MONEYSWIPE TRANSACTION DASHBOARD",
      icon: "pi pi-fw pi-book",

      command: () => history.push("/wholesale-bank-three/corda-dashboard"),
    },
    {
      label: "RETAIL CBDC",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/wholesale-bank-three/treasury-dashboard"),
    },
  ];

  return (
    <div>
      <Menubar
        model={items.wbthree}
        end={
          <>
            <i className="pi pi-share-alt" style={{ fontSize: "1.2em" }}>
              Network
            </i>
          </>
        }
      />
      <TabMenu
        model={wizardItems}
        activeIndex={0}
        // setActiveIndex={(e) => e.index}
        end={<Button label="noifications" icon="pi pi-bell" />}
      />
      <Route exact path={"/wholesale-bank-three"} component={WB3Home} />
      <Route
        path={"/wholesale-bank-three/cbdc-manager"}
        component={WB3CbdcManager}
      />
      <Route
        path={"/wholesale-bank-three/access-controls"}
        component={WB3AccessControl}
      />
      <Route path={"/wholesale-bank-three/requests"} component={WB3Requests} />
      <Route
        path={"/wholesale-bank-three/treasury-dashboard"}
        component={WB3Treasury}
      />
      <Route
        path={"/wholesale-bank-three/treasury-dashboard"}
        component={WB3Treasury}
      />
      <Route
        path={"/wholesale-bank-three/corda-dashboard"}
        component={WB3MoneySwipeTrans}
      />
      <Route
        path={"/wholesale-bank-three/treasury-dashboard"}
        component={WB3Treasury}
      />
    </div>
  );
};

export default WBankThree;
