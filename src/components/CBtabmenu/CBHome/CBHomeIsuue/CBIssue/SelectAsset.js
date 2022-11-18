import React from "react";
import { Dropdown } from "primereact/dropdown";

// page for select asset step
const SelectAsset = ({ data, setData }) => {
  const dropdownValues = [
    { label: "Digital_INR" },
    { label: "Digital_GBP" },
    { label: "Digital_USD" },
    { label: "Digital_YEN" },
    { label: "Digital_EURO" },
    { label: "Digital_$_FRANK" },
  ];

  return (
    <div className="grid p-fluid">
      <div className="col-12 text-center">
        <div className="text-center text-xl">
          <p className="text-center text-3xl">
            Select available asset from the vault to issue.
          </p>
          <Dropdown
            value={data.asset}
            onChange={(e) => setData({ ...data, asset: e.target.value })}
            options={dropdownValues}
            optionLabel="label"
            placeholder="Select"
            className="p-2 font-bold text-3xl"
            style={{ height: "4rem", fontSize: "2.0rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectAsset;
