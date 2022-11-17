import React, { useState } from "react";
// import { IssuanceService } from "../../IssuanceService";
// review and confirm (display) the entered user input
const ConfirmDefinition = ({ data, setData }) => {
  //using fetch from IssuanceSevice.js
  // const [centralaccount, setCentralaccount] = useState("cash_INR");
  // const issuanceService = new IssuanceService();
  // const centralasset = async () => {
  //   issuanceService.centralasset(data.assetid, centralaccount, data.maxvalue);
  // };
  // centralasset();
  // -------------------------------
  //using fetch directly
  // const url =
  //   // datas.id? "https://thebsv.tech/centralbank/getassets/" + datas.id:
  //   "https://thebsv.tech/centralbank/createcentralasset";
  // // "https://thebsv.tech/centralbank/entitymintasset";
  // // "https://reqres.in/api/users/2";
  // // "https://thebsv.tech/centralbank/makeassetavailableincentralbank";
  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json; charset-UTF-8",
  //   },
  //   body: JSON.stringify({
  //     centralentity: {
  //       entityid: "ENT-CEN-0901",
  //     },
  //     issue: {
  //       enityname: "Asset authority",
  //       assetid: data.assetid,
  //       issuetype: "Cash_BINR",
  //       issuer: "BBI",
  //       contract: "I promise to pay the bearer 1 Rs ",
  //       amount: data.maxvalue,
  //     },
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response);
  //     alert("success");
  //     // setDatas(response);
  //   }).catch((e) => {
  //   console.log("e", e);
  // });

  // --------------------------

  return (
    <div className="card">
      <div className="flex-column align-items-center justify-content-center">
        <div className=" align-items-center border-bottom-1 pb-3 surface-border surface-overlay w-full mt-5">
          <p className="text-center text-2xl ">
            Review and confirm the cbdc asset definition
          </p>
        </div>
        <div className="flex-column align-items-center border-bottom-1 pb-3 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-2xl font-bold text-blue-300 mr-3">
            CBDC Name:{data.assetid}
          </p>
          <p className="text-center text-2xl">
            CBDC Asset decimal:{data.count}
          </p>
        </div>
        <div className=" align-items-center border-bottom-1 pb-3 surface-border surface-overlay w-full mt-5">
          <p className=" text-center text-2xl font-bold text-blue-300 ">
            compliance controls configured
          </p>
        </div>
        <div className="flex-column align-items-center pb-3 border-bottom-1 surface-border surface-overlay w-full mt-5">
          <p className="text-center text-2xl font-bold text-blue-300">
            Notary:{data.notary}
          </p>
          <p className="text-center text-2xl">
            {" "}
            {data.access === true
              ? " Member Access state is requied to hold this CBDC"
              : " Member Access state is not requied"}
          </p>
          <p className="text-center text-2xl">Maximum Value:{data.maxvalue}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDefinition;
