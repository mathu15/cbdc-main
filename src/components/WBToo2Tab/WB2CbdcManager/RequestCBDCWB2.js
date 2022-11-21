import React, { useRef, useState } from "react";
// import { Route, useHistory, useLocation } from "react-router-dom";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";

import InformationSubmitted from "../../CBtabmenu/CBHome/CBDCManager/DefCBDCType/InformationSubmitted";
import { Toast } from "primereact/toast";

import BondsOverviewWB2 from "./RequestCBDCWB2/BondsOverviewWB2";
import SelectAssetRequestWB2 from "./RequestCBDCWB2/SelecAssetRequestWB2";
import EnterAmountWB2 from "./RequestCBDCWB2/EnterAmountWB2";
import RequestReviewWB2 from "./RequestCBDCWB2/RequestReviewWB2";

const RequestCBDCWB2 = () => {
  //curent page for  steps is set to default index 0
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);

  //initial state fo user input to request
  const [data, setData] = useState({
    asset: "",
    amount: 0,
    decimal: 2,
    bonds: 1000000000.0,
    issue: "O=CB, L=Dublin, C=IE",
  });

  const wizardItems = [
    {
      label: "Bonds Overview",
    },
    {
      label: "select Asset to request",
    },
    {
      label: "Enter Amount",
    },
    {
      label: "Request Review",
    },
  ];

  //setting active index tab for steps pages
  const pageDisplay = () => {
    if (activeIndex === 0) {
      return <BondsOverviewWB2 data={data} setData={setData} />;
    } else if (activeIndex === 1) {
      return <SelectAssetRequestWB2 data={data} setData={setData} />;
    } else if (activeIndex === 2) {
      return <EnterAmountWB2 data={data} setData={setData} />;
    } else if (activeIndex === 3) {
      return <RequestReviewWB2 data={data} setData={setData} />;
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
  };

  return (
    <div className="col-12 p-5 align-items-center">
      <div className="card border-1 border-100 bg-gray-800 card-w-title">
        {/* implementing steps to request*/}

        <Steps
          model={wizardItems}
          activeIndex={activeIndex}
          onSelect={(e) => setActiveIndex(e.index)}
          readOnly={false}
          style={{ fontSize: "1.4rem" }}
          className="p-5 m-3"
        />
      </div>
      <div className="col-12 card flex  justify-content-center align-items-center pb-6">
        {
          //display the steps pages BondsOverview, SelecAssettoRequest, EnterAmountWBO, RequestReviewWBO
          pageDisplay()
        }
      </div>
      <div className="p-2 flex align-items-center justify-content-center col-12 ">
        <div className="flex align-items-center justify-content-between">
          <div className="w-6rem h-5rem  text-white font-bold flex align-items-center justify-content-center   mr-8">
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
            <Toast ref={toast} />
            <Button
              onClick={() => {
                if (activeIndex === wizardItems.length) {
                  accept();
                } else {
                  setActiveIndex((curPage) => curPage + 1);
                }
              }}
              label={
                activeIndex === wizardItems.length - 1 ? "REQUEST" : "NEXT"
              }
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

export default RequestCBDCWB2;
