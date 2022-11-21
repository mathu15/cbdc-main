import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import WB2TreaCBDCAssets from "./WB2Treasury/WB2TreaCBDCAssets";
import WB2TreasureBonds from "./WB2Treasury/WB2TreasureBonds";
import WB2TreasuryBOT from "./WB2Treasury/WB2TreasuryBOT";

// import IssueCBDCs from "../CBtabmenu/CBHome/CBDCManager/IssueCBDCs";
// import AvailableCBDCWBO from "./WBOCbdcManager/AvailableCBDCWBO";
// import RequestCBDCWBO from "./WBOCbdcManager/RequestCBDCWBO";
// import TransferCBDCWBO from "./WBOCbdcManager/TransferCBDCWBO";

const WB2Treasury = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "CBDC ASSETS",
      icon: "pi text-xl pi-fw pi-dollar",
      command: () => history.push("/wholesale-bank-two/treasury-dashboard"),
    },
    {
      label: "BALANCE OVER TIME",
      icon: "pi text-xl pi-fw pi-calendar",
      command: () =>
        history.push(
          "/wholesale-bank-two/treasury-dashboard/balance-over-time"
        ),
    },
    {
      label: "BONDS",
      icon: "pi text-xl pi-fw pi-file-o",
      command: () =>
        history.push("/wholesale-bank-two/treasury-dashboard/bonds"),
    },
  ];

  return (
    <div className="card ">
      <h5 className="text-5xl p-4">Treasury Board</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
        style={{ fontSize: "1.2rem" }}
      />
      <Route
        exact
        path={"/wholesale-bank-two/treasury-dashboard"}
        component={WB2TreaCBDCAssets}
      />
      <Route
        path={"/wholesale-bank-two/treasury-dashboard/balance-over-time"}
        component={WB2TreasuryBOT}
      />
      <Route
        path={"/wholesale-bank-two/treasury-dashboard/bonds"}
        component={WB2TreasureBonds}
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

export default WB2Treasury;
