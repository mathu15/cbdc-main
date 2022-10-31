import { Card } from "primereact/card";
import React, { useEffect, useState } from "react";

const AvailableCBDC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetch the asset data from api
    const url = "https://thebsv.tech/centralbank/getassets";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  return (
    <div className="flex-column">
      {/* mapping the fetched data */}
      <h3 className="mt-3">Available Assets on the Network</h3>

      {data.map((cdata) => (
        <Card className="mt-4" key={cdata.id}>
          <div className="flex">
            <p className="w-2 text-center font-bold text-blue-500 mr-3">
              CBDC Name:
            </p>
            <p className="text-xl w-10"> {cdata.issuetype}</p>
          </div>
          <div className="flex ">
            <p className="w-2 text-center font-bold text-blue-500 mr-3">
              CBDC asset decimal:
            </p>
            <p className="text-xl w-10">{cdata.count}</p>
          </div>
          <div className="flex ">
            <p className="w-2 text-center font-bold text-blue-500 mr-3">
              Issuing Party:
            </p>
            <p className="text-xl w-10">{cdata.issuer}</p>
          </div>
          <div className="flex ">
            <p className="w-2 text-center font-bold text-blue-500 mr-3">id:</p>
            <p className="text-xl w-10">{cdata.id}</p>
          </div>
          <div className="flex ">
            <p className="w-2 text-center font-bold text-blue-500 mr-3">
              compliance control:
            </p>
            <p className="text-xl w-10">compliance</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AvailableCBDC;
