import React, { useState } from "react";

import { TabMenu } from "primereact/tabmenu";
import CBIssue from "./CBHome/CBHomeIsuue/CBIssue";
import CBBonds from "./CBHome/CBHomeIsuue/CBBonds";
import CBDCStatus from "./CBHome/CBHomeIsuue/CBDCStatus";
import CBMemberAS from "./CBHome/CBHomeIsuue/CBMemberAS";
import CBDCAssets from "./CBHome/CBHomeIsuue/CBDCAssets";

const CBHome = ({ data, setData }) => {
  const [activeone, setActiveone] = useState(0);
  const [activetwo, setActivetwo] = useState(0);
  const [activethree, setActivethree] = useState(0);

  const DisplayOne = () => {
    if (activeone === 0) {
      return <CBIssue data={data} setData={setData} />;
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
      label: "issue",
      icon: "pi pi-fw pi-dollar",
    },
  ];

  const dataItems = [
    {
      label: "BONDS",
      icon: "pi pi-fw pi-user",
    },
    {
      label: "CBDC Assets",
      icon: "pi pi-fw pi-user",
    },
  ];

  const dataStates = [
    {
      label: "CBDC States",
      icon: "pi pi-fw pi-user",
    },
    {
      label: "Member Access States",
      icon: "pi pi-fw pi-user",
    },
  ];

  return (
    <>
      <div className="grid p-fluid">
        <div className="row-12 col-12 md:col-6 ">
          <div className="card card-w-title">
            <TabMenu
              model={wizardItems}
              activeOne={activeone}
              onTabChange={(e) => setActiveone(e.index)}
              id={wizardItems.id}
            />
            {DisplayOne()}
          </div>
        </div>
        <div className="row-12 col-12 md:col-6 ">
          <div className="card card-w-title">
            <TabMenu
              model={dataItems}
              id={dataItems.id}
              activeTwo={activetwo}
              onTabChange={(e) => setActivetwo(e.index)}
            />

            {DisplayTwo()}
          </div>
        </div>
      </div>
      <TabMenu
        model={dataStates}
        id={dataStates.id}
        activeThree={activethree}
        onTabChange={(e) => setActivethree(e.index)}
      />

      {DisplayThree()}
    </>
  );
};

export default CBHome;
