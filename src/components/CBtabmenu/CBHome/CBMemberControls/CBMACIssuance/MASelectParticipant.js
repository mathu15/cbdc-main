import React from "react";
import { Dropdown } from "primereact/dropdown";

const MASelectParticipant = ({ data, setData }) => {
  const dropdownValues = [
    { name: "WholesaleBankONE, L=London, C=GB" },
    { name: "WholesaleBankTWO, L=London, C=GB" },
    { name: "WholesaleBankTHREE, L=London, C=GB" },
  ];

  return (
    <div className="grid p-fluid">
      <div className="col-12 ">
        <div className="card">
          <h5>select participant on the Corda network to issue to.</h5>
          <Dropdown
            value={data.participant}
            onChange={(e) => setData({ ...data, participant: e.value })}
            options={dropdownValues}
            optionLabel="name"
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default MASelectParticipant;
