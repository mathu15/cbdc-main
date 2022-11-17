import React from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
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
      label: "INTRASETTLE TRANSACTION DASHBOARD",
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
        start={
          <NavLink to="/">
            <img
              src={"images/intrasettle_White.svg"}
              alt="logo"
              style={{ width: "12rem" }}
            />
          </NavLink>
        }
        // model={items.wbthree}
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
      <div className=" col-12  justify-content-around pt-8 pl-7">
        <TabMenu
          model={wizardItems}
          activeIndex={0}
          // setActiveIndex={(e) => e.index}
          end={<Button label="noifications" icon="pi pi-bell" />}
          style={{ fontSize: "1.3rem" }}
        />
      </div>
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
        path={"/wholesale-bank-three/corda-dashboard"}
        component={WB3MoneySwipeTrans}
      />
    </div>
  );
};

export default WBankThree;
