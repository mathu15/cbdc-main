import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import AvailableCBDC from "./CBHome/CBDCManager/AvailableCBDC";
import DefCBDCType from "./CBHome/CBDCManager/DefCBDCType";
import IssueCBDCs from "./CBHome/CBDCManager/IssueCBDCs";

const CbdcManager = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "Available CBDC",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/central-bank/cbdc-manager"),
    },
    {
      label: "Define CBDC Type",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/central-bank/cbdc-manager/cbdc-type"),
    },
    {
      label: "Issue CBDC",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/central-bank/cbdc-manager/issue-cbdc"),
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
        path={"/central-bank/cbdc-manager"}
        component={AvailableCBDC}
      />
      <Route
        path={"/central-bank/cbdc-manager/cbdc-type"}
        component={DefCBDCType}
      />
      <Route
        path={"/central-bank/cbdc-manager/issue-cbdc"}
        component={IssueCBDCs}
      />
    </div>
  );
};

export default CbdcManager;
