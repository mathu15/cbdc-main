import React from "react";
import { Route, useHistory } from "react-router-dom";
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
      label: "MONEYSWIPE TRANSACTION DASHBOARD",
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
        model={items.wbtwo}
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
      <Route exact path={"/wholesale-bank-two"} component={WBOHome} />
      <Route
        path={"/wholesale-bank-two/cbdc-manager"}
        component={WB2CbdcManager}
      />
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
        path={"/wholesale-bank-two/treasury-dashboard"}
        component={WB2Treasury}
      />
      <Route
        path={"/wholesale-bank-two/corda-dashboard"}
        component={WB2MoneySwipeTrans}
      />
      <Route
        path={"/wholesale-bank-two/treasury-dashboard"}
        component={WB2Treasury}
      />
    </div>
  );
};

export default WBankTwo;
