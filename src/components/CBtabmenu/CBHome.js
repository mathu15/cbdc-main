import React, { useState } from "react";

import { TabMenu } from "primereact/tabmenu";
import CBIssue from "./CBHome/CBIssue";
import CBBonds from "./CBHome/CBBonds";
import CBDCStatus from "./CBHome/CBDCStatus";
import CBMemberAS from "./CBHome/CBMemberAS";
import CBDCAssets from "./CBHome/CBDCAssets";

const CBHome = ({ data, setData }) => {
  const [activeOne, setActiveOne] = useState(0);
  const [activeTwo, setActiveTwo] = useState(0);
  const [activeThree, setActiveThree] = useState(0);

  const DisplayOne = () => {
    if (activeOne === 0) {
      return <CBIssue data={data} setData={setData} />;
    }
  };
  const DisplayTwo = () => {
    if (activeTwo === 0) {
      return <CBBonds data={data} setData={setData} />;
    } else if (activeTwo === 1) {
      return <CBDCAssets data={data} setData={setData} />;
    }
  };
  const DisplayThree = () => {
    if (activeThree === 0) {
      return <CBDCStatus data={data} setData={setData} />;
    } else if (activeThree === 1) {
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

  const dataStatus = [
    {
      label: "CBDC Status",
      icon: "pi pi-fw pi-user",
    },
    {
      label: "Member Access Status",
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
              activeOne={activeOne}
              onTabChange={(e) => setActiveOne(e.index)}
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
              activeTwo={activeTwo}
              onTabChange={(e) => setActiveTwo(e.index)}
            />

            {DisplayTwo()}
          </div>
        </div>
      </div>
      <TabMenu
        model={dataStatus}
        id={dataStatus.id}
        activeThree={activeThree}
        onTabChange={(e) => setActiveThree(e.index)}
      />

      {DisplayThree()}
    </>
  );
};

export default CBHome;
