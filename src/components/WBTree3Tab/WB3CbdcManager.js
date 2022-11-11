import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import AvailableCBDCWB3 from "./WB3CbdcManager/AvailableCBDCWB3";
import RequestCBDCWB3 from "./WB3CbdcManager/RequestCBDCWB3";
import RequestCrossSwapWB3 from "./WB3CbdcManager/RequestCrossSwapWB3";
import TransferCBDCWB3 from "./WB3CbdcManager/TransferCBDCWB3";

const WB3CbdcManager = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "AVAILABLE CBDC",
      icon: "pi pi-fw pi-th-large",
      command: () => history.push("/wholesale-bank-three/cbdc-manager"),
    },
    {
      label: "REQUEST CBDC",
      icon: "pi pi-fw pi-dollar",
      command: () =>
        history.push("/wholesale-bank-three/cbdc-manager/cbdc-type"),
    },
    {
      label: "TRANSFER CBDC",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
      command: () =>
        history.push("/wholesale-bank-three/cbdc-manager/transfer-cbdc"),
    },
    {
      label: "REDEEM CBDC",
      icon: "pi pi-fw pi-sync",
      // command: () =>
      // history.push("/wholesale-bank-three/cbdc-manager/issue-cbdc"),
    },
    {
      label: "REQUEST DVP",
      icon: "pi pi-fw pi-sort-amount-up-alt",
      // command: () =>
      // history.push("/wholesale-bank-three/cbdc-manager/issue-cbdc"),
    },
    {
      label: "REQUEST CROSS CHAIN SWAP",
      icon: "pi pi-fw pi-times",
      command: () =>
        history.push("/wholesale-bank-three/cbdc-manager/cross-chain-swap"),
    },
  ];

  return (
    <div className="card ">
      <h5 className="text-3xl p-4">CBDC Manager</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
        style={{ fontSize: "1.2rem" }}
      />
      <Route
        exact
        path={"/wholesale-bank-three/cbdc-manager"}
        component={AvailableCBDCWB3}
      />
      <Route
        path={"/wholesale-bank-three/cbdc-manager/cbdc-type"}
        component={RequestCBDCWB3}
      />
      <Route
        path={"/wholesale-bank-three/cbdc-manager/transfer-cbdc"}
        component={TransferCBDCWB3}
      />
      {/* <Route
        path={"/wholesale-bank-three/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      {/* <Route
        path={"/wholesale-bank-three/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      <Route
        path={"/wholesale-bank-three/cbdc-manager/cross-chain-swap"}
        component={RequestCrossSwapWB3}
      />
    </div>
  );
};

export default WB3CbdcManager;
