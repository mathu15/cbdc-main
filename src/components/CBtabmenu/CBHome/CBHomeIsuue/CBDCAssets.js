import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

// page for displaying chaertdata
const CBDCAssets = () => {
  // initail value for chart data

  const [data, setData] = useState();
  // {
  //   labels: ["Digital_$_Frank", "Digital_Euro"],
  //   datasets: [
  //     {
  //       data: [10000.0, 16000.0],
  //       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  //     },
  //   ],
  // }
  const [amount, setAmount] = useState([]);
  const [issuetype, setIssuetype] = useState([]);

  useEffect(() => {
    //fetch data from api
    const fetchData = async () => {
      const url = "https://thebsv.tech/centralbank/getassets";
      const dataset1 = [];
      const dataset2 = [];
      await fetch(url)
        .then((data) => {
          console.log("api data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("ress", res);
          for (const val of res) {
            dataset1.push(val.amount);
            dataset2.push(val.issuetype);
          }
          setData({
            labels: dataset2,
            datasets: [
              {
                data: dataset1,
                backgroundColor: ["#21618C", "#48C9B0", "#36A2EB"],
                hoverBackgroundColor: ["#21618C", "#48C9B0", "#36A2EB"],
              },
            ],
          });
          setAmount(dataset1);
          setIssuetype(dataset2);
          console.log("arrData", dataset1, dataset2);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);
  const [lightOptions] = useState({
    indexAxis: "x",
    elements: {
      doughnut: {
        borderWidth: 2,
      },
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#eee",
        },
      },
      title: {
        display: true,
        text: "BONDS",
        color: "#eee",
      },
    },
  });

  // const dataset3 = [];

  // for (const val of data) {
  //   dataset3.push(val.amount);
  // }

  // console.log(dataset3);
  // const value = amount.reduce((a, b) => a + b, 0);
  // console.log(value);
  return (
    <>
      <div className="col-12 ">
        <div className="grid p-fluid">
          <div className="col-12 md:col-6 ">
            <div className="card card-w-title">
              <p className="text-xl">CBDC Types in Vault</p>
              {issuetype.map((cdata, index) => (
                <p className="text-xl" key={index}>
                  {cdata}{" "}
                </p>
              ))}
            </div>
          </div>
          <div className="col-12 md:col-6 ">
            <div className="card card-w-title">
              <p className="text-xl">Total assets in Vaults</p>
              {amount.map((cdata, index) => (
                <p className="text-xl" key={index}>
                  {cdata}{" "}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="  flex flex-column align-items-center ">
        <Chart
          type="doughnut"
          data={data}
          options={lightOptions}
          style={{
            position: "relative",
            width: "42%",
            justifyContent: "center",
          }}
        />
      </div>
    </>
  );
};

export default CBDCAssets;
