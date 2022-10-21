import React from "react";

const RequestReviewWBO = ({ data, setData }) => {
  console.log("data", data);
  return (
    <div class="card">
      <div class="flex-column align-items-center justify-content-center">
        <div class=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class="text-center text-2xl ">
            Review and confirm the CBDC Issuance Request
          </p>
        </div>
        <div class="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
            Bonds to swap:{data.asset.label}
          </p>
          <p class="text-center text-2xl">
            {data.asset.label} to be equested:{data.amount}
          </p>
          <p class="text-center text-2xl">Issuing Party:{data.issue}</p>
        </div>
        <div class="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
            Bonds left after request: {data.bonds - data.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestReviewWBO;
