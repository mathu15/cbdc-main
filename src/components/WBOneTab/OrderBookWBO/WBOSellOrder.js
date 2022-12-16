import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { IssuanceServiceWBOB } from "./issuanceServiceWBOB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputNumber } from "primereact/inputnumber";

const WBOSellOrder = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [data, setData] = useState({
    price: 0,

    volume: 0,
    total: 0,
  });
  const [data1, setData1] = useState({
    price: 0,

    volume: 0,
    total: 0,
  });
  
  const toltalvalue = data.price * data.volume;

  console.log("data", data);

 
  const issuanceServiceWBOB = new IssuanceServiceWBOB();
  const placesellorder = async () => {
    issuanceServiceWBOB.placesellorder(data.price, toltalvalue);
  };
  const showSuccess = () => {
    toast.success("created successfully", {
      // position: "top-right",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "colored",
      // theme: "dark",
    });
  };

  const clickHandler = () => {
    placesellorder();

    setDisplayBasic(false);
    showSuccess();
    setData(data1);
  };

  return (
    <div className="card grid p-fluid">
      <div className="col-12 text-center">
        <div className="text-center text-xl">
          <label style={{ fontSize: "2.0rem" }} htmlFor="amount">
            Price-INR
          </label>
          <InputNumber
            id="amount"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.value })}
            showButtons
            mode="decimal"
            min={0}
            max={10000000}
            style={{ height: "4rem", fontSize: "2.0rem" }}
            className="p-inputnumber"
          ></InputNumber>
        </div>
        <div className="text-center text-xl p-5">
          <label style={{ fontSize: "2.0rem" }} htmlFor="amount">
            Volume-USD
          </label>
          <InputNumber
            id="amount"
            value={data.volume}
            onChange={(e) => setData({ ...data, volume: e.value })}
            showButtons
            mode="decimal"
            min={0}
            max={10000000}
            style={{ height: "4rem", fontSize: "2.0rem" }}
            className="p-inputnumber"
          ></InputNumber>
        </div>
        <div className="text-center text-xl p-5">
          <label style={{ fontSize: "2.0rem" }} htmlFor="amount">
            Total-INR
          </label>
          <InputNumber
            id="amount"
            value={toltalvalue}
            onChange={(e) => setData({ ...data, total: e.value })}
            showButtons
            mode="decimal"
            min={0}
            max={10000000}
            style={{ height: "4rem", fontSize: "2.0rem" }}
            className="p-inputnumber"
          ></InputNumber>
        </div>
        <div className="p-5">
          <div className="flex align-items-center justify-content-between">
            <div className="w-6rem  text-white font-bold flex align-items-center justify-content-center   mr-3">
              <Dialog
                header="Sell Digital_USD for Digital_INR"
                visible={displayBasic}
                modal
                onHide={() => setDisplayBasic(false)}
              >
                <Card
                  style={{ marginBottom: "2rem" }}
                  className="transition-colors transition-duration-500 hover:bg-gray-900 "
                  
                >
                 
                  <div className="flex align-items-center ">
                  
                    <div>
                      <p className="text-3xl border-bottom-1 surface-border p-2">
                        At Price {data.price}
                      </p>
                      <p className="text-2xl">Volume {data.volume}</p>
                      <p className="text-2xl">Volume {data.total} </p>
                    </div>
                  </div>
                </Card>

                <div className="flex align-items-center  ">
                  <Button
                    type="button"
                    // icon="pi pi-minus"

                    label=" CONFIRM BUY"
                    onClick={() => clickHandler()}
                  />
                </div>
              </Dialog>
              <ToastContainer
                // position="top-right"
                // autoClose={5000}
                // hideProgressBar={false}
                // newestOnTop={false}
                // closeOnClick
                // rtl={false}
                // pauseOnFocusLoss
                // draggable
                // pauseOnHover
                // theme="colored"
                className="text-2xl"
                style={{ width: "70rem" }}
              />
              <Button onClick={() => setDisplayBasic(true)} label="SELL" />
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default WBOSellOrder;
