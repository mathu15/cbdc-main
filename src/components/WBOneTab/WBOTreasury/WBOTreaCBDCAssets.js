import React, { useState } from "react";
import { Chart } from "primereact/chart";

const WBOTreaCBDCAssets = () => {
  const [chartData] = useState({
    labels: ["Digital_Pound", "Digital_Dollar", "Digital_Euro"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <div className="grid-column ">
      <div className="grid justify-content-around">
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0 text-center">
            <div className="text-900 text-center font-medium text-xl mb-3">
              CBDC Types in Vault
            </div>

            <span className="text-green-500 text-center font-medium text-xl">
              3{" "}
            </span>
          </div>
        </div>
        <div className="col-12 lg:col-6 xl:col-3">
          <div className="card mb-0  text-center">
            <div className="text-900 font-medium  text-center text-xl mb-3">
              Total Assets in Vault
            </div>

            <span className="text-green-500 font-medium  text-center text-xl">
              50,000,000.000{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="col-12 lg:col-6">
        <div className="card flex flex-column align-items-center">
          <h5>Pie Chart</h5>
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
      </div>
    </div>
  );
};

export default WBOTreaCBDCAssets;
