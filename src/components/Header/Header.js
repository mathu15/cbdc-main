import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
// import PrimereactStyle from "primefaces.primereact.internal.stylelinks";
// import "primereact/resources/themes/vela-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

import items from "./Items";

const Header = () => {
  return (
    <div>
      <Menubar
        model={items.home}
        // start={<InputText placeholder="Search" type="text" />}
        end={<Button label="Logout" icon="pi pi-power-off" />}
      />
    </div>
  );
};

export default Header;
