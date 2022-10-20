import React from "react";

const MACConfirm = ({ data, setData }) => {
  console.log("data", data);
  return (
    <div class="card">
      <div class="flex-column align-items-center justify-content-center">
        <div class=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class="text-center text-2xl ">
            Confirm Member Access state issuance details
          </p>
        </div>
        <div class="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
            Assets:{data.assetvalue.label}
          </p>
          <p class="text-center text-2xl">
            participant:{data.participant.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MACConfirm;
