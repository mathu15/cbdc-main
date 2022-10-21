import React, { useRef, useState } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import items from "../../components/Header/Items";

import { TabMenu } from "primereact/tabmenu";
import CBHome from "../../components/CBtabmenu/CBHome";
import CbdcManager from "../../components/CBtabmenu/CbdcManager";
import CbMenbercontrols from "../../components/CBtabmenu/CbMenbercontrols";
import CBIncomingRequest from "../../components/CBtabmenu/CBIncomingRequest";
import CBTreasuryDashboard from "../../components/CBtabmenu/CBTreasuryDashboard";
import CBCordaDash from "../../components/CBtabmenu/CBCordaDash";
import CBRefernceModal from "../../components/CBtabmenu/CBRefernceModal";
import CBVisiblity from "../../components/CBtabmenu/CBVisiblity";

const CentralBank = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const menu = useRef(null);
  // const contextMenu = useRef(null);
  const history = useHistory();
  // const location = useLocation();

  const wizardItems = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => history.push("/central-bank"),
    },
    {
      label: "CBDC Manager",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/central-bank/cbdc-manager"),
    },
    {
      label: "Member  controls",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/central-bank/member-controls"),
    },
    {
      label: "Incoming Requests",
      icon: "pi pi-fw pi-file",
      command: () => history.push("/central-bank/incoming-requests"),
    },
    {
      label: "treasury dashboard",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("/central-bank/treasury-dashboard"),
    },
    {
      label: "corda transaction dashboard",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("/central-bank/corda-dashboard"),
    },
    {
      label: "reference modals",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("/central-bank/reference-modals"),
    },
    {
      label: "visibility & reissuance",
      icon: "pi pi-fw pi-cog",
      command: () => history.push("central-bank/visibility-reissuance"),
    },
  ];

  return (
    <div>
      <Menubar
        model={items.cbank}
        // start={<InputText placeholder="Search" type="text" />}
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
        activeIndex={activeIndex}
        setActiveIndex={(e) => e.index}
        end={<Button label="noifications" icon="pi pi-bell" />}
      />
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
      <Route path={"/central-bank/corda-dashboard"} component={CBCordaDash} />
      <Route
        path={"/central-bank/reference-modals"}
        component={CBRefernceModal}
      />
      <Route
        path={"/central-bank/visibility-reissuance"}
        component={CBVisiblity}
      />

      {/* <Buttons
        onTabChange={(e) => {
          setActiveIndex(e.index);
        }}
      />
      <Header
        onTabChange={(e) => {
          setActiveIndex(e.index);
        }}
      />
      <Hero
        onTabChange={(e) => {
          setActiveIndex(e.index);
        }}
      /> */}
    </div>
  );
};

export default CentralBank;
