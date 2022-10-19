import React, { useState } from "react";
import { Chart } from "primereact/chart";

const CBBonds = () => {
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
    <div className="col-12">
      <div className="grid p-fluid">
        <div className="col-12 md:col-6 ">
          <div className="card card-w-title">
            <p>Bond value</p>
            <p>1:1 to CBDC</p>
          </div>
        </div>
        <div className="col-12 md:col-6 ">
          <div className="card card-w-title">
            <p>Total bonds in Vault</p>
            <p>100,000,000</p>
          </div>
        </div>
      </div>
      <Chart
        type="doughnut"
        data={chartData}
        options={lightOptions}
        style={{ position: "relative", width: "40%", justifyContent: "center" }}
      />
    </div>
  );
};

export default CBBonds;
