import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function WBOSellOB({ price, data }) {
  const bpriceBodyTemplate = (rowData) => {
    return <span className="text-pink-500"> {rowData.sellprice} </span>;
  };

  const bamountBodyTemplate = (rowData) => {
    return rowData.sellamount;
  };
  const idBodyTemplate = (rowData) => {
    return rowData.sellaccountnumber;
  };

  return (
    <div className="grid table-demo">
      <div className="col-12">
        <div className="card">
          <DataTable
            value={data}
            scrollable
            scrollHeight="400px"
            responsiveLayout="scroll"
          >
            <Column
              field="price"
              header="Sell Price"
              sortable
              style={{ width: "35%" }}
              body={bpriceBodyTemplate}
            />
            <Column
              field="price"
              header="Volume"
              sortable
              style={{ width: "35%" }}
              body={bamountBodyTemplate}
            />
            <Column
              // field="price"
              header="ID"
              sortable
              style={{ width: "35%" }}
              body={idBodyTemplate}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default WBOSellOB;
