import React from "react";

// review and confirm (display) the entered user input
const ConfirmIssuance = ({ data, setData }) => {
  const text = data.assetid.label;

  const myArray = text.split(",");

  console.log("data", data);
  return (
    <div>
      <div className="flex-column align-items-center justify-content-center">
        <div className=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className="font-bold text-center mb-3 text-3xl ">
            Review and confirm the issue of the CBDC asset
          </p>
        </div>
        <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-3xl font-bold text-blue-300 mr-3">
            Asset:{myArray[0]}
          </p>
          <p className="text-center text-3xl">Amount: {data.amount}</p>
          <p className="text-center text-3xl mb-4 ">
            Remaining after Transfer: {data.total - data.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmIssuance;
