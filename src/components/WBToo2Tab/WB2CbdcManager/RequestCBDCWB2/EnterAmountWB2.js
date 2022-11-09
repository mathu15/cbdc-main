import React from "react";

import { InputNumber } from "primereact/inputnumber";

// enter amount to request-- user input
const EnterAmountWB2 = ({ data, setData }) => {
  return (
    <div className="grid p-fluid">
      <div className="col-12 md:col-12">
        <div className="card">
          <h5 className="align-self-center pb-3">
            Enter the amount of {data.asset.label} to request in exchange for
            bonds
          </h5>
          <h5>Asset Decimal:{data.decimal}</h5>
          <span className="p-float-label">
            <InputNumber
              id="amount"
              value={data.amount}
              onChange={(e) => setData({ ...data, amount: e.value })}
              showButtons
              mode="decimal"
            ></InputNumber>
            <label htmlFor="amount">Amount</label>
            <h5>Digital Pound to be requested:{data.amount}</h5>
            <h5>Bonds left after request:{+(data.bonds - data.amount)}</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EnterAmountWB2;
