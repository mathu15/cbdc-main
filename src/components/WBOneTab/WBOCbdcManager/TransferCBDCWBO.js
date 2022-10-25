import React, { useRef, useState } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import SelectAsset from "../../CBtabmenu/CBHome/CBHomeIsuue/SelectAsset";
import SelectPaticipant from "../../CBtabmenu/CBHome/CBHomeIsuue/SelectPaticipant";
import EnterAmount from "../../CBtabmenu/CBHome/CBHomeIsuue/EnterAmount";
import ConfirmIssuance from "../../CBtabmenu/CBHome/CBHomeIsuue/ConfirmIssuance";
import SelectWBOTransCBDC from "./WBOTransferCBDC/SelectWBOTransCBDC";
import ParticipantWBOTrans from "./WBOTransferCBDC/ParticipantWBOTrans";
import EnterAmountWBOTrans from "./WBOTransferCBDC/EnterAmountWBOTrans";
import ConfirmWBOTrans from "./WBOTransferCBDC/ConfirmWBOTrans";
import InformationSubmitted from "../../CBtabmenu/CBHome/CBDCManager/DefCBDCType/InformationSubmitted";

const TransferCBDCWBO = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeOne, setActiveOne] = useState(0);
  const toast = useRef(null);
  const key = 1;
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
      return <SelectWBOTransCBDC data={data} setData={setData} />;
    } else if (activeIndex === 1 && key === 1) {
      return <ParticipantWBOTrans data={data} setData={setData} />;
    } else if (activeIndex === 2 && key === 1) {
      return <EnterAmountWBOTrans data={data} setData={setData} />;
    } else if (activeIndex === 3 && key === 1) {
      return <ConfirmWBOTrans data={data} setData={setData} />;
    } else if (activeIndex === wizardItems.length) {
      return <InformationSubmitted />;
    }
  };
  const pageDisplayOne = () => {
    if (activeOne === 0) {
      return <SelectWBOTransCBDC data={data} setData={setData} />;
    } else if (activeOne === 1 && key === 1) {
      return <ParticipantWBOTrans data={data} setData={setData} />;
    } else if (activeOne === 2 && key === 1) {
      return <EnterAmountWBOTrans data={data} setData={setData} />;
    } else if (activeOne === 3 && key === 1) {
      return <ConfirmWBOTrans data={data} setData={setData} />;
    } else if (activeOne === wizardItems.length) {
      return <InformationSubmitted />;
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
      label: "Confirm Transfer",
    },
  ];

  const items = [
    { label: "Select Asset" },
    {
      label: "Select Participant",
    },
    {
      label: "Enter Amount",
    },
    {
      label: "Confirm Request",
    },
  ];

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
    <>
      <div class="flex align-items-center justify-content-around mb-5 mt-5">
        <Button label="Push Transfer" className="p-button-outlined  mb-3" />

        <Button
          label="Pull Transfer(Request CBDC)"
          className="p-button-outlined mr-2 mb-3"
        />
      </div>
      <div className="grid p-fluid">
        <div className="col-12 lg:col-6 card">
          <div className="card mb-5">
            <Steps
              model={wizardItems}
              // activeIndex={activeIndex}
              onSelect={(e) => setActiveIndex(e.index)}
              readOnly={false}
              key={1}
            />
          </div>
          <div className="mt-5">
            {pageDisplay()}
            {/* <Route path={"/"} component={SelectWBOTransCBDC} />
            <Route
              path={"/select-participant"}
              component={ParticipantWBOTrans}
            />
            <Route path={"/enter-amount"} component={EnterAmountWBOTrans} />
            <Route path={"/confirm"} component={ConfirmWBOTrans} /> */}
          </div>
          <div className="mt-5">
            <div class="flex align-items-center justify-content-between">
              <div class="w-6rem h-5rem text-white font-bold flex align-items-center justify-content-center   mr-3">
                <Button
                  disabled={activeIndex === 0}
                  onClick={() => {
                    setActiveIndex((curPage) => curPage - 1);
                  }}
                  label="BACK"
                  style={{
                    display:
                      activeIndex === wizardItems.length ? "none" : "block",
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
                    activeIndex === wizardItems.length - 1 ? "TRANSFER" : "NEXT"
                  }
                  style={{
                    display:
                      activeIndex === wizardItems.length ? "none" : "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 lg:col-6 cad">
          <div className="card mb-5">
            <Steps
              model={items}
              // activeIndex={activeIndex}
              onSelect={(e) => setActiveOne(e.index)}
              readOnly={false}
            />
          </div>

          <div className="mt-5">{pageDisplayOne()}</div>

          <div>
            <div class="flex align-items-center justify-content-between mt-5">
              <div class="w-6rem h-5rem text-white font-bold flex align-items-center justify-content-center   mr-3">
                <Button
                  disabled={activeOne === 0}
                  onClick={() => {
                    setActiveOne((curPage) => curPage - 1);
                  }}
                  label="BACK"
                  style={{
                    display: activeOne === items.length ? "none" : "block",
                  }}
                />
              </div>
              <div class="w-6rem  text-white font-bold flex align-items-center justify-content-center   mr-3">
                <Toast ref={toast} />
                <Button
                  onClick={() => {
                    if (activeOne === items.length) {
                      {
                        accept();
                      }
                    } else {
                      setActiveOne((curPage) => curPage + 1);
                    }
                  }}
                  label={activeOne === items.length - 1 ? "SUBMIT" : "NEXT"}
                  style={{
                    display: activeOne === items.length ? "none" : "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferCBDCWBO;
