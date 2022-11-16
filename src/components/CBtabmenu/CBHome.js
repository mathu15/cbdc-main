import React, { useState } from "react";

import { TabMenu } from "primereact/tabmenu";
import CBIssue from "./CBHome/CBHomeIsuue/CBIssue";
import CBBonds from "./CBHome/CBHomeIsuue/CBBonds";
import CBDCStatus from "./CBHome/CBHomeIsuue/CBDCStatus";
import CBMemberAS from "./CBHome/CBHomeIsuue/CBMemberAS";
import CBDCAssets from "./CBHome/CBHomeIsuue/CBDCAssets";
import CBTransfer from "./CBHome/CBHomeIsuue/CBTransfer";

const CBHome = ({ data, setData }) => {
  const [activeone, setActiveone] = useState(0);
  const [activetwo, setActivetwo] = useState(0);
  const [activethree, setActivethree] = useState(0);

  const DisplayOne = () => {
    if (activeone === 0) {
      return <CBIssue data={data} setData={setData} />;
    }
    if (activeone === 1) {
      return <CBTransfer data={data} setData={setData} />;
    }
  };
  const DisplayTwo = () => {
    if (activetwo === 0) {
      return <CBBonds data={data} setData={setData} />;
    } else if (activetwo === 1) {
      return <CBDCAssets data={data} setData={setData} />;
    }
  };
  const DisplayThree = () => {
    if (activethree === 0) {
      return <CBDCStatus data={data} setData={setData} />;
    } else if (activethree === 1) {
      return <CBMemberAS data={data} setData={setData} />;
    }
  };

  const wizardItems = [
    {
      label: "CBDC ISSUE",
      icon: "pi text-2xl pi-fw pi-sort-amount-up-alt",
    },
    {
      label: "CBDC TRANSFER",
      icon: "pi text-2xl pi-fw pi-sort-amount-up-alt",
    },
  ];

  const dataItems = [
    {
      label: "MINTED CBDC ASSETS",
      icon: "pi text-2xl pi-fw pi-sun",
    },
    {
      label: "ISSUED CBDC ASSETS",
      icon: "pi text-2xl pi-fw pi-dollar",
    },
  ];

  const dataStates = [
    {
      label: "CBDC STATES",
      icon: "pi text-2xl pi-fw pi-user",
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
          <div className="card card-w-title ">
            <TabMenu
              model={wizardItems}
              activeIndex={activeone}
              onTabChange={(e) => setActiveone(e.index)}
              id={wizardItems.id}
              style={{ fontSize: "1.2rem" }}
            />
            {DisplayOne()}
          </div>
        </div>
        <div className="row-12  col-12 md:col-6 p-5">
          <div className="card card-w-title">
            <TabMenu
              model={dataItems}
              id={dataItems.id}
              activeIndex={activetwo}
              onTabChange={(e) => setActivetwo(e.index)}
              style={{ fontSize: "1.2rem" }}
            />

            {DisplayTwo()}
          </div>
        </div>
      </div>
      <div className="row-12  col-12  p-6">
        <div className="card card-w-title">
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

export default CBHome;
