import React from "react";
import { Dropdown } from "primereact/dropdown";
import "../../../../../components/dropdown.css";

// page for select paricipant step
const SelectPaticipant = ({ data, setData }) => {
  const dropdownValues = [
    { label: "O=WHOLESALEONE, L=LONDON, CGB" },
    { label: "O=WHOLESALETWO, L=LONDON, CGB" },
    { label: "O=WHOLESALETHREE, L=LONDON, CGB" },
  ];
  const dropplaceholder = <h3>select</h3>;
  return (
    <div className="grid p-fluid">
      <div className="col-12 ">
        <div className="text-center text-xl">
          <p className="text-center text-2xl">
            select available participant to transfer.
          </p>
          <Dropdown
            value={data.notary}
            onChange={(e) => setData({ ...data, notary: e.target.value })}
            options={dropdownValues}
            optionLabel="label"
            placeholder={dropplaceholder}
            style={{ fontSize: "1.4rem" }}
            className="p-2 p-dropdown-item"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectPaticipant;
