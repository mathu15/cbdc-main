import React from "react";
import { Dropdown } from "primereact/dropdown";

// page for select participant step to pushtransfer
const ParticipantWB2Trans = ({ data, setData }) => {
  const dropdownValues = [
    { label: "O=WHOLESALETWO, L=LONDON, CGB" },
    { label: "O=WHOLESALETHREE, L=LONDON, CGB" },
  ];

  return (
    <div className="grid p-fluid">
      <div className="col-12 ">
        <div className="card">
          <h5>select available asset from the vault to transfer.</h5>
          <Dropdown
            value={data.notary}
            onChange={(e) => setData({ ...data, notary: e.target.value })}
            options={dropdownValues}
            optionLabel="label"
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default ParticipantWB2Trans;
