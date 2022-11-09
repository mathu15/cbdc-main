import React from "react";
import { Dropdown } from "primereact/dropdown";

// page for select asset step to pull transfer
const WB2PullSelAsset = ({ data, setData }) => {
  const dropdownValues = [
    { label: "Digital_Dollar" },
    { label: "Digital_Peso" },
    { label: "Digital_Yen" },
    { label: "Digital_Pound" },
    { label: "Digital_Euro" },
    { label: "Digital_$_Frank" },
  ];
  // const [options] = useState(dropdownValues);
  return (
    <div className="grid p-fluid">
      <div className="col-12 ">
        <div className="card">
          <h5>select available asset from the vault to transfer.</h5>
          <Dropdown
            value={data.asset}
            onChange={(e) => setData({ ...data, asset: e.target.value })}
            options={dropdownValues}
            optionLabel="label"
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default WB2PullSelAsset;
