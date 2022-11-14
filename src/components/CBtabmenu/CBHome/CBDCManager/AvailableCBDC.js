import { Card } from "primereact/card";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const AvailableCBDC = () => {
  const [data, setData] = useState([]);
  // const [datas, setDatas] = useState({
  //   asset: {
  //     assetid: "ASSET-BND-0002",
  //     issuetype: "Cash_BINR",
  //   },
  //   amount: 100,
  //   operationaccount: {
  //     accountholder: "central",
  //     accountnumber: "CAC-CEN901-0002",
  //   },
  // });

  useEffect(() => {
    //fetch the asset data from api
    const url = "https://thebsv.tech/centralbank/getassets";
    const urll =
      "https://thebsv.tech/centralbank/makeassetavailableincentralbank";
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

  //  postand put api implement
  // const postPutEvent = () => {
  // const datas = {
  // centralentity: {
  //   entityid: "ENT-CEN-0901",
  // },
  // issue: {
  //   enityname: "Asset authority",
  //   assetid: "ASSET-BND-0001",
  //   issuetype: "Cash_BINR",
  //   issuer: "RBI",
  //   contract: "I promise to pay the bearer 1 Rs ",
  //   amount: "10000000",
  // },
  // asset: {
  //   assetid: "ASSET-BND-0001",
  //   issuetype: "Cash_BINR",
  // },
  // amount: 10,
  // operationaccount: {
  //   accountholder: "central",
  //   accountnumber: "CAC-CEN901-0001",
  // },
  // };

  // const url =
  // datas.id? "https://thebsv.tech/centralbank/getassets/" + datas.id:
  // "https://thebsv.tech/centralbank/createcentralasset";
  //     "https://thebsv.tech/centralbank/makeassetavailableincentralbank";
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json; charset-UTF-8",
  //     },
  //     body: JSON.stringify(datas),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       alert("success");
  //       setDatas(response);
  //     })

  //     .catch((e) => {
  //       console.log("e", e);
  //     });
  // };
  // console.log(datas);
  const header = <p className="text-xl">Compliance Control:</p>;
  return (
    <div className="card col-12 flex flex-column align-items-center justify-content-center">
      {/* mapping the fetched data */}
      <h3 className="mt-3">Available Assets on the Network</h3>

      {data.map((cdata) => (
        <Card className="mt-4  col-6 bg-gray-900" key={cdata.id}>
          <div className="flex">
            <p className="w-2 text-xl text-center font-bold text-blue-200 mr-3">
              CBDC Name:
            </p>
            <p className="text-xl w-10"> {cdata.issuetype}</p>
          </div>
          <div className="flex ">
            <p className="w-2 text-xl text-center font-bold text-blue-200 mr-3">
              CBDC asset decimal:
            </p>
            <p className="text-xl w-10">{cdata.count}</p>
          </div>
          <div className="flex ">
            <p className="w-2 text-xl text-center font-bold text-blue-200 mr-3">
              Issuing Party:
            </p>
            <p className="text-xl w-10">{cdata.issuer}</p>
          </div>
          <div className="flex ">
            <p className="w-2 text-xl text-center font-bold text-blue-200 mr-3">
              id:
            </p>
            <p className="text-xl w-10">{cdata.id}</p>
          </div>

          <div className="flex ">
            <div className="w-5 ml-6">
              <Accordion>
                <AccordionTab header={header}>
                  <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
                    <p className="  text-xl font-bold text-blue-200 mr-3">
                      Required Member Access:ENABLED
                    </p>
                    <p className=" text-xl">
                      Permitted Notaries:O=NotaryONE Service, L=London, C=GB
                    </p>
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </Card>
      ))}
      {/* <button onClick={postPutEvent}>submit</button> */}
    </div>
  );
};

export default AvailableCBDC;
