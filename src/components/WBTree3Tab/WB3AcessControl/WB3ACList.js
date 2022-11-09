import { Card } from "primereact/card";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const WB3ACList = () => {
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
  const header = (
    <div className="flex-column">
      <p>Issuing Party:O=CB,L=Dublin, C=IE</p>
    </div>
  );

  return (
    <div className="flex-column">
      <h3 className="mt-3">Issued Member Access States</h3>

      <Card className="mt-4">
        <div className="flex ">
          <div className="w-5 ml-6">
            <Accordion>
              <AccordionTab header={header}>
                {/* mapping the fetched data */}
                {data.map((cdata) => (
                  <div
                    key={cdata.id}
                    className=" card flex-column align-items-center border-bottom-1 surface-border surface-overlay w-full mt-5"
                  >
                    <p className="  text-xl font-bold text-blue-500 mr-3">
                      CBDC Name:{cdata.issuetype}
                    </p>
                    <p className=" text-xl">Asset Id:{cdata.assetid}</p>
                    <p className=" text-xl"> Id:{cdata.id}</p>
                  </div>
                ))}
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WB3ACList;
