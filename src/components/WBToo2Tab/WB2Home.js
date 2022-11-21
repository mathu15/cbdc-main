import React, { useState } from "react";

import { TabMenu } from "primereact/tabmenu";

import WB2TransferCBDC from "./HomeWBTwo/WB2TransferCBDC";
import WB2RequestDVP from "./HomeWBTwo/WB2RequestDVP";
import WB2CBDCAssets from "./HomeWBTwo/WB2CBDCAssets";
import WB2Bonds from "./HomeWBTwo/WB2Bonds";
import WB2CbdcStates from "./HomeWBTwo/WB2CbdcStates";
import WB2MAC from "./HomeWBTwo/WB2MAC";

const WB2Home = ({ data, setData }) => {
  const [activeone, setActiveone] = useState(0);
  const [activetwo, setActivetwo] = useState(0);
  const [activethree, setActivethree] = useState(0);

  const DisplayOne = () => {
    if (activeone === 0) {
      return <WB2TransferCBDC data={data} setData={setData} />;
    } else if (activeone === 1) {
      return <WB2RequestDVP data={data} setData={setData} />;
    }
  };
  const DisplayTwo = () => {
    if (activetwo === 0) {
      return <WB2CBDCAssets data={data} setData={setData} />;
    } else if (activetwo === 1) {
      return <WB2Bonds data={data} setData={setData} />;
    }
  };
  const DisplayThree = () => {
    if (activethree === 0) {
      return <WB2CbdcStates data={data} setData={setData} />;
    } else if (activethree === 1) {
      return <WB2MAC data={data} setData={setData} />;
    }
  };

  const wizardItems = [
    {
      label: "TRANSFER CBDC",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
    },
    {
      label: "REQUEST DVP",
      icon: "pi pi-fw pi-upload",
    },
  ];

  const dataItems = [
    {
      label: "CBDC ASSETS",
      icon: "pi pi-fw pi-box",
    },
    {
      label: "BONDS",
      icon: "pi pi-fw pi-wallet",
    },
  ];

  const dataStates = [
    {
      label: "MINTED CBDC ASSETS",
      icon: "pi pi-fw pi-sort-alt",
    },
    {
      label: "BALANCE CBDC ASSETS",
      icon: "pi pi-fw pi-user",
    },
  ];

  return (
    <>
      <div className="grid p-fluid p-5">
        <div className="row-12  col-6 md:col-6 p-5">
          <div className="card card-w-title border-1 border-100 h-full">
            <TabMenu
              model={wizardItems}
              activeIndex={activeone}
              onTabChange={(e) => setActiveone(e.index)}
              style={{ fontSize: "1.2rem" }}
            />
            {DisplayOne()}
          </div>
        </div>
        <div className="row-12  col-12 md:col-6 p-5">
          <div className="card card-w-title border-1 border-100 ">
            <TabMenu
              model={dataItems}
              activeIndex={activetwo}
              onTabChange={(e) => setActivetwo(e.index)}
              style={{ fontSize: "1.2rem" }}
            />
            {DisplayTwo()}
          </div>
        </div>
      </div>
      <div className="row-12  col-12  p-6">
        <div className="card card-w-title border-1 border-100 ">
          <TabMenu
            model={dataStates}
            id={dataStates.id}
            activeIndex={activethree}
            onTabChange={(e) => setActivethree(e.index)}
            style={{ fontSize: "1.2rem" }}
          />

          {DisplayThree()}
        </div>
      </div>
    </>
  );
};

export default WB2Home;
