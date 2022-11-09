import React, { useRef, useState } from "react";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import InformationSubmitted from "../../CBtabmenu/CBHome/CBDCManager/DefCBDCType/InformationSubmitted";

import SelectWB3TransCBDC from "./WB3TransferCBDC/PushTransferWB3/SelectWB3TransCBDC";
import ParticipantWB3Trans from "./WB3TransferCBDC/PushTransferWB3/ParticipantWB3Trans";
import EnterAmountWB3Trans from "./WB3TransferCBDC/PushTransferWB3/EnterAmountWB3Trans";
import ConfirmWB3Trans from "./WB3TransferCBDC/PushTransferWB3/ConfirmWB3Trans";
import WB3PullSelAsset from "./WB3TransferCBDC/PullTransferWB3/WB3PullSelAsset";
import WB3PullSelParticipant from "./WB3TransferCBDC/PullTransferWB3/WB3PullSelParticipant";
import WB3PullEnterAmount from "./WB3TransferCBDC/PullTransferWB3/WB3PullEnterAmount";
import WB3PullConfirmReq from "./WB3TransferCBDC/PullTransferWB3/WB3PullConfirmReq";

const TransferCBDCWB3 = () => {
  //curent page for  steps is set to default index 0
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeOne, setActiveOne] = useState(0);
  const toast = useRef(null);

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

  const [data2, setData2] = useState({
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
      return <SelectWB3TransCBDC data={data} setData={setData} />;
    } else if (activeIndex === 1) {
      return <ParticipantWB3Trans data={data} setData={setData} />;
    } else if (activeIndex === 2) {
      return <EnterAmountWB3Trans data={data} setData={setData} />;
    } else if (activeIndex === 3) {
      return <ConfirmWB3Trans data={data} setData={setData} />;
    } else if (activeIndex === wizardItems.length) {
      return (
        <InformationSubmitted
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      );
    }
  };
  const pageDisplayOne = () => {
    if (activeOne === 0) {
      return <WB3PullSelAsset data={data2} setData={setData2} />;
    } else if (activeOne === 1) {
      return <WB3PullSelParticipant data={data2} setData={setData2} />;
    } else if (activeOne === 2) {
      return <WB3PullEnterAmount data={data2} setData={setData2} />;
    } else if (activeOne === 3) {
      return <WB3PullConfirmReq data={data2} setData={setData2} />;
    } else if (activeOne === wizardItems.length) {
      return (
        <InformationSubmitted
          activeIndex={activeOne}
          setActiveIndex={setActiveOne}
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
      <div className="flex align-items-center justify-content-around mb-5 mt-5">
        <Button label="Push Transfer" className="p-button-outlined  mb-3" />

        <Button
          label="Pull Transfer(Request CBDC)"
          className="p-button-outlined mr-2 mb-3"
        />
      </div>
      <div className="grid p-fluid">
        <div className="col-12 lg:col-6 card">
          <div className="card mb-5">
            {/* implementing steps to push transfer*/}
            <Steps
              model={wizardItems}
              // activeIndex={activeIndex}
              onSelect={(e) => setActiveIndex(e.index)}
              readOnly={false}
              key={1}
            />
          </div>
          <div className="mt-5">
            {
              //display the steps pages Select Asset, Select Participant, Enter Amount, Confirm Transfer
              pageDisplay()
            }
          </div>
          <div className="mt-5">
            <div className="flex align-items-center justify-content-between">
              <div className="w-6rem h-5rem text-white font-bold flex align-items-center justify-content-center   mr-3">
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
            {/* implementing steps pull transfer*/}
            <Steps
              model={items}
              // activeIndex={activeIndex}
              onSelect={(e) => setActiveOne(e.index)}
              readOnly={false}
            />
          </div>

          <div className="mt-5">
            {
              //display the steps pages Select Asset, Select Participant, Enter Amount, Confirm Request
              pageDisplayOne()
            }
          </div>

          <div>
            <div className="flex align-items-center justify-content-between mt-5">
              <div className="w-6rem h-5rem text-white font-bold flex align-items-center justify-content-center   mr-3">
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
              <div className="w-6rem  text-white font-bold flex align-items-center justify-content-center   mr-3">
                <Toast ref={toast} />
                <Button
                  onClick={() => {
                    if (activeOne === items.length) {
                      accept();
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

export default TransferCBDCWB3;
