import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Route, useHistory } from "react-router-dom";
import Hero from "../hero/Hero";
import Buttons from "../buttons/Buttons";
import { BsWrench } from "react-icons/bs";

const TabMenubar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const history = useHistory();

  const wizardItems = [
    {
      label: "CURRENT USER",
      icon: "pi pi-fw text-2xl pi-user",
      command: () => history.push("/"),
    },
    {
      label: "BUILD",
      // icon: "pi pi-fw text-2xl pi-pencil",
      icon: <BsWrench className=" text-3xl pi pi-fw mr-2" />,
      // command: () => history.push("/build"),
    },
  ];

  return (
    <div className="card grid grid-nogutter p-fluid pt-8">
      <div className="col-12 ">
        <div>
          <div className="card w-full ">
            <TabMenu
              model={wizardItems}
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
              style={{ fontSize: "1.4rem" }}
            />
          </div>
          <div className="p-8 m-7">
            <Route exact path={"/"} component={Hero} />
            <Route path={"/build"} component={Buttons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabMenubar;
