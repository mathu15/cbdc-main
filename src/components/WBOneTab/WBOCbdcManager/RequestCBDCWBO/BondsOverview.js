import React from "react";

const BondsOverview = ({ data, setData }) => {
  console.log("data", data);
  return (
    <div className="card">
      <div className="flex-column align-items-center justify-content-center">
        <div className=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className="text-center text-2xl ">Total Bonds in Vault</p>
        </div>
        <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-2xl font-bold text-blue-500 mr-3">
            Bonds owned:{data.bonds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BondsOverview;
