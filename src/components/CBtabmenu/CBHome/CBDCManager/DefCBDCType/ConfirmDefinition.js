import React from "react";

const ConfirmDefinition = ({ data, setData }) => {
  console.log("data", data);
  return (
    <div class="card">
      <div class="flex-column align-items-center justify-content-center">
        <div class=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class="text-center text-2xl ">
            Review and confirm the cbdc asset definition
          </p>
        </div>
        <div class="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
            CBDC Name:{data.cbname}
          </p>
          <p class="text-center text-2xl">CBDC Asset decimal:{data.decimal}</p>
        </div>
        <div class=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class=" text-center text-2xl font-bold text-blue-500 ">
            compliance controls configured
          </p>
        </div>
        <div class="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p class="text-center text-2xl font-bold text-blue-500">
            Notary:{data.notary}
          </p>
          <p class="text-center text-2xl">
            {" "}
            {data.access === true
              ? " Member Access state is requied to hold this CBDC"
              : " Member Access state is not requied"}
          </p>
          <p class="text-center text-2xl">Maximum Value:{data.maxvalue}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDefinition;
