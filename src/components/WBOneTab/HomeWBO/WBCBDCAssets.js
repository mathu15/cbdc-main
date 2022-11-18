import React, { useState } from "react";
import { Chart } from "primereact/chart";

const WBCBDCAssets = () => {
  //inital chart data
  const [chartData] = useState({
    labels: ["Digital_$_Frank", "Digital_Euro"],
    datasets: [
      {
        data: [10000.0, 16000.0],
        backgroundColor: ["#1569BB", "#00C6AE", "#36A2EB", "#6B7280"],
        hoverBackgroundColor: ["#1a85ed", "#00f7d9", "#4bb3fa", "#7f8694"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        // position: "right",
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
            <div className="card mt-3 border-1 border-300 bg-gray-800   card-w-title">
              <p className="border-bottom-1 pb-2 text-3xl">
                CBDC Types in Vault
              </p>
              <li className="text-2xl">2</li>
            </div>
          </div>
          <div className="col-12 md:col-6 ">
            <div className="card mt-3 border-1 border-300 bg-gray-800   card-w-title">
              <p className="border-bottom-1 pb-2 text-3xl">
                Total bonds in Vault
              </p>
              <li className="text-2xl">25,000,000.000</li>
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

export default WBCBDCAssets;
