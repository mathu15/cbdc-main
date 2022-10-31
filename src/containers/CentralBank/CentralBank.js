import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Menubar } from "primereact/menubar";

import items from "../../components/Header/Items";

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
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => history.push("/central-bank"),
    },
    {
      label: "CBDC Manager",
      icon: "pi pi-fw pi-book",
      command: () => history.push("/central-bank/cbdc-manager"),
    },
    {
      label: "Member  controls",
      icon: "pi pi-fw pi-file-edit",
      command: () => history.push("/central-bank/member-controls"),
    },
    {
      label: "Incoming Requests",
      icon: "pi pi-fw pi-download",
      command: () => history.push("/central-bank/incoming-requests"),
    },
    {
      label: "treasury dashboard",
      icon: "pi pi-fw pi-inbox",
      command: () => history.push("/central-bank/treasury-dashboard"),
    },
    {
      label: "MoneySwipe transaction dashboard",
      icon: "pi pi-fw pi-folder",
      command: () => history.push("/central-bank/moneyswipe-dashboard"),
    },
    {
      label: "reference modals",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("/central-bank/reference-modals"),
    },
    {
      label: "visibility & reissuance",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("/central-bank/visibility-reissuance"),
    },
  ];

  return (
    <div>
      <Menubar
        model={items.cbank}
        end={
          <>
            <i className="pi pi-share-alt" style={{ fontSize: "1.2em" }}>
              Network
            </i>
          </>
        }
      />
      <TabMenu model={wizardItems} />
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
