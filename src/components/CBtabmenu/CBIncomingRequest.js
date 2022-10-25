import { TabMenu } from "primereact/tabmenu";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import IssueRequestCB from "./CBHome/CBIncomingRequest/IssueRequestCB";
import MARequestCB from "./CBHome/CBIncomingRequest/MARequestCB";
import RedemptionRequest from "./CBHome/CBIncomingRequest/RedemptionRequest";

const CBIncomingRequest = () => {
  const [activeIndex, setActiveIndex] = useState();
  const [data, setData] = useState({
    // approved: true,
    // requested: true,
    // denied: true,
    RequestingParty: "O=WholesaleBanOne, L=London, C=GB",
    cbname: "Digital_Pound",
    amount: 25500000,
    status: "Requested",
    requestid: 100,
    access: true,
  });
  const history = useHistory();
  const wizardItems = [
    {
      label: "CBDC Issuance",
      icon: "pi pi-fw pi-edit",
      command: () => history.push("/central-bank/incoming-requests"),
    },
    {
      label: "Redemption Requests",
      icon: "pi pi-fw pi-edit",
      command: () =>
        history.push("/central-bank/incoming-requests/redemption-request"),
    },
    {
      label: "Member Access Request",
      icon: "pi pi-fw pi-edit",
      command: () =>
        history.push("/central-bank/incoming-requests/member-access-request"),
    },
  ];

  return (
    <div className="card ">
      <h5>Incoming Requests</h5>
      <TabMenu
        model={wizardItems}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        readOnly={false}
      />
      <Route
        exact
        path={"/central-bank/incoming-requests"}
        component={IssueRequestCB}
      />
      <Route
        path={"/central-bank/incoming-requests/redemption-request"}
        component={RedemptionRequest}
      />
      <Route
        path={"/central-bank/incoming-requests/member-access-request"}
        component={MARequestCB}
      />
    </div>
  );
};

export default CBIncomingRequest;
