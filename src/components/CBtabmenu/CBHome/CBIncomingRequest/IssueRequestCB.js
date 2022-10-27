import React, { useState, useRef } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";

import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";

import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";

const IssueRequestCB = () => {
  const [displayBasic, setDisplayBasic] = useState();
  const [data, setData] = useState({
    approved: true,
    requested: true,
    denied: true,
    party: "O-WHOLESALEONE, L=LONDON, C=GB ",
    cbdc_name: "Digital_pound",
    request_id: 1000,
    amount: 25000000,
    bonds: 25000000,
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
      </div>
      <div className="flex text-center justify-content-center pt-3">
        <div className="text-center pt-3">
          <div className="card p-fluid">
            <Dialog
              // header="Select rules to Add"
              visible={displayBasic}
              // style={{ width: "30vw" }}
              modal
              onHide={() => setDisplayBasic(false)}
            >
              <Card style={{ cursor: "pointer" }}>
                <div class="flex-column align-items-center justify-content-center">
                  <div class=" align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
                    <p class="text-center text-2xl ">
                      Resolve Issuance :Requested
                    </p>
                  </div>
                  <div class="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
                    <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
                      Request ID:{data.request_id}
                    </p>
                    <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
                      Requesting Party:{data.party}
                    </p>
                    <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
                      CBDC Name:{data.cbdc_name}
                    </p>
                    <p class=" text-center text-2xl font-bold text-blue-500 mr-3">
                      Amount:{data.amount}
                    </p>

                    <p class="text-center text-2xl">
                      value in bonds:{data.bonds}
                    </p>
                  </div>
                </div>
                <div class="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
                  <Button
                    type="button"
                    label="Approve"
                    onClick={() => setDisplayBasic(false)}
                    icon="pi pi-thumbs-up-fill"
                    // className="p-button-secondary"
                    style={{
                      marginTop: "2rem",
                      marginLeft: "2rem",
                      width: "20rem",
                    }}
                  />
                  <Button
                    type="button"
                    label="Deny"
                    onClick={() => setDisplayBasic(false)}
                    icon="pi pi-stop-circle"
                    // className="p-button-secondary"
                    style={{
                      marginTop: "2rem",
                      marginLeft: "2rem",
                      width: "20rem",
                    }}
                  />
                  <Button
                    type="button"
                    label="Hide"
                    onClick={() => setDisplayBasic(false)}
                    icon="pi pi-minus"
                    // className="p-button-secondary"
                    style={{
                      marginTop: "2rem",
                      marginLeft: "2rem",
                      width: "20rem",
                    }}
                  />
                </div>
              </Card>
            </Dialog>

            <Button
              type="button"
              label={data.party}
              className="p-button-outlined p-button-secondary"
              icon="pi pi-angle-down"
              onClick={() => setDisplayBasic(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IssueRequestCB;
