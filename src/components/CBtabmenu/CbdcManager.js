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
      label: "AVAILABLE CBDC",
      icon: "pi pi-fw text-2xl pi-th-large",
      command: () => history.push("/central-bank/cbdc-manager"),
    },
    {
      label: "DEFINE CBDC TYPE",
      icon: "pi pi-fw text-2xl pi-ticket",
      command: () => history.push("/central-bank/cbdc-manager/cbdc-type"),
    },
    {
      label: "ISSUE CBDC",
      icon: "pi pi-fw text-2xl pi-dollar",
      command: () => history.push("/central-bank/cbdc-manager/issue-cbdc"),
    },
  ];

  return (
    <div>
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
    </div>
  );
};

export default CbdcManager;
