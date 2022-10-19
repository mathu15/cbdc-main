import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";

const AssetControl = ({ data, setData }) => {
  const [displayBasic, setDisplayBasic] = useState(false);

  // const setDisplayMax = (
  //   <Button
  //     type="button"
  //     label="close"
  //     onClick={() => setDisplayBasic(false)}
  //     icon="pi pi-minus"
  //     // className="p-button-secondary"
  //   />
  // );

  return (
    <div className="card flex-column align-items-center">
      <h5 className="text-center">Configure Asset Control</h5>
      <p class=" text-xl text-center  border-bottom-1 surface-border surface-overlay ">
        Asset rules look at each individual state in a transaction seperately.
        For ex, to check whether any individual state breached its maximum usage
        controls.
      </p>
      {/* <p className="text-xl text-center">
        (skip this step if no controls are required)
      </p> */}

      <div className="text-center pt-3">
        <div className="card p-fluid">
          <Dialog
            header="Select rules to Add"
            visible={displayBasic}
            // style={{ width: "30vw" }}
            modal
            // footer={basicDialogFooter}
            onHide={() => setDisplayBasic(false)}
          >
            <Card style={{ cursor: "pointer" }}>
              <RadioButton
                inputId="option1"
                name="option"
                value="expiry"
                checked={data.transvalue === "expiry"}
                onChange={(e) => setData({ ...data, transvalue: e.value })}
              />
              <label htmlFor="option1">Expiry Date</label>

              <p>
                This rule ensures the transactional lifespan of a token does not
                exceed the configured duation period. the lifespan is measured
                from the issue date of a token and the duration is given as an
                ISO-86001 interval eg.,P2D speifies a duration of 2 days
              </p>
            </Card>
            <Card
              style={{
                cursor: "pointer",
                height: "10rem",
                marginTop: "3rem",
              }}
            >
              <RadioButton
                inputId="option2"
                name="option"
                value="usage"
                checked={data.transvalue === "usage"}
                onChange={(e) => setData({ ...data, transvalue: e.value })}
              />
              <label htmlFor="option2">Maximum usage count</label>
              <p>
                This rule ensures that the number of transactions this token can
                be used in is less than the configured maximum usage count.
              </p>
            </Card>

            <Button
              type="button"
              label="close"
              onClick={() => setDisplayBasic(false)}
              icon="pi pi-minus"
              // className="p-button-secondary"
              style={{ marginTop: "2rem", marginLeft: "2rem", width: "20rem" }}
            />
          </Dialog>
          {/* <div className="grid"> */}
          {/* <div className="flex w-3 align-items-center text-center p-fluid"> */}
          <Button
            type="button"
            label="ADD CONTROL"
            icon="pi pi-plus"
            onClick={() => setDisplayBasic(true)}
            style={{ width: "20rem" }}
          />

          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AssetControl;
