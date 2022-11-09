import React from "react";

// Review and confirm the CBDC Issuance Request
const RequestReviewWB3 = ({ data, setData }) => {
  console.log("data", data);
  return (
    <div className="card">
      <div className="flex-column align-items-center justify-content-center">
        <div className=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className="text-center text-2xl ">
            Review and confirm the CBDC Issuance Request
          </p>
        </div>
        <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-2xl font-bold text-blue-500 mr-3">
            Bonds to swap:{data.asset.label}
          </p>
          <p className="text-center text-2xl">
            {data.asset.label} to be equested:{data.amount}
          </p>
          <p className="text-center text-2xl">Issuing Party:{data.issue}</p>
        </div>
        <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-2xl font-bold text-blue-500 mr-3">
            Bonds left after request: {data.bonds - data.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestReviewWB3;
