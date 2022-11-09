import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import WB3ACList from "../WBTree3Tab/WB3AcessControl/WB3ACList";
import WB3ACReqAccess from "./WB3AcessControl/WB3ACReqAccess";

const WB3AccessControl = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "LIST",
      icon: "pi pi-fw pi-check",
      command: () => history.push("/wholesale-bank-three/access-controls"),
    },
    {
      label: "REQUEST ACESS",
      icon: "pi pi-fw pi-user",
      command: () =>
        history.push("/wholesale-bank-three/access-controls/request-access"),
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
        path={"/wholesale-bank-three/access-controls"}
        component={WB3ACList}
      />
      <Route
        path={"/wholesale-bank-three/access-controls/request-access"}
        component={WB3ACReqAccess}
      />
    </div>
  );
};

export default WB3AccessControl;
