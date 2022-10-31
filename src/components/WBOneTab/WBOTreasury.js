import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

// import IssueCBDCs from "../CBtabmenu/CBHome/CBDCManager/IssueCBDCs";
// import AvailableCBDCWBO from "./WBOCbdcManager/AvailableCBDCWBO";
// import RequestCBDCWBO from "./WBOCbdcManager/RequestCBDCWBO";
// import TransferCBDCWBO from "./WBOCbdcManager/TransferCBDCWBO";
import WBOTreaCBDCAssets from "./WBOTreasury/WBOTreaCBDCAssets";
import WBOTreasureBonds from "./WBOTreasury/WBOTreasureBonds";
import WTreauryBOT from "./WBOTreasury/WTreauryBOT";

const WBOTreasury = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "CBDC Assets",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/wholesale-bank-one/treasury-dashboard"),
    },
    {
      label: "Balance over Time",
      icon: "pi pi-fw pi-edit",
      command: () =>
        history.push(
          "/wholesale-bank-one/treasury-dashboard/balance-over-time"
        ),
    },
    {
      label: "Bonds",
      icon: "pi pi-fw pi-edit",
      command: () =>
        history.push("/wholesale-bank-one/treasury-dashboard/bonds"),
    },
  ];

  return (
    <div className="card ">
      <h5>Treasury Board</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
      />
      <Route
        exact
        path={"/wholesale-bank-one/treasury-dashboard"}
        component={WBOTreaCBDCAssets}
      />
      <Route
        path={"/wholesale-bank-one/treasury-dashboard/balance-over-time"}
        component={WTreauryBOT}
      />
      <Route
        path={"/wholesale-bank-one/treasury-dashboard/bonds"}
        component={WBOTreasureBonds}
      />
      {/* <Route
        path={"/wholesale-bank-one/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      {/* <Route
        path={"/wholesale-bank-one/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      {/* <Route
        path={"/wholesale-bank-one/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
    </div>
  );
};

export default WBOTreasury;
