import React, { useRef, useState } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import SelectAsset from "../../CBtabmenu/CBHome/CBHomeIsuue/SelectAsset";
import SelectPaticipant from "../../CBtabmenu/CBHome/CBHomeIsuue/SelectPaticipant";
import EnterAmount from "../../CBtabmenu/CBHome/CBHomeIsuue/EnterAmount";
import ConfirmIssuance from "../../CBtabmenu/CBHome/CBHomeIsuue/ConfirmIssuance";

const WBTransferCBDC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const menu = useRef(null);
  // const contextMenu = useRef(null);
  // const history = useHistory();
  // const location = useLocation();

  const wizardItems = [
    { label: "Select Asset", to: "/" },
    {
      label: "Select Participant",
      to: "/cbhomeissue/select-participant",
    },
    {
      label: "Enter Amount",
      to: "/cbhomeissue/enter-amount",
    },
    {
      label: "Confirm Transfer",
      to: "/cbhomeissue/confirm",
    },
  ];
  return (
    <div className="col-12 ">
      <div className="card card-w-title">
        <h5>Steps</h5>
        <Steps
          model={wizardItems}
          activeIndex={activeIndex}
          onSelect={(e) => setActiveIndex(e.index)}
          readOnly={false}
        />
      </div>
      <div className="card">
        <Route path={"/"} component={SelectAsset} />
        <Route path={"/select-participant"} component={SelectPaticipant} />
        <Route path={"/enter-amount"} component={EnterAmount} />
        <Route path={"/confirm"} component={ConfirmIssuance} />
      </div>
      <div className="card">
        <div class="flex align-items-center justify-content-between">
          <div class="w-6rem h-5rem text-white font-bold flex align-items-center justify-content-center   mr-3">
            <Button label="BACK" />
          </div>
          <div class="w-6rem  text-white font-bold flex align-items-center justify-content-center   mr-3">
            <Button label="NEXT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WBTransferCBDC;
