import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function WBOVolume({ buy, sell }) {
  const bpriceBodyTemplate = (rowData) => {
    return <span className="text-green-500">{rowData.buyprice}</span>;
  };

  const bamountBodyTemplate = (rowData) => {
    return rowData.buyamount;
  };

  const spriceBodyTemplate = (rowData) => {
    return <span className="text-pink-500"> {rowData.sellprice} </span>;
  };

  const samountBodyTemplate = (rowData) => {
    return rowData.sellamount;
  };
  return (
    <div className="grid table-demo">
      <div className="col-12">
        <div className="card">
          <div className="flex ml-7">
            <DataTable
              value={sell}
              scrollable
              scrollHeight="250px"
              responsiveLayout="scroll"
            >
              <Column
                field="price"
                header="Sell Price"
                sortable
                style={{ width: "35%" }}
                body={spriceBodyTemplate}
                rows={5}
              />
              <Column
                field="price"
                header="Volume"
                sortable
                style={{ width: "35%" }}
                body={samountBodyTemplate}
                rows={5}
              />
            </DataTable>
            <DataTable
              value={buy}
              scrollable
              scrollHeight="250px"
              responsiveLayout="scroll"
            >
              <Column
                field="price"
                header="Buy Price"
                sortable
                style={{ width: "35%" }}
                body={bpriceBodyTemplate}
                rows={5}
              />
              <Column
                field="price"
                header="Volume"
                sortable
                style={{ width: "35%" }}
                body={bamountBodyTemplate}
                rows={5}
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WBOVolume;
