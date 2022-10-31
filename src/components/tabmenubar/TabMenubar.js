import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Route, useHistory } from "react-router-dom";
import Hero from "../hero/Hero";
import Buttons from "../buttons/Buttons";

const TabMenubar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const history = useHistory();

  const wizardItems = [
    {
      label: "CURRENT USER",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/"),
    },
    {
      label: "BUILD",
      icon: "pi pi-fw pi-pencil",
      command: () => history.push("/build"),
    },
    {
      label: "THEME",
      icon: "pi pi-fw pi-palette",
    },
  ];

  return (
    <div className="grid p-fluid">
      <div className="col-12 ">
        <div className="card card-w-title">
          <h5>TabMenu</h5>
          <p>tabmenu</p>
          <TabMenu
            model={wizardItems}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
          />
          <Route exact path={"/"} component={Hero} />
          <Route path={"/build"} component={Buttons} />
        </div>
      </div>
    </div>
  );
};

export default TabMenubar;
