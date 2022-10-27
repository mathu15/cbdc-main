import React, { useRef, useState } from "react";

import ConfirmIssuance from "./CBHomeIsuue/ConfirmIssuance";
import EnterAmount from "./CBHomeIsuue/EnterAmount";
import SelectAsset from "./CBHomeIsuue/SelectAsset";
import SelectPaticipant from "./CBHomeIsuue/SelectPaticipant";
import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import InformationSubmitted from "./CBDCManager/DefCBDCType/InformationSubmitted";

const CBIssue = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);
  const [data, setData] = useState({
    asset: "",
    decimal: 2,
    notary: "",
    amount: 0,
    total: 25000000,
    remaining: 25000000,
    option: "",
    access: true,
    select: "",
    accesconrol: "",
    confirm: "",
    transvalue: "",
    maxvalue: 10000000,
    minvalue: "",
    displayvalue: "",
  });

  const pageDisplay = () => {
    if (activeIndex === 0) {
      return <SelectAsset data={data} setData={setData} />;
    } else if (activeIndex === 1) {
      return <SelectPaticipant data={data} setData={setData} />;
    } else if (activeIndex === 2) {
      return <EnterAmount data={data} setData={setData} />;
    } else if (activeIndex === 3) {
      return <ConfirmIssuance data={data} setData={setData} />;
    } else if (activeIndex === wizardItems.length) {
      return (
        <InformationSubmitted
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      );
    }
  };

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
    // InformationSubmitted();
  };

  const wizardItems = [
    { label: "Select Asset" },
    {
      label: "Select Participant",
    },
    {
      label: "Enter Amount",
    },
    {
      label: "Confirm Issuance",
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
      <div className="card">{pageDisplay()}</div>
      <div className="card">
        <div class="flex align-items-center justify-content-between">
          <div class="w-6rem h-5rem text-white font-bold flex align-items-center justify-content-center   mr-3">
            <Button
              disabled={activeIndex === 0}
              onClick={() => {
                setActiveIndex((curPage) => curPage - 1);
              }}
              label="BACK"
              style={{
                display: activeIndex === wizardItems.length ? "none" : "block",
              }}
            />
          </div>
          <div class="w-6rem  text-white font-bold flex align-items-center justify-content-center   mr-3">
            <Toast ref={toast} />
            <Button
              onClick={() => {
                if (activeIndex === wizardItems.length) {
                  {
                    accept();
                  }
                } else {
                  setActiveIndex((curPage) => curPage + 1);
                }
              }}
              label={activeIndex === wizardItems.length - 1 ? "ISSUE" : "NEXT"}
              style={{
                display: activeIndex === wizardItems.length ? "none" : "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CBIssue;
