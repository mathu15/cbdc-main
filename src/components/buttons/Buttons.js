import React from "react";
import { Button } from "primereact/button";

const Buttons = () => {
  return (
    // <div class="flex flex-column">
    //   <Button label="Click" icon="pi pi-check" />
    //   <Button label="Click" icon="pi pi-check" />
    //   <Button label="Click" />
    // </div>
    <div class="card">
      <div class="flex flex-column card-container align-items-center green-container">
        <div class="flex align-items-center justify-content-center h-4rem w-15rem font-bold text-white border-round m-2">
          <Button label="EDIT DNS NAMES" icon="pi  pi-pencil" iconPos="right" />
        </div>
        <div class="flex align-items-center justify-content-center h-4rem w-15rem  font-bold text-white border-round m-2">
          <Button label="CUSTOM THEMES" icon="pi  pi-palette" iconPos="right" />
        </div>
        <div class="flex align-items-center justify-content-center h-4rem w-15rem  font-bold text-white border-round m-2">
          <Button label="RESTART BUILD" />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
