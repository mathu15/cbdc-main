import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

// page for displaying chaertdata
const WB2Bonds = () => {
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
      const url = "https://thebsv.tech/centralbank/getbalance/CAC-SUB901-0002";
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
          for (const val of res.balance) {
            dataset1.push(val.amount);
            dataset2.push(val.issuetype);
          }
          setData({
            labels: dataset2,
            datasets: [
              {
                data: dataset1,
                backgroundColor: [
                  "#FFD700",
                  "#A38A00",
                  "#FFDE2E",
                  "#D1B000",
                  "#A38A00",
                ],
                hoverBackgroundColor: ["#FFE55C"],
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
        text: "",
        color: "#eee",
      },
    },
  });

  // const dataset3 = [];

  // for (const val of data) {
  //   dataset3.push(val.amount);
  // }

  // console.log(dataset3);
  const value = amount.reduce((a, b) => a + b, 0);
  console.log(value);
  return (
    <>
      <div className="col-12 ">
        <div className="grid p-fluid">
          <div className="col-12 md:col-6 ">
            <div className="card border-1 border-100 bg-gray-800  mt-3 card-w-title">
              <p className="border-bottom-1 pb-2 text-3xl">CBDC Types</p>
              {issuetype.map((cdata, index) => (
                <div className="list-disc" key={index}>
                  <li className="text-2xl pb-2">{cdata} </li>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 md:col-6 ">
            <div className="card border-1 border-100 bg-gray-800  mt-3 card-w-title">
              <p className="border-bottom-1 pb-2 text-3xl">Total assets</p>
              {amount.map((cdata, index) => (
                <div className="list-disc" key={index}>
                  <li className="text-2xl pb-2">{cdata} </li>
                </div>
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
            width: "45%",
            justifyContent: "center",
          }}
        />
      </div>
    </>
  );
};

export default WB2Bonds;
