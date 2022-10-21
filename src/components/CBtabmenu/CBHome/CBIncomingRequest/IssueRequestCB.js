import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

const IssueRequestCB = ({ data, setData }) => {
  // const [data, setData] = useState(data);
  console.log("data", data);
  return (
    <div className="card flex-column align-items-center">
      <h5 className="text-center"> CBDC Issuance Requests</h5>
      <p class=" text-xl text-center  border-bottom-1 surface-border surface-overlay "></p>
      <p className="text-xl text-center">
        Toggle the switch below to enable/disable this control{" "}
        {/* {data.RequestingParty}. */}
      </p>

      <h5 className="text-center">Member Access Required</h5>
      {/* <div className="text-center pt-3"> */}
      {/* <div className="flex-row align-items-center">
          <label htmlFor="Approved">Approved</label>
          <InputSwitch
            id="Approved"
            checked={data.approved}
            onChange={(e) => setData({ ...data, approved: e.value })}
          />
        </div>
        <div className="flex-row align-items-center">
          <label htmlFor="Requested">Requested</label>
          <InputSwitch
            id="Requested"
            checked={data.requested}
            onChange={(e) => setData({ ...data, requested: e.value })}
          />
        </div>
        <div className="flex-row align-items-center">
          <label htmlFor="Denied">Denied</label>
          <InputSwitch
            id="Denied"
            checked={data.denied}
            onChange={(e) => setData({ ...data, denied: e.value })}
          />
        </div>
      </div> */}
    </div>
  );
};

export default IssueRequestCB;
