import React, { useState } from "react";
import { Chart } from "primereact/chart";

const WB3CBDCAssets = () => {
  //inital chart data
  const [chartData] = useState({
    labels: ["Digital_$_Frank", "Digital_Euro"],
    datasets: [
      {
        data: [10000.0, 16000.0],
        backgroundColor: ["#48C9B0", "#36A2EB"],
        hoverBackgroundColor: ["#48C9B0", "#36A2EB"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#eee",
        },
      },
    },
  });

  return (
    <>
      <div className="col-12">
        <div className="grid p-fluid">
          <div className="col-12 md:col-6 ">
            <div className="card card-w-title">
              <p className="text-xl">CBDC Types in Vault</p>
              <p className="text-xl">2</p>
            </div>
          </div>
          <div className="col-12 md:col-6 ">
            <div className="card card-w-title">
              <p className="text-xl">Total bonds in Vault</p>
              <p className="text-xl">25,000,000.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-column align-items-center">
        <Chart
          type="doughnut"
          data={chartData}
          options={lightOptions}
          style={{
            position: "relative",
            width: "40%",
            justifyContent: "center",
          }}
        />
      </div>
    </>
  );
};

export default WB3CBDCAssets;
