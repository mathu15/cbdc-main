import React, { useState } from "react";

import { TabMenu } from "primereact/tabmenu";

import WBOFxTransferCBDC from "./FxTradeWBO/WBFxTransferCBDC";
import WBFxRequestDVP from "./FxTradeWBO/WBFxRequestDVP";
import WBFxBonds from "./FxTradeWBO/WBFxBonds";
import WBFxCbdcStates from "./FxTradeWBO/WBFxCbdcStates";
import WBFxMAC from "./FxTradeWBO/WBFxMAC";
import WBFxCBDCAssets from "./FxTradeWBO/WBFxCBDCAssets";

const WBOFxTrade = ({ data, setData }) => {
  const [activeone, setActiveone] = useState(0);
  const [activetwo, setActivetwo] = useState(0);
  const [activethree, setActivethree] = useState(0);

  const DisplayOne = () => {
    if (activeone === 0) {
      return <WBOFxTransferCBDC data={data} setData={setData} />;
    } else if (activeone === 1) {
      return <WBFxRequestDVP data={data} setData={setData} />;
    }
  };
  const DisplayTwo = () => {
    if (activetwo === 0) {
      return <WBFxCBDCAssets data={data} setData={setData} />;
    } else if (activetwo === 1) {
      return <WBFxBonds data={data} setData={setData} />;
    }
  };
  const DisplayThree = () => {
    if (activethree === 0) {
      return <WBFxCbdcStates data={data} setData={setData} />;
    } else if (activethree === 1) {
      return <WBFxMAC data={data} setData={setData} />;
    }
  };

  const wizardItems = [
    {
      label: "TRANSFER CBDC",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
    },
    {
      label: "FX TRADE",
      icon: "pi pi-fw pi-upload",
    },
  ];

  const dataItems = [
    {
      label: "MINTED CBDC ASSETS",
      icon: "pi pi-fw pi-box",
    },
    {
      label: "BALANCE CBDC ASSETS",
      icon: "pi pi-fw pi-wallet",
    },
  ];

  const dataStates = [
    {
      label: "WHOLESALE BANK TRANSACTIONS",
      icon: "pi text-2xl pi-fw pi-sort-alt",
    },
    {
      label: "MEMBER ACCESS STATES",
      icon: "pi text-2xl pi-fw pi-user",
    },
  ];

  return (
    <>
      <div className="grid p-fluid p-5">
        <div className="row-12  col-6 md:col-6 p-5">
          <div className="  card card-w-title border-1 border-100 h-full  ">
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
          <div className=" card card-w-title border-1 border-100 ">
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

export default WBOFxTrade;
