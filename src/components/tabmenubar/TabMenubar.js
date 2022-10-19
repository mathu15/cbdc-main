import React, { useRef, useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Route, useHistory, useLocation } from "react-router-dom";
import Hero from "../hero/Hero";
// import Buttons from "../buttons/Buttons";

const TabMenubar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menu = useRef(null);
  const contextMenu = useRef(null);
  const history = useHistory();
  // const location = useLocation();

  // const checkActiveIndex = useCallback(() => {
  //   const paths = location.pathname.split("/");
  //   const currentPath = paths[paths.length - 1];

  //   switch (currentPath) {
  //     case "seat":
  //       setActiveIndex(1);
  //       break;
  //     case "payment":
  //       setActiveIndex(2);
  //       break;
  //     case "confirmation":
  //       setActiveIndex(3);
  //       break;
  //     default:
  //       break;
  //   }
  // }, [location]);

  // useEffect(() => {
  //   checkActiveIndex();
  // }, [checkActiveIndex]);

  // const toggleMenu = (event) => {
  //   menu.current.toggle(event);
  // };
  const wizardItems = [
    {
      label: "CURRENT USER",
      icon: "pi pi-fw pi-user",
      command: () => history.push("/"),
    },
    {
      label: "BUILD",
      icon: "pi pi-fw pi-pencil",
      // command: () => history.push("/build"),
    },
    {
      label: "THEME",
      icon: "pi pi-fw pi-palette",
    },
  ];

  // const onContextRightClick = (event) => {
  //   contextMenu.current.show(event);
  // };

  // const menubarEndTemplate = () => {
  //   return (
  //     <span className="p-input-icon-left">
  //       <i className="pi pi-search" />
  //       <InputText type="text" placeholder="Search" />
  //     </span>
  //   );
  // };

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
          {/* <Route exact path={"/build"} component={Buttons} /> */}
        </div>
      </div>
    </div>
  );
};

export default TabMenubar;
