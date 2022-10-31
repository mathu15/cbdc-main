import React from "react";
import { InputNumber } from "primereact/inputnumber";

const WBOTEnterAmount = ({ data, setData }) => {
  console.log("data", data);
  return (
    <div className="card">
      <div className="flex-column align-items-center justify-content-center">
        <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-2xl font-bold text-blue-500 mr-3">
            Maximum transaction value with this asset {data.maxvalue}
          </p>
          <InputNumber
            id="amount"
            value={data.amount}
            onChange={(e) => setData({ ...data, amount: e.value })}
            showButtons
            mode="decimal"
          ></InputNumber>
          <label htmlFor="amount">Amount</label>
        </div>
      </div>
    </div>
  );
};

export default WBOTEnterAmount;
