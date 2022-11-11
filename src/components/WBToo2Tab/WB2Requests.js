import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import WB2ReqCCSReq from "./WB2Requests/WB2ReqCCSReq";

const WB2Requests = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "CBDC ISSUANCE REQUESTS",
      icon: "pi pi-fw pi-dollar",
      // command: () => history.push("/wholesale-bank-one/cbdc-manager"),
    },
    {
      label: "CBDC REDEMPTION REQUESTS",
      icon: "pi pi-fw pi-sync",
      // command: () => history.push("/wholesale-bank-one/cbdc-manager/cbdc-type"),
    },
    {
      label: "DVP REQUESTS",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
      command: () =>
        history.push("/wholesale-bank-two/cbdc-manager/transfer-cbdc"),
    },
    {
      label: "PULL TRANSFER REQUESTS",
      icon: "pi pi-fw pi-dollar",
      // command: () =>
      // history.push("/wholesale-bank-one/cbdc-manager/issue-cbdc"),
    },
    {
      label: "CROSS CHAIN SWAP REQUESTS",
      icon: "pi pi-fw pi-times",
      command: () =>
        history.push("/wholesale-bank-two/requests/cross-chain-swap-requests"),
    },
    {
      label: "MEMBER ACCESS REQUESTS",
      icon: "pi pi-fw pi-user",
      // command: () =>
      //   history.push("/wholesale-bank-one/requests/cross-chain-swap"),
    },
  ];

  return (
    <div className="card ">
      <h5 className="text-3xl p-4">Requests</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
        style={{ fontSize: "1.2rem" }}
      />
      {/* <Route
        exact
        path={"/wholesale-bank-one/cbdc-manager"}
        component={AvailableCBDCWBO}
      />
      <Route
        path={"/wholesale-bank-one/cbdc-manager/cbdc-type"}
        component={RequestCBDCWBO}
      />
      <Route
        path={"/wholesale-bank-one/cbdc-manager/transfer-cbdc"}
        component={TransferCBDCWBO}
      /> */}
      {/* <Route
        path={"/wholesale-bank-one/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      {/* <Route
        path={"/wholesale-bank-one/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      /> */}
      <Route
        path={"/wholesale-bank-one/requests/cross-chain-swap-requests"}
        component={WB2ReqCCSReq}
      />
    </div>
  );
};

export default WB2Requests;
