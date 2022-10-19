import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
const TransactionControl = ({ data, setData }) => {
  const [displayBasic, setDisplayBasic] = useState(false);

  // const basicDialogFooter = (
  //   <Button
  //     type="button"
  //     label="close"
  //     onClick={() => setDisplayBasic(false)}
  //     icon="pi pi-minus"
  //     // className="p-button-secondary"
  //   />
  // );

  // const displayMax = () => {
  //   <span className="p-float-label">
  //     <InputText
  //       id="valuemax"
  //       type="text"
  //       value={data.maxvalue}
  //       onChange={(e) => setData({ ...data, maxvalue: e.target.value })}
  //     />
  //     <label htmlFor="valuemax">CBDC Name</label>
  //   </span>;

  //   setDisplayBasic(false);
  // };

  // const displayMin = () => {
  //   <span className="p-float-label">
  //     <InputText
  //       id="valuemin"
  //       type="text"
  //       value={data.minvalue}
  //       onChange={(e) => setData({ ...data, minvalue: e.target.value })}
  //     />
  //     <label htmlFor="valuemin">CBDC Name</label>
  //   </span>;
  //   setDisplayBasic(false);
  // };
  console.log("data", data);
  return (
    <div className="card flex-column align-items-center">
      <h5 className="text-center">Configure Transaction Control</h5>
      <p class=" text-xl text-center  border-bottom-1 surface-border surface-overlay ">
        Transaction rules evaluate the entire transaction contracts. for ex, to
        check whether the sum total amounts of all states moved in a transaction
        exceeds a certain value.
      </p>

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
                value="maxvalue"
                checked={data.displayvalue === "maxvalue"}
                onChange={(e) => setData({ ...data, displayvalue: e.value })}
              />
              <label htmlFor="option1">
                Maximum Value
                {/* <InputNumber
                  id="inputnumber"
                  // type="number"
                  value={data.maxvalue}
                  onChange={(e) =>
                    setData({ ...data, maxvalue: e.target.value })
                  }
                />
                <label htmlFor="inputnumber">Enter Max Value</label> */}
              </label>

              <p>
                The Max value sent to any participant cannot exceed the value
                configured.
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
                value="minvalue"
                checked={data.displayvalue === "minvalue"}
                onChange={(e) => setData({ ...data, displayvalue: e.value })}
              />
              <label htmlFor="option2">
                Maximum Value without Issuer signing
                {/* <InputNumber
                  id="inputnumber"
                  // type="number"
                  value={data.maxvalue}
                  onChange={(e) =>
                    setData({ ...data, maxvalue: e.target.value })
                  }
                />
                <label htmlFor="inputnumber">Enter Max Value</label> */}
              </label>
              <p>
                The issuer of a currency must sign any transaction where the
                value is greater than configured.
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
          <p className="text-xl text-center">
            (skip this step if no controls are required)
          </p>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TransactionControl;
