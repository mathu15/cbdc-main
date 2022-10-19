import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

const NotarySel = ({ data, setData }) => {
  // const [radioValue, setRadioValue] = useState(null);
  return (
    <div className="card flex-column align-items-center">
      <p class=" text-xl text-left  ">
        Select the permitted notary for the CBDC.
      </p>
      <p className="text-xl text-left">
        The CBDC ASSet will be tied to this notary.
      </p>

      <p className=" text-xl text-left  ">
        Assets on different notaries will be swapped using the cross chain swap
        feature
      </p>

      <div class="flex align-items-center">
        <div className="grid">
          <div className="col-12 ">
            <div className="field-radiobutton">
              <RadioButton
                inputId="option1"
                name="option"
                value="O-NotaryONEService, L-London, C-GB"
                checked={data.notary === "O-NotaryONEService, L-London, C-GB"}
                onChange={(e) => setData({ ...data, notary: e.target.value })}
              />
              <label htmlFor="option1">
                O-NotaryONEService, L-London, C-GB
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="field-radiobutton">
              <RadioButton
                inputId="option2"
                name="option"
                value="O-NotaryTWOService, L-London, C-GB"
                checked={data.notary === "O-NotaryTWOService, L-London, C-GB"}
                onChange={(e) => setData({ ...data, notary: e.target.value })}
              />
              <label htmlFor="option2">
                O-NotaryTWOService, L-London, C-GB
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotarySel;
