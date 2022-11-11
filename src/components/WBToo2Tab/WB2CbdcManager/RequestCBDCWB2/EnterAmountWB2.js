import React from "react";

import { InputNumber } from "primereact/inputnumber";

// enter amount to request-- user input
const EnterAmountWB2 = ({ data, setData }) => {
  return (
    <div className="grid p-fluid  text center">
      <div className="col-12 md:col-12">
        <div className="p-5">
          <div className="text-center">
            <p className=" pb-3 text-2xl">
              Enter the amount of
              <span className="text-blue-300"> {data.asset.label} </span>to
              request in exchange for bonds
            </p>
            <p className="text-2xl pb-3">Asset Decimal:{data.decimal}</p>
          </div>
          <span className="p-float-label">
            <InputNumber
              id="amount"
              value={data.amount}
              onChange={(e) => setData({ ...data, amount: e.value })}
              showButtons
              mode="decimal"
              style={{ fontSize: "1.4rem" }}
              className="p-2"
            ></InputNumber>
            <label className="text-2xl" htmlFor="amount">
              Amount
            </label>
            <div className="text-center">
              <p className="text-2xl">
                Digital Pound to be requested:{data.amount}
              </p>
              <p className="text-2xl">
                Bonds left after request:{+(data.bonds - data.amount)}
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnterAmountWB2;
