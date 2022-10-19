import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import navitems from "./navitem";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <div>
      <Menubar model={navitems} />
      {/* <TabMenu
        model={navitems}
        // activeIndex={activeIndex}
        // onTabChange={(e) => setActiveIndex(e.index)}
      /> */}
    </div>
  );
};

export default Navbar;
