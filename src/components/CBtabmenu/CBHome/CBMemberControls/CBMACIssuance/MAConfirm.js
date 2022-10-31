import React from "react";

// review and confirm (display) the accepted asset for issuance to wholesale bank
const MACConfirm = ({ data, setData }) => {
  console.log("data", data);
  return (
    <div className="card">
      <div className="flex-column align-items-center justify-content-center">
        <div className=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className="text-center text-2xl ">
            Confirm Member Access state issuance details
          </p>
        </div>
        <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-2xl font-bold text-blue-500 mr-3">
            Assets:{data.assetvalue.label}
          </p>
          <p className="text-center text-2xl">
            participant:{data.participant.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MACConfirm;
