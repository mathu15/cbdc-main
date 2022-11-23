import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import FXWBOBonds from "./WBOFXTradeTrans/FXWBOBonds";
import FXWBOCBDCAssets from "./WBOFXTradeTrans/FXWBOCBDCAssets";
import FXWBOCbdcStates from "./WBOFXTradeTrans/FXWBOCbdcStates";
import FXWBORequestDVP from "./WBOFXTradeTrans/FXWBORequestDVP";
import FXWBOTradeData from "./WBOFXTradeTrans/FXWBOTradeData";

const WBOFXTradeTrans = () => {
  const [activeIndex, setActiveIndex] = useState();
  const history = useHistory();
  const wizardItems = [
    {
      label: "TRANSFER CBDC",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
      command: () => history.push("/wholesale-bank-one/fx-trade"),
    },
    {
      label: "MINTED CBDC ASSETS",
      icon: "pi pi-fw pi-box",
      command: () => history.push("/wholesale-bank-one/fx-trade/fx-assets"),
    },
    {
      label: "BALANCE CBDC ASSETS",
      icon: "pi pi-fw pi-wallet",
      command: () => history.push("/wholesale-bank-one/fx-trade/fx-bonds"),
    },
    {
      label: "WHOLESALE BANK TRANSACTIONS",
      icon: "pi text-2xl pi-fw pi-sort-alt",

      command: () =>
        history.push("/wholesale-bank-one/fx-trade/fx-transactions"),
    },
    {
      label: "REQUEST DVP",
      icon: "pi pi-fw pi-sort-amount-up-alt",
      command: () =>
        history.push("/wholesale-bank-one/fx-trade/fx-request-dvp"),
    },
  ];

  return (
    <div className="card">
      <h5 className="text-5xl p-4">FX Trade</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
        style={{ fontSize: "1.2rem" }}
      />
      <Route
        exact
        path={"/wholesale-bank-one/fx-trade"}
        component={FXWBOTradeData}
      />
      <Route
        path={"/wholesale-bank-one/fx-trade/fx-assets"}
        component={FXWBOCBDCAssets}
      />
      <Route
        path={"/wholesale-bank-one/fx-trade/fx-bonds"}
        component={FXWBOBonds}
      />
      <Route
        path={"/wholesale-bank-one/fx-trade/fx-transactions"}
        component={FXWBOCbdcStates}
      />
      <Route
        path={"/wholesale-bank-one/fx-trade/fx-request-dvp"}
        component={FXWBORequestDVP}
      />
    </div>
  );
};

export default WBOFXTradeTrans;
