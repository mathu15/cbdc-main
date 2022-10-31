import React from "react";
import { Menubar } from "primereact/menubar";

import { Button } from "primereact/button";

import items from "./Items";

const Header = () => {
  return (
    <div>
      <Menubar
        model={items.home}
        end={<Button label="Logout" icon="pi pi-power-off" />}
      />
    </div>
  );
};

export default Header;
