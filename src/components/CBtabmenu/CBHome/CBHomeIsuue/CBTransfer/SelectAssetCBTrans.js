import React from "react";
import { Dropdown } from "primereact/dropdown";

// page for select asset step
const SelectAssetCBTrans = ({ data, setData }) => {
  const dropdownValues = [
    { label: "Cash_BINR,ASSET-BND-0001" },
    { label: "Digital_BINR,ASSET-BND-0001" },
    { label: "Digital_USDT,ASSET-BND-0001" },
    { label: "Cash_DINR,ASSET-BND-0001" },
    { label: "Cash_GBP,ASSET-BND-0001" },
    { label: "Cash_INR,ASSET-BND-0001" },
  ];

  return (
    <div className="grid p-fluid">
      <div className="col-12 text-center">
        <div className="text-center text-xl">
          <p className="text-center text-3xl">
            select available asset from the vault to transfer.
          </p>
          <Dropdown
            value={data.assetid}
            onChange={(e) => setData({ ...data, assetid: e.target.value })}
            options={dropdownValues}
            optionLabel="label"
            placeholder="Select"
            style={{ height: "4rem", fontSize: "2.0rem" }}
            className="p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectAssetCBTrans;
