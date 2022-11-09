import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import AvailableCBDCWB2 from "./WB2CbdcManager/AvailableCBDCWB2";
import RequestCBDCWB2 from "./WB2CbdcManager/RequestCBDCWB2";
import RequestCrossSwapWB2 from "./WB2CbdcManager/RequestCrossSwapWB2";
import TransferCBDCWB2 from "./WB2CbdcManager/TransferCBDCWB2";

const WB2CbdcManager = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "AVAILABLE CBDC",
      icon: "pi pi-fw pi-th-large",
      command: () => history.push("/wholesale-bank-two/cbdc-manager"),
    },
    {
      label: "REQUEST CBDC",
      icon: "pi pi-fw pi-dollar",
      command: () => history.push("/wholesale-bank-two/cbdc-manager/cbdc-type"),
    },
    {
      label: "TRANSFER CBDC",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
      command: () =>
        history.push("/wholesale-bank-two/cbdc-manager/transfer-cbdc"),
    },
    {
      label: "REDEEM CBDC",
      icon: "pi pi-fw pi-sync",
      // command: () =>
      // history.push("/wholesale-bank-two/cbdc-manager/issue-cbdc"),
    },
    {
      label: "REQUEST DVP",
      icon: "pi pi-fw pi-sort-amount-up-alt",
      // command: () =>
      // history.push("/wholesale-bank-two/cbdc-manager/issue-cbdc"),
    },
    {
      label: "REQUEST CROSS CHAIN SWAP",
      icon: "pi pi-fw pi-times",
      command: () =>
        history.push("/wholesale-bank-two/cbdc-manager/cross-chain-swap"),
    },
  ];

  return (
    <div className="card ">
      <h5>CBDC Manager</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
      />
      <Route
        exact
        path={"/wholesale-bank-two/cbdc-manager"}
        component={AvailableCBDCWB2}
      />
      <Route
        path={"/wholesale-bank-two/cbdc-manager/cbdc-type"}
        component={RequestCBDCWB2}
      />
      <Route
        path={"/wholesale-bank-two/cbdc-manager/transfer-cbdc"}
        component={TransferCBDCWB2}
      />
      {/* <Route
        path={"/wholesale-bank-two/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      {/* <Route
        path={"/wholesale-bank-two/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      <Route
        path={"/wholesale-bank-two/cbdc-manager/cross-chain-swap"}
        component={RequestCrossSwapWB2}
      />
    </div>
  );
};

export default WB2CbdcManager;
