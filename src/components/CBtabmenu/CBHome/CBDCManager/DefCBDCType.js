import React, { useRef, useState } from "react";
// import { Route, useHistory, useLocation } from "react-router-dom";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import CBName from "./DefCBDCType/CBName";
import NotarySel from "./DefCBDCType/NotarySel";
import MAC from "./DefCBDCType/MAC";
import TranscationControl from "./DefCBDCType/TranscationControl";
import AssetControl from "./DefCBDCType/AssetControl";
import ConfirmDefinition from "./DefCBDCType/ConfirmDefinition";

const DefCBDCType = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  });

  // const history = useHistory();
  // const location = useLocation();

  const wizardItems = [
    {
      label: "CBDC Name & Decimal",
      // command: () => history.push("/central-bank/cbdc-manager/cbdc-type/name"),
    },
    {
      label: "Notary Selection",
      // command: () =>
      // history.push("/central-bank/cbdc-manager/cbdc-type/notary-select"),
    },
    {
      label: "Member Access cotrol",
      // command: () => history.push("/central-bank/cbdc-manager/cbdc-type/mac"),
    },
    {
      label: "Tansaction contracts",
      // command: () =>
      //   history.push("/central-bank/cbdc-manager/cbdc-type/trans-contract"),
    },
    {
      label: "Asset Controls",
      // command: () =>
      // history.push("/central-bank/cbdc-manager/cbdc-type/acess-controls"),
    },
    {
      label: "Confirm Definition",
      // command: () =>
      // history.push("/central-bank/cbdc-manager/cbdc-type/confirm"),
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
      <div className="card">
        {pageDisplay()}

        {/* <Route
        path={"/central-bank/cbdc-manager/cbdc-type/name"}
        component={CBName}
        />
        <Route
        path={"/central-bank/cbdc-manager/cbdc-type/notary-select/"}
        component={NotarySel}
        />
        <Route
        path={"/central-bank/cbdc-manager/cbdc-type/mac"}
        component={MAC}
        />
        <Route
        path={"/central-bank/cbdc-manager/cbdc-type/trans-contract"}
        component={TranscationControl}
        />
        <Route
        path={"/central-bank/cbdc-manager/cbdc-type/acess-controls"}
        component={AssetControl}
        />
        <Route
        path={"/central-bank/cbdc-manager/cbdc-type/confirm"}
        component={ConfirmDefinition}
        /> */}
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
            />
          </div>
          <div class="w-6rem  text-white font-bold flex align-items-center justify-content-center   mr-3">
            <Button
              onClick={() => {
                if (activeIndex === wizardItems.length - 1) {
                  console.log("data", data);
                } else {
                  setActiveIndex((curPage) => curPage + 1);
                }
              }}
              label={activeIndex === wizardItems.length - 1 ? "SUBMIT" : "NEXT"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefCBDCType;
