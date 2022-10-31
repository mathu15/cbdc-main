import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import CBListRevoke from "./CBHome/CBMemberControls/CBListRevoke";
import CBMCIssue from "./CBHome/CBMemberControls/CBMCIssue";

const CbMenbercontrols = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "List/Revoke",
      icon: "pi pi-fw pi-check",
      command: () => history.push("/central-bank/member-controls"),
    },
    {
      label: "Issue",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/central-bank/member-controls/issue"),
    },
  ];

  return (
    <div className="card ">
      <h5>Member Controls</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
      />
      <Route
        exact
        path={"/central-bank/member-controls"}
        component={CBListRevoke}
      />
      <Route
        path={"/central-bank/member-controls/issue"}
        component={CBMCIssue}
      />
    </div>
  );
};

export default CbMenbercontrols;
