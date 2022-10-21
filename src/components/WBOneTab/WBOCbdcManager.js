import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import IssueCBDCs from "../CBtabmenu/CBHome/CBDCManager/IssueCBDCs";
import AvailableCBDCWBO from "./WBOCbdcManager/AvailableCBDCWBO";
import RequestCBDCWBO from "./WBOCbdcManager/RequestCBDCWBO";
import TransferCBDCWBO from "./WBOCbdcManager/TransferCBDCWBO";

const WBOCbdcManager = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "Available CBDC",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/wholesale-bank-one/cbdc-manager"),
    },
    {
      label: "Request CBDC",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/wholesale-bank-one/cbdc-manager/cbdc-type"),
    },
    {
      label: "Transfer CBDC",
      icon: "pi pi-fw pi-edit",
      command: () =>
        history.push("/wholesale-bank-one/cbdc-manager/transfer-cbdc"),
    },
    {
      label: "Redeem CBDC",
      icon: "pi pi-fw pi-edit",
      // command: () =>
      // history.push("/wholesale-bank-one/cbdc-manager/issue-cbdc"),
    },
    {
      label: "Request DVP",
      icon: "pi pi-fw pi-edit",
      // command: () =>
      // history.push("/wholesale-bank-one/cbdc-manager/issue-cbdc"),
    },
    {
      label: "Request Cross Chain swap",
      icon: "pi pi-fw pi-edit",
      // command: () =>
      // history.push("/wholesale-bank-one/cbdc-manager/issue-cbdc"),
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

export default WBOCbdcManager;
