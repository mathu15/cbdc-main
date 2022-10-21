import React from "react";

const BondsOverview = ({ data, setData }) => {
  console.log("data", data);
  return (
    <div class="card">
      <div class="flex-column align-items-center justify-content-center">
        <div class=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class="text-center text-2xl ">Total Bonds in Vault</p>
        </div>
        <div class="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
            Bonds owned:{data.bonds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BondsOverview;
