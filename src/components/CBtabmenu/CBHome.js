import React, { useCallback, useEffect, useRef, useState } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import CBIssue from "./CBHome/CBIssue";
import CBBonds from "./CBHome/CBBonds";
import CBDCStatus from "./CBHome/CBDCStatus";
import CBMemberAS from "./CBHome/CBMemberAS";
import CBDCAssets from "./CBHome/CBDCAssets";

const CBHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [layoutColorMode, setLayoutColorMode] = useState("light");
  // const menu = useRef(null);
  // const contextMenu = useRef(null);
  const history = useHistory();
  const location = useLocation();

  // const onColorModeChange = (mode) => {
  //   setLayoutColorMode(mode);
  // };

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
      label: "issue",
      icon: "pi pi-fw pi-dollar",
      command: () => history.push("/central-bank"),
    },
  ];

  const dataItems = [
    {
      label: "BONDS",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/central-bank"),
    },
    {
      label: "CBDC Assets",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/central-bank/cb-assets"),
    },
  ];

  const dataStatus = [
    {
      label: "CBDC Status",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/central-bank"),
    },
    {
      label: "Member Access Status",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/central-bank/member-access"),
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
            <Route exact path={"/central-bank"} component={CBIssue} />
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
              path={"/central-bank"}
              // render={() => (
              //   <CBBonds colorMode={layoutColorMode} location={location} />
              // )}
              component={CBBonds}
            />
            <Route path={"/central-bank/cb-assets"} component={CBDCAssets} />
          </div>
        </div>
      </div>
      <TabMenu
        model={dataStatus}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
      <Route exact path={"/central-bank"} component={CBDCStatus} />
      <Route path={"/central-bank/member-access"} component={CBMemberAS} />
    </>
  );
};

export default CBHome;
