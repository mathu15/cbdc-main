import React, { useRef, useState } from "react";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InformationSubmitted from "../../CBtabmenu/CBHome/CBDCManager/DefCBDCType/InformationSubmitted";
import WBOTSelectAsset from "./WBOTransfer/WBOTSelecAsset";
import WBOTSelectParticipant from "./WBOTransfer/WBOTSelectParticipant";
import WBOTEnterAmount from "./WBOTransfer/WBOTEnterAmount";
import WBOTConfirmTransfer from "./WBOTransfer/WBOTConfirmTransfer";
import { IssuanceServiceWB } from "./issuanceServiceWB";
const WBOTransferCBDC = () => {
  //curent page for  steps is set to default index 0
  const [activeIndex, setActiveIndex] = useState(0);

  //initial state fo user input
  const [data, setData] = useState({
    assetid: "",
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
  const [data1, setData1] = useState({
    assetid: "",
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
      return <WBOTSelectAsset data={data} setData={setData} />;
    } else if (activeIndex === 1) {
      return <WBOTSelectParticipant data={data} setData={setData} />;
    } else if (activeIndex === 2) {
      return <WBOTEnterAmount data={data} setData={setData} />;
    } else if (activeIndex === 3) {
      return <WBOTConfirmTransfer data={data} setData={setData} />;
    } else if (activeIndex === wizardItems.length) {
      return (
        <InformationSubmitted
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      );
    }
  };

  const text = data.assetid.label;
  const subscriber = data.notary.label;
  const myArray = text || text !== undefined ? text.split(",") : "";
  const wholesale =
    subscriber || subscriber !== undefined ? subscriber.split(",") : "";
  // const account = 'CAC-SUB901-0001';
  const issuanceServiceWB = new IssuanceServiceWB();
  const sendsubscribertosubscriber = async () => {
    issuanceServiceWB.sendsubscribertosubscriber(
      myArray[1],
      myArray[0],
      wholesale[1],
      data.amount
      // account
    );
  };

  const showSuccess = () => {
    toast.success("created successfully", {
      // position: "top-right",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "colored",
      // theme: "dark",
    });
  };

  const clickHandler = () => {
    showSuccess();
    setActiveIndex(wizardItems.length);
    sendsubscribertosubscriber();
    setData(data1);
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
  return (
    <div className="col-12 ">
      <div className="card border-1 border-100 bg-gray-800 card-w-title">
        {/* implementing steps */}

        <Steps
          model={wizardItems}
          activeIndex={activeIndex}
          onSelect={(e) => setActiveIndex(e.index)}
          readOnly={false}
          style={{ fontSize: "1.4rem" }}
          className="p-5 m-3 text-2xl"
        />
      </div>
      <div className="card justify-content-center align-items-center pb-6">
        {
          //display the steps pages Select Asset, Select Participant, Enter Amount, Confirm Transfer
          pageDisplay()
        }
      </div>
      <div className="p-5">
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
            <ToastContainer
            // position="top-right"
            // autoClose={5000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            // theme="colored"
            />
            <Button
              onClick={() => {
                if (activeIndex === wizardItems.length) {
                  <InformationSubmitted
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />;
                } else if (activeIndex === wizardItems.length - 1) {
                  clickHandler();
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

export default WBOTransferCBDC;
