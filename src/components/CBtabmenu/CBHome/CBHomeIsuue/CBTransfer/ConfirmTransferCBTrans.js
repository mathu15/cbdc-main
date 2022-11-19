import { React, useState } from "react";
import { Button } from "primereact/button";
import { IssuanceService } from "../../IssuanceService";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";

// review and confirm (display) the entered user input
const ConfirmTransferCBTrans = ({ data, setData }) => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const text = data.assetid.label;
  const subscriber = data.notary.label;
  const myArray = text.split(",");
  const wholesale = subscriber.split(",");
  const issuanceService = new IssuanceService();
  const sendcentraltosubscriber = async () => {
    issuanceService.sendcentraltosubscriber(
      myArray[1],
      myArray[0],
      wholesale[1],
      data.amount
    );
  };

  const clickHandler = () => {
    sendcentraltosubscriber();
  };

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
            Asset:{myArray[0]}
          </p>
          <p className="text-center text-3xl">Receiving Party:{wholesale[0]}</p>
          <p className="text-center text-3xl">Amount:{data.amount}</p>
          <p className="text-center text-3xl">
            Remaining after Transfer: {data.total - data.amount}
          </p>
        </div>
      </div>

      <div className="text-center p-5">
        <div className=" p-fluid">
          {/* dialog overlay if add control selected */}
          <Dialog
            header="INTRASETTLE SAYS"
            visible={displayBasic}
            modal
            onHide={() => setDisplayBasic(false)}
          >
            <Card
              style={{ cursor: "pointer", marginBottom: "2rem" }}
              className="transition-colors transition-duration-500 hover:bg-gray-900 "
              onClick={clickHandler}
            >
              {/* select the maxvalue button to add maximum value otherwise skip the step */}
              <div className="flex align-items-center ">
                <Button
                  type="button"
                  // label="Maxvalue"

                  icon="pi pi-plus"
                  style={{
                    // marginTop: "2rem",
                    // marginLeft: "2rem",
                    width: "3rem",
                    borderRadius: "50%",
                    marginRight: "2rem",
                  }}
                />
                {/* <label htmlFor="option1">Maximum Value</label> */}
                <div>
                  <p className="text-3xl border-bottom-1 surface-border p-2">
                    confirm create
                  </p>
                </div>
              </div>
            </Card>

            <Card
              style={{ cursor: "pointer" }}
              className="transition-colors transition-duration-500    hover:bg-gray-900 border-top-2 surface-border"
              onClick={() => setDisplayBasic(false)}
            >
              <div className="flex align-items-center  ">
                <Button
                  type="button"
                  icon="pi pi-minus"
                  style={{
                    marginRight: "2rem",
                    width: "3rem",
                    borderRadius: "50%",
                  }}
                />
                <p className="text-2xl">Close</p>
              </div>
            </Card>
          </Dialog>

          {/* select it to add control */}
          <Button
            type="button"
            label="CREATE ASSET"
            // icon="pi text-xl pi-plus"
            onClick={() => setDisplayBasic(true)}
            style={{ width: "20rem", fontSize: "1.4rem" }}
          />
        </div>
      </div>

      {/* <div className=" text-white font-bold flex align-items-center justify-content-around  m-5">
        <Button
          label="CREATE ASSET"
          onClick={() => {
            sendcentraltosubscriber();
            // alertt();
          }}
          className="w-12rem "
        ></Button>
      </div> */}
    </div>
  );
};

export default ConfirmTransferCBTrans;
