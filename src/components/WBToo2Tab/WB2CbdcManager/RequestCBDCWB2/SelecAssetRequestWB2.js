import React from "react";
import { Dropdown } from "primereact/dropdown";

// page for select asset to request
const SelectAssetRequestWB2 = ({ data, setData }) => {
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
          <h5>select an asset to issue member access state for.</h5>
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

export default SelectAssetRequestWB2;
