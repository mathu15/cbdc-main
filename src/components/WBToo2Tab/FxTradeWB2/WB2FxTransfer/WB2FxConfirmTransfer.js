import { React } from "react";

// Review and confirm the transfer of the CBDC asset to another wholesale bank
const WB2FxConfirmTransfer = ({ data, setData }) => {
  const text = data.assetid.label;
  const subscriber = data.notary.label;
  const myArray = text.split(",");
  const wholesale = subscriber.split(",");

  console.log("data", data);
  return (
    <div>
      <div className="flex-column align-items-center justify-content-center">
        <div className=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className="text-center text-3xl ">
            Review and confirm the transfer of the CBDC asset
          </p>
        </div>
        <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-3xl font-bold text-blue-300 mr-3">
            Asset: {myArray[0]}
          </p>
          <p className="text-center text-3xl">
            Receiving Party: {wholesale[0]}
          </p>
          <p className="text-center text-3xl">Amount: {data.amount}</p>
          <p className="text-center text-3xl">
            Remaining after Transfer: {data.total - data.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WB2FxConfirmTransfer;
