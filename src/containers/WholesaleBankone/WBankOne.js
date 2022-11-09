import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import items from "../../components/Header/Items";

import { TabMenu } from "primereact/tabmenu";
import WBOHome from "../../components/WBOneTab/WBOHome";
import WBOCbdcManager from "../../components/WBOneTab/WBOCbdcManager";
import WBOAccessControls from "../../components/WBOneTab/WBOAccessControls";
import WBORequests from "../../components/WBOneTab/WBORequests";
import WBOTreasury from "../../components/WBOneTab/WBOTreasury";

import WBOMoneySwipeTrans from "../../components/WBOneTab/WBOMoneySwipetrans";

const WBankOne = () => {
  const history = useHistory();

  const wizardItems = [
    {
      label: "HOME",
      icon: "pi pi-fw pi-th-large",
      command: () => history.push("/wholesale-bank-one"),
    },
    {
      label: "CBDC MANAGER",
      icon: "pi pi-fw pi-dollar",
      command: () => history.push("/wholesale-bank-one/cbdc-manager"),
    },
    {
      label: "ACCESS CONTROLS",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("/wholesale-bank-one/access-controls"),
    },
    {
      label: "REQUESTS",
      icon: "pi pi-fw pi-sort-alt",
      command: () => history.push("/wholesale-bank-one/requests"),
    },
    {
      label: "TREASURY DASHBOARD",
      icon: "pi pi-fw pi-chart-pie",
      command: () => history.push("/wholesale-bank-one/treasury-dashboard"),
    },
    {
      label: "DECENTRALIZED LIQUIDITY EXCHANGE",
      icon: "pi pi-fw pi-share-alt",
      command: () => history.push("/wholesale-bank-one/treasury-dashboard"),
    },
    {
      label: "MONEYSWIPE TRANSACTION DASHBOARD",
      icon: "pi pi-fw pi-book",

      command: () => history.push("/wholesale-bank-one/corda-dashboard"),
    },
    {
      label: "RETAIL CBDC",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/wholesale-bank-one/treasury-dashboard"),
    },
  ];

  return (
    <div>
      <Menubar
        model={items.wbone}
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
      <Route exact path={"/wholesale-bank-one"} component={WBOHome} />
      <Route
        path={"/wholesale-bank-one/cbdc-manager"}
        component={WBOCbdcManager}
      />
      <Route
        path={"/wholesale-bank-one/access-controls"}
        component={WBOAccessControls}
      />
      <Route path={"/wholesale-bank-one/requests"} component={WBORequests} />
      <Route
        path={"/wholesale-bank-one/treasury-dashboard"}
        component={WBOTreasury}
      />
      <Route
        path={"/wholesale-bank-one/treasury-dashboard"}
        component={WBOTreasury}
      />
      <Route
        path={"/wholesale-bank-one/corda-dashboard"}
        component={WBOMoneySwipeTrans}
      />
      <Route
        path={"/wholesale-bank-one/treasury-dashboard"}
        component={WBOTreasury}
      />
    </div>
  );
};

export default WBankOne;
