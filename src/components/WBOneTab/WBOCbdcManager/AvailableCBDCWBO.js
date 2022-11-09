import { Card } from "primereact/card";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const AvailableCBDCWBO = () => {
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
              Asset Name:
            </p>
            <p className="text-xl w-10"> {cdata.issuetype}</p>
          </div>
          <div className="flex ">
            <p className="w-2 text-center font-bold text-blue-500 mr-3">
              Asset decimal:
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
            <p className="w-2 text-center font-bold text-blue-500 mr-3">
              Unique id:
            </p>
            <p className="text-xl w-10">{cdata.id}</p>
          </div>

          <div className="flex ">
            <div className="w-5 ml-6">
              <Accordion>
                <AccordionTab header="Compliance Controls:">
                  <div className="flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5">
                    <p className="  text-xl font-bold text-blue-500 mr-3">
                      Required Member Access:ENABLED
                    </p>
                    <p className=" text-xl">
                      Permitted Notaries:O=NotaryONE Service, LLondon, C=GB
                    </p>
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AvailableCBDCWBO;
