import React, { useState } from "react";

import SelectPaticipant from "./CBIssue/SelectPaticipant";
import SelectAsset from "./CBIssue/SelectAsset";
import EnterAmount from "./CBIssue/EnterAmount";
import ConfirmIssuance from "./CBIssue/ConfirmIssuance";
import { Steps } from "primereact/steps";
import { Button } from "primereact/button";

import InformationSubmitted from "../CBDCManager/DefCBDCType/InformationSubmitted";

const CBIssue = () => {
  //curent page for  steps is set to default index 0
  const [activeIndex, setActiveIndex] = useState(0);

  //initial state fo user input
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

  //setting active index tab for steps pages
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
        {/* implementing steps */}
        <h5>Steps</h5>
        <Steps
          model={wizardItems}
          activeIndex={activeIndex}
          onSelect={(e) => setActiveIndex(e.index)}
          readOnly={false}
        />
      </div>
      <div className="card">
        {
          //display the steps pages SelectAsset, SelectPaticipant, EnterAmount, ConfirmIssuance
          pageDisplay()
        }
      </div>
      <div className="card">
        <div className="flex align-items-center justify-content-between">
          <div className="w-6rem h-5rem text-white font-bold flex align-items-center justify-content-center   mr-3">
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
          <div className="w-6rem  text-white font-bold flex align-items-center justify-content-center   mr-3">
            <Button
              onClick={() => {
                if (activeIndex === wizardItems.length) {
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
