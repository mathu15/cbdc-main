import React, { useState, useRef } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";

import { OverlayPanel } from "primereact/overlaypanel";
import { Dialog } from "primereact/dialog";

import { Card } from "primereact/card";
const IssueRequestCB = () => {
  const [displayBasic, setDisplayBasic] = useState();
  const [data, setData] = useState({
    approved: true,
    requested: true,
    denied: true,
  });

  console.log("data", data);
  return (
    <>
      <h5 className="text-center">CBDC Issuance Requests</h5>
      <div className="flex text-center justify-content-center pt-3">
        <div className="flex-row align-items-center">
          <label htmlFor="Approved" style={{ display: "inline-block" }}>
            Approved
          </label>
          <InputSwitch
            id="Approved"
            checked={data.approved}
            onChange={(e) => setData({ ...data, approved: e.value })}
          />
        </div>
        <div className="flex-row align-items-center">
          <label htmlFor="Requested" style={{ display: "inline-block" }}>
            Requested
          </label>
          <InputSwitch
            id="Requested"
            checked={data.requested}
            onChange={(e) => setData({ ...data, requested: e.value })}
          />
        </div>
        <div className="flex-row align-items-center">
          <label htmlFor="Denied" style={{ display: "inline-block" }}>
            Denied
          </label>
          <InputSwitch
            id="Denied"
            checked={data.denied}
            onChange={(e) => setData({ ...data, denied: e.value })}
          />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default IssueRequestCB;
