import React from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import { Menubar } from "primereact/menubar";

import { TabMenu } from "primereact/tabmenu";
import CBHome from "../../components/CBtabmenu/CBHome";
import CbdcManager from "../../components/CBtabmenu/CbdcManager";
import CbMenbercontrols from "../../components/CBtabmenu/CbMenbercontrols";
import CBIncomingRequest from "../../components/CBtabmenu/CBIncomingRequest";
import CBTreasuryDashboard from "../../components/CBtabmenu/CBTreasuryDashboard";
import CBMoneySwipeDash from "../../components/CBtabmenu/CBMoneySwipeDash";
import CBRefernceModal from "../../components/CBtabmenu/CBRefernceModal";
import CBVisiblity from "../../components/CBtabmenu/CBVisiblity";

const CentralBank = () => {
  const history = useHistory();
  const wizardItems = [
    {
      label: "HOME",
      icon: "pi text-2xl  pi-fw pi-th-large",
      command: () => history.push("/central-bank"),
    },
    {
      label: "CBDC MANAGER",
      icon: "pi text-2xl pi-fw pi-dollar",
      command: () => history.push("/central-bank/cbdc-manager"),
    },
    {
      label: "MEMBER CONTROLS",
      icon: "pi text-2xl pi-fw pi-cog",
      command: () => history.push("/central-bank/member-controls"),
    },
    {
      label: "INCOMING REQUESTS",
      icon: "pi text-2xl pi-fw pi-download",
      command: () => history.push("/central-bank/incoming-requests"),
    },
    {
      label: "TREASURY DASHBOARD",
      icon: "pi text-2xl pi-fw pi-chart-pie",
      command: () => history.push("/central-bank/treasury-dashboard"),
    },
    {
      label: "MONEYSWIPE TRANSACTION DASHBOARD",
      icon: "pi text-2xl pi-fw pi-book",
      command: () => history.push("/central-bank/moneyswipe-dashboard"),
    },
    {
      label: "REFERENCE MODELS",
      icon: "pi text-2xl pi-fw pi-share-alt",
      command: () => history.push("/central-bank/reference-modals"),
    },
    {
      label: "VISIBILITY AND REISSUANCE",
      icon: "pi text-2xl pi-fw pi-eye",
      command: () => history.push("/central-bank/visibility-reissuance"),
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
        // model={items.cbank}
        end={
          <>
            <i
              className="pi text-2xl pi-home pr-2"
              // style={{ fontSize: "1.2em" }}
            ></i>
            <span className="text-2xl">
              Central Bank Powered by Intrasettle
            </span>
          </>
        }
        // style={{ fontSize: "1.4rem" }}
        className="pt-4 pb-4 layout-topbar"
      />
      <div className=" col-12  justify-content-around pt-8">
        <TabMenu
          model={wizardItems}
          style={{ fontSize: "1.2rem" }}
          // className="pt-1 pb-1 "
          // , position: "fixed", zIndex: "10"
        />
      </div>
      <Route exact path={"/central-bank"} component={CBHome} />
      <Route path={"/central-bank/cbdc-manager"} component={CbdcManager} />
      <Route
        path={"/central-bank/member-controls"}
        component={CbMenbercontrols}
      />
      <Route
        path={"/central-bank/incoming-requests"}
        component={CBIncomingRequest}
      />
      <Route
        path={"/central-bank/treasury-dashboard"}
        component={CBTreasuryDashboard}
      />
      <Route
        path={"/central-bank/moneyswipe-dashboard"}
        component={CBMoneySwipeDash}
      />
      <Route
        path={"/central-bank/reference-modals"}
        component={CBRefernceModal}
      />
      <Route
        path={"/central-bank/visibility-reissuance"}
        component={CBVisiblity}
      />
    </div>
  );
};

export default CentralBank;
