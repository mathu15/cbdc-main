import React, { useState } from "react";

import { Dropdown } from "primereact/dropdown";

// import { CountryService } from "../service/CountryService";
// import { NodeService } from "../service/NodeService";

export const SelectAsset = () => {
  // const [floatValue, setFloatValue] = useState("");
  // const [autoValue, setAutoValue] = useState(null);
  // const [selectedAutoValue, setSelectedAutoValue] = useState(null);
  // const [autoFilteredValue, setAutoFilteredValue] = useState([]);
  // const [calendarValue, setCalendarValue] = useState(null);
  // const [inputNumberValue, setInputNumberValue] = useState(null);
  // const [chipsValue, setChipsValue] = useState([]);
  // const [sliderValue, setSliderValue] = useState("");
  // const [ratingValue, setRatingValue] = useState(null);
  // const [colorValue, setColorValue] = useState("1976D2");
  // const [knobValue, setKnobValue] = useState(20);
  // const [radioValue, setRadioValue] = useState(null);
  // const [checkboxValue, setCheckboxValue] = useState([]);
  // const [switchValue, setSwitchValue] = useState(false);
  // const [listboxValue, setListboxValue] = useState(null);
  const [dropdownValue, setDropdownValue] = useState(null);
  // const [multiselectValue, setMultiselectValue] = useState(null);
  // const [toggleValue, setToggleValue] = useState(false);
  // const [selectButtonValue1, setSelectButtonValue1] = useState(null);
  // const [selectButtonValue2, setSelectButtonValue2] = useState(null);
  // const [inputGroupValue, setInputGroupValue] = useState(false);
  // const [selectedNode, setSelectedNode] = useState(null);
  // const [treeSelectNodes, setTreeSelectNodes] = useState(null);

  const dropdownValues = [
    { name: "Digital_Dollar", code: "NY" },
    { name: "Digital_Peso", code: "RM" },
    { name: "Digital_Yen", code: "LDN" },
    { name: "Digital_Pound", code: "IST" },
    { name: "Digital_Euro", code: "PRS" },
    { name: "Digital_$_Frank", code: "PRS" },
  ];

  return (
    <div className="grid p-fluid">
      <div className="col-12 ">
        <div className="card">
          <h5>select an available CBDC asset to issue</h5>
          <Dropdown
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.value)}
            options={dropdownValues}
            optionLabel="name"
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectAsset;
