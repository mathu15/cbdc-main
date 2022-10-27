import React, { useRef, useState } from "react";
// import { Route, useHistory, useLocation } from "react-router-dom";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";

import InformationSubmitted from "../../CBtabmenu/CBHome/CBDCManager/DefCBDCType/InformationSubmitted";
import { Toast } from "primereact/toast";
import BondsOverview from "./RequestCBDCWBO/BondsOverview";
import SelecAssettoRequest from "./RequestCBDCWBO/SelecAssettoRequest";
import EnterAmountWBO from "./RequestCBDCWBO/EnterAmountWBO";
import RequestReviewWBO from "./RequestCBDCWBO/RequestReviewWBO";

const RequestCBDCWBO = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);
  const [data, setData] = useState({
    asset: "",
    amount: 0,
    decimal: 2,
    bonds: 1000000000.0,
    issue: "O=CB, L=Dublin, C=IE",
  });

  // const history = useHistory();
  // const location = useLocation();

  const wizardItems = [
    {
      label: "Bonds Overview",
      // command: () => history.push("/central-bank/cbdc-manager/cbdc-type/name"),
    },
    {
      label: "select Asset to request",
      // command: () =>
      // history.push("/central-bank/cbdc-manager/cbdc-type/notary-select"),
    },
    {
      label: "Enter Amount",
      // command: () => history.push("/central-bank/cbdc-manager/cbdc-type/mac"),
    },
    {
      label: "Request Review",
      // command: () =>
      //   history.push("/central-bank/cbdc-manager/cbdc-type/trans-contract"),
    },
  ];

  const pageDisplay = () => {
    if (activeIndex === 0) {
      return <BondsOverview data={data} setData={setData} />;
    } else if (activeIndex === 1) {
      return <SelecAssettoRequest data={data} setData={setData} />;
    } else if (activeIndex === 2) {
      return <EnterAmountWBO data={data} setData={setData} />;
    } else if (activeIndex === 3) {
      return <RequestReviewWBO data={data} setData={setData} />;
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

export default RequestCBDCWBO;
