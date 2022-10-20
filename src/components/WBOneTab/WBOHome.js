import React, { useCallback, useEffect, useRef, useState } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";

import WBTransferCBDC from "./HomeWBO/WBTransferCBDC";
// import WBRequestDVP from "./HomeWBO/WBRequestDVP";
import WBCBDCAssets from "./HomeWBO/WBCBDCAssets";
// import WBBonds from "./HomeWBO/WBBonds";
import WBCbdcStates from "./HomeWBO/WBCbdcStates";
// import WBMAC from "./HomeWBO/WBMAC";

const WBOHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const checkActiveIndex = useCallback(() => {
    const paths = location.pathname.split("/");
    const currentPath = paths[paths.length - 1];

    switch (currentPath) {
      case "central-bank":
        setActiveIndex(1);
        break;
      case "assets":
        setActiveIndex(2);
        break;
      case "member-access":
        setActiveIndex(2);
        break;
    }
  }, [Location]);

  useEffect(() => {
    checkActiveIndex();
  }, [checkActiveIndex]);

  const wizardItems = [
    {
      label: "TRANSFER CBDC",
      icon: "pi pi-fw pi-dollar",
      command: () => history.push("/wholesale-bank-one"),
    },
    {
      label: "REQUEST DVP",
      icon: "pi pi-fw pi-dollar",
      // command: () => history.push("/central-bank"),
    },
  ];

  const dataItems = [
    {
      label: "CBDC ASSETS",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/wholesale-bank-one"),
    },
    {
      label: "BONDS",
      icon: "pi pi-fw pi-user",
      // command: () => history.push("/central-bank"),
    },
  ];

  const dataStatus = [
    {
      label: "CBDC STATES",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/wholesale-bank-one"),
    },
    {
      label: "MEMBER ACCESS STATES",
      icon: "pi pi-fw pi-user",
      // command: () => history.push("/central-bank/member-access"),
    },
  ];

  return (
    <>
      <div className="grid p-fluid">
        <div className="row-12 col-12 md:col-6 ">
          <div className="card card-w-title">
            <TabMenu
              model={wizardItems}
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
            />
            <Route
              exact
              path={"/wholesale-bank-one"}
              component={WBTransferCBDC}
            />
            {/* <Route
              exact
              path={"/wholesale-bank-one"}
              component={WBRequestDVP}
            /> */}
          </div>
        </div>
        <div className="row-12 col-12 md:col-6 ">
          <div className="card card-w-title">
            <TabMenu
              model={dataItems}
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
            />
            <Route
              exact
              path={"/wholesale-bank-one"}
              component={WBCBDCAssets}
            />
            {/* <Route path={"/wholesale-bank-one"} component={WBBonds} /> */}
          </div>
        </div>
      </div>
      <TabMenu
        model={dataStatus}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
      <Route exact path={"/wholesale-bank-one"} component={WBCbdcStates} />
      {/* <Route path={"/wholesale-bank-one"} component={WBMAC} /> */}
    </>
  );
};

export default WBOHome;
