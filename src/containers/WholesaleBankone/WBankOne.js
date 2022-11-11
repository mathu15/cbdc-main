import React from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
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
        start={
          <NavLink to="/">
            <img
              src={"images/intrasettle_White.svg"}
              alt="logo"
              style={{ width: "12rem" }}
            />
          </NavLink>
        }
        // model={items.wbone}
        end={
          <>
            <i
              className="pi text-2xl pi-home pr-2"
              // style={{ fontSize: "1.2em" }}
            ></i>
            <span className="text-2xl">
              Wholesale Bank One powered by Intrasettle
            </span>
          </>
        }
        className="pt-4 pb-4 layout-topbar"
      />
      <div className=" col-12  justify-content-around pt-8 pl-7 ">
        <TabMenu
          model={wizardItems}
          activeIndex={0}
          // setActiveIndex={(e) => e.index}
          end={<Button label="noifications" icon="pi pi-bell" />}
          style={{ fontSize: "1.3rem" }}
        />
      </div>
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
        path={"/wholesale-bank-one/corda-dashboard"}
        component={WBOMoneySwipeTrans}
      />
    </div>
  );
};

export default WBankOne;
