import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
const TransactionControl = ({ data, setData }) => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [skip, setSkip] = useState(data.skip);

  const skipper = (
    <span className="p-float-label">
      <InputNumber
        id="amount"
        value={data.maxvalue}
        onChange={(e) =>
          setData((data) => {
            return { ...data, maxvalue: e.value };
          })
        }
        showButtons
        mode="decimal"
      ></InputNumber>
      <label htmlFor="amount">Maximum value</label>
    </span>
  );
  const clickHandler = () => {
    setSkip(skipper);
  };

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
              <Button
                type="button"
                label="Maxvalue"
                onClick={clickHandler}
                icon="pi pi-minus"
                // className="p-button-secondary"
                style={{
                  marginTop: "2rem",
                  marginLeft: "2rem",
                  width: "20rem",
                }}
              />
              <label htmlFor="option1">Maximum Value</label>

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
                onChange={(e) =>
                  setData((data) => {
                    return { ...data, displayvalue: e.value };
                  })
                }
              />
              <label htmlFor="option2">
                Maximum Value without Issuer signing
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

          <Button
            type="button"
            label="ADD CONTROL"
            icon="pi pi-plus"
            onClick={() => setDisplayBasic(true)}
            style={{ width: "20rem" }}
          />
          <p className="text-xl text-center">{skip}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionControl;
