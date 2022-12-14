import React from "react";
import { Dropdown } from "primereact/dropdown";
import "../../../../components/dropdown.css";
// select asset to transfer to another wholesale bank
const WB2FxReqSelecAsset = ({ data, setData }) => {
  const dropdownValues = [
    { label: "Cash_BINR,ASSET-BND-0001,INR" },
    { label: "Digital_BINR,ASSET-BND-0002,INR" },
    { label: "Digital_USDT,ASSET-BND-0003,USD" },
    { label: "Cash_DINR,ASSET-BND-0004,INR" },
    { label: "Cash_GBP,ASSET-BND-0005,GBP" },
    { label: "Cash_INR,ASSET-BND-0006,INR" },
  ];
  const dropdownValues1 = [
    { label: "Cash_BINR,ASSET-BND-0001,INR" },
    { label: "Digital_BINR,ASSET-BND-0002,INR" },
    { label: "Digital_USDT,ASSET-BND-0003,USD" },
    { label: "Cash_DINR,ASSET-BND-0004,INR" },
    { label: "Cash_GBP,ASSET-BND-0005,GBP" },
    { label: "Cash_INR,ASSET-BND-0006,INR" },
  ];

  return (
    <div className="grid p-fluid">
      <div className="col-12 text-center">
        <div className="text-center text-xl">
          <p className="text-center text-2xl">
            select available asset from the vault to transfer.
          </p>
          <Dropdown
            value={data.assetid}
            onChange={(e) => setData({ ...data, assetid: e.target.value })}
            options={dropdownValues}
            optionLabel="label"
            placeholder="select"
            className="p-2 font-bold text-3xl p-dropdown-item"
            style={{ height: "4rem", fontSize: "2.0rem" }}
          />
        </div>
        <div className="text-center text-xl p-5">
          <p className="text-center text-2xl">
            select available asset from the vault to transfer.
          </p>
          <Dropdown
            value={data.assetid1}
            onChange={(e) => setData({ ...data, assetid1: e.target.value })}
            options={dropdownValues1}
            optionLabel="label"
            placeholder="select"
            className="p-2 font-bold text-3xl p-dropdown-item"
            style={{ height: "4rem", fontSize: "2.0rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WB2FxReqSelecAsset;
