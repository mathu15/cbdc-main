import { Card } from "primereact/card";
import React from "react";

// to display the available assets
const info = [
  {
    name: "Digital_DOllar",
    decimal: 2,
    issuingparty: "O-CB, L-Dublin C-IE",
    id: 1,
    compliance: true,
  },
  {
    name: "Digital_Peso",
    decimal: 2,
    issuingparty: "O-CB, L-Dublin C-IE",
    id: 2,
    compliance: true,
  },
  {
    name: "Digital_Yen",
    decimal: 2,
    issuingparty: "O-CB, L-Dublin C-IE",
    id: 3,
    compliance: true,
  },
];

const AvailableCBDCWBO = () => {
  return (
    <div className="flex-column">
      {info.map((cdata) => (
        <Card title="Available Assets on the Network" key={cdata.id}>
          <Card>
            <div className="flex">
              <p className="w-2 text-center font-bold text-blue-500 mr-3">
                CBDC Name:
              </p>
              <p className="text-xl w-10"> {cdata.name}</p>
            </div>
            <div className="flex ">
              <p className="w-2 text-center font-bold text-blue-500 mr-3">
                CBDC asset decimal:
              </p>
              <p className="text-xl w-10">{cdata.decimal}</p>
            </div>
            <div className="flex ">
              <p className="w-2 text-center font-bold text-blue-500 mr-3">
                Issuing Party:
              </p>
              <p className="text-xl w-10">{cdata.issuingparty}</p>
            </div>
            <div className="flex ">
              <p className="w-2 text-center font-bold text-blue-500 mr-3">
                id:
              </p>
              <p className="text-xl w-10">{cdata.id}</p>
            </div>
            <div className="flex ">
              <p className="w-2 text-center font-bold text-blue-500 mr-3">
                compliance control:
              </p>
              <p className="text-xl w-10">{cdata.compliance}</p>
            </div>
          </Card>
        </Card>
      ))}
    </div>
  );
};

export default AvailableCBDCWBO;
