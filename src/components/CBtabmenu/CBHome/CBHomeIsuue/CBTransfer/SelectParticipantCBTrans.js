import React from "react";
import { Dropdown } from "primereact/dropdown";
import "../../../../../components/dropdown.css";

// page for select paricipant step
const SelectParticipantCBTrans = ({ data, setData }) => {
  const dropdownValues = [
    { label: "WHOLESALEBANKONE,CAC-SUB901-0001" },
    { label: "WHOLESALEBANKTWO,CAC-SUB901-0002" },
    { label: "WHOLESALEBANKTHREE,CAC-SUB901-0003" },
    { label: "WHOLESALEBANKFOUR,CAC-SUB901-0004" },
  ];
  const dropplaceholder = <h3>select</h3>;
  return (
    <div className="grid p-fluid">
      <div className="col-12 ">
        <div className="text-center text-xl">
          <p className="text-center text-3xl">
            select available participant to transfer.
          </p>
          <Dropdown
            value={data.notary}
            onChange={(e) => setData({ ...data, notary: e.target.value })}
            options={dropdownValues}
            optionLabel="label"
            placeholder={dropplaceholder}
            style={{ height: "4rem", fontSize: "1.4rem" }}
            className="p-2 p-dropdown-item"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectParticipantCBTrans;
