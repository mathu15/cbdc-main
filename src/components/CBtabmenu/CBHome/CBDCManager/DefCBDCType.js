import React, { useRef, useState } from "react";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import CBName from "./DefCBDCType/CBName";
import NotarySel from "./DefCBDCType/NotarySel";
import MAC from "./DefCBDCType/MAC";
import TranscationControl from "./DefCBDCType/TranscationControl";
import AssetControl from "./DefCBDCType/AssetControl";
import ConfirmDefinition from "./DefCBDCType/ConfirmDefinition";
import InformationSubmitted from "./DefCBDCType/InformationSubmitted";
import { Toast } from "primereact/toast";
import axios from "axios";

const DefCBDCType = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);
  const [data, setData] = useState({
    cbname: "",
    decimal: {},
    option: "",
    access: true,
    select: "",
    accesconrol: "",
    confirm: "",
    transvalue: "",
    maxvalue: "",
    minvalue: "",
    displayvalue: "",
    notary: "",
    skip: "(skip this step if no controls are required)",
  });

  const wizardItems = [
    {
      label: "CBDC Name & Decimal",
    },
    {
      label: "Notary Selection",
    },
    {
      label: "Member Access control",
    },
    {
      label: "Tansaction Contracts",
    },
    {
      label: "Asset Controls",
    },
    {
      label: "Confirm Definition",
    },
  ];

  const pageDisplay = () => {
    if (activeIndex === 0) {
      return <CBName data={data} setData={setData} />;
    } else if (activeIndex === 1) {
      return <NotarySel data={data} setData={setData} />;
    } else if (activeIndex === 2) {
      return <MAC data={data} setData={setData} />;
    } else if (activeIndex === 3) {
      return <TranscationControl data={data} setData={setData} />;
    } else if (activeIndex === 4) {
      return <AssetControl data={data} setData={setData} />;
    } else if (activeIndex === 5) {
      return <ConfirmDefinition data={data} setData={setData} />;
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
      detail: "You have submitted",
      life: 3000,
    });
    // InformationSubmitted();
  };
  const reject = () => {
    toast.current.show({
      severity: "error",
      summary: "Rejected",
      detail: "something went wrong",
      life: 3000,
    });
  };

  // const confirm = (event) => {
  //   confirmPopup({
  //     target: event.currentTarget,
  //     message: "Are you sure you want to proceed?",
  //     icon: "pi pi-exclamation-triangle",
  //     accept,
  //   });
  // };
  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedAssetsData = { ...data };
    const response = await axios.post(
      "http://localhost:5000/assets",
      updatedAssetsData
    );
    if (response.status === 201) {
      accept();
    } else {
      reject();
    }
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
                  submitHandler();
                } else {
                  setActiveIndex((curPage) => curPage + 1);
                }
              }}
              label={activeIndex === wizardItems.length - 1 ? "SUBMIT" : "NEXT"}
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

export default DefCBDCType;
