import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import WB3TreaCBDCAssets from "./WB3Treasury/WB3TreaCBDCAssets";
import WB3TreasureBonds from "./WB3Treasury/WB3TreasureBonds";
import WB3TreasuryBOT from "./WB3Treasury/WB3TreasuryBOT";

// import IssueCBDCs from "../CBtabmenu/CBHome/CBDCManager/IssueCBDCs";
// import AvailableCBDCWBO from "./WBOCbdcManager/AvailableCBDCWBO";
// import RequestCBDCWBO from "./WBOCbdcManager/RequestCBDCWBO";
// import TransferCBDCWBO from "./WBOCbdcManager/TransferCBDCWBO";

const WB3Treasury = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "CBDC Assets",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/wholesale-bank-three/treasury-dashboard"),
    },
    {
      label: "Balance over Time",
      icon: "pi pi-fw pi-edit",
      command: () =>
        history.push(
          "/wholesale-bank-three/treasury-dashboard/balance-over-time"
        ),
    },
    {
      label: "Bonds",
      icon: "pi pi-fw pi-edit",
      command: () =>
        history.push("/wholesale-bank-three/treasury-dashboard/bonds"),
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
        path={"/wholesale-bank-three/treasury-dashboard"}
        component={WB3TreaCBDCAssets}
      />
      <Route
        path={"/wholesale-bank-three/treasury-dashboard/balance-over-time"}
        component={WB3TreasuryBOT}
      />
      <Route
        path={"/wholesale-bank-three/treasury-dashboard/bonds"}
        component={WB3TreasureBonds}
      />
      {/* <Route
        path={"/wholesale-bank-three/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      {/* <Route
        path={"/wholesale-bank-three/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      {/* <Route
        path={"/wholesale-bank-three/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
    </div>
  );
};

export default WB3Treasury;
