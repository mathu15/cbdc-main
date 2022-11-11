import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import WB2ACList from "./WB2AccessControl/WB2ACList";
import WB2ACReqAccess from "./WB2AccessControl/WB2ACReqAccess";

const WB2AccessControl = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "LIST",
      icon: "pi pi-fw pi-check",
      command: () => history.push("/wholesale-bank-two/access-controls"),
    },
    {
      label: "REQUEST ACESS",
      icon: "pi pi-fw pi-user",
      command: () =>
        history.push("/wholesale-bank-two/access-controls/request-access"),
    },
  ];

  return (
    <div className="card ">
      <h5 className="text-3xl p-4">Member Controls</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
        style={{ fontSize: "1.2rem" }}
      />
      <Route
        exact
        path={"/wholesale-bank-two/access-controls"}
        component={WB2ACList}
      />
      <Route
        path={"/wholesale-bank-two/access-controls/request-access"}
        component={WB2ACReqAccess}
      />
    </div>
  );
};

export default WB2AccessControl;
