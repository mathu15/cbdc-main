import React, { useState, useEffect } from "react";

import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";

import { Calendar } from "primereact/calendar";
import { NavLink } from "react-router-dom";

const CBDCStatus = () => {
  const [data, setData] = useState(null);

  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(true);

  const statuses = ["coinbase", "issue"];
  const issuerstatus = ["BBI", "CBI", "GBI", "RBI"];
  const assetidstatus = [
    "ASSET-BND-0001",
    "ASSET-BND-0002",
    "ASSET-BND-0003",
    "ASSET-BND-0004",
    "ASSET-BND-0005",
    "ASSET-BND-0006",
  ];
  useEffect(() => {
    //fetch the asset data from api
    // const url = "https://thebsv.tech/centralbank/getassets";
    const urll = "https://thebsv.tech/centralbank/getentityassets/ENT-CEN-0901";
    fetch(urll)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        const sorted = json;
        const last = sorted.sort((a, b) => {
          return a > b ? 1 : -1;
        });
        setData(last);
        // .issuertrans.centralissuetrans
        setLoading(false);
      })
      .catch((e) => {
        console.log("e", e);
      });
    initFilters();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //   useEffect(() => {
  //     //fetch the asset data from api
  //     const url = "https://thebsv.tech/centralbank/getassets";
  //     const urll =
  //       "https://thebsv.tech/centralbank/gettransactions/CAC-ENT901-0001";
  //     fetch(urll)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log("json", json);
  //         setData(getCustomers(json.issuertrans.centralissuetrans));
  // setLoading(false);
  //       })
  //       .catch((e) => {
  //         console.log("e", e);
  //       });
  // initFilters();
  //   }, []);

  const formatCurrency = (value) => {
    return value.toFixed(2);
  };

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      issuetype: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      assetid: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      toaccountnumber: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      issuer: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },

      representative: { value: null, matchMode: FilterMatchMode.IN },
      createdAt: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      updatedAt: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      amount: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      count: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activitytype: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
  };

  const dateBodyTemplate = (rowData) => {
    return (
      <>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(rowData.updatedAt)}
      </>
    );
  };
  const dateBodyTemplate1 = (rowData) => {
    return (
      <>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(rowData.createdAt)}
      </>
    );
  };

  const dateFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterCallback((e.value, options.index))}
        dateFormat="mm/dd/yy"
        placeholder="mm/dd/yyyy"
        mask="99/99/9999"
      />
    );
  };

  const balanceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.amount);
  };

  const balanceFilterTemplate = (options) => {
    return (
      <InputNumber
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        // mode="currency"
        // currency="USD"
        // locale="en-US"
      />
    );
  };

  const issuerBodyTemplate = (rowData) => {
    return (
      // className={`customer-badge status-${rowData.type}`}
      <span>{rowData.issuer}</span>
    );
  };
  const issuerItemTemplate = (option) => {
    return <span className={`customer-badge status-${option}`}>{option}</span>;
  };
  const issuerFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={issuerstatus}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        itemTemplate={issuerItemTemplate}
        placeholder="Select a Status"
        className="p-column-filter "
        showClear
      />
    );
  };

  const assetidBodyTemplate = (rowData) => {
    return <span>{rowData.assetid}</span>;
  };
  const assetidItemTemplate = (option) => {
    return <span className={`customer-badge status-${option}`}>{option}</span>;
  };
  const assetidFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={assetidstatus}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        itemTemplate={assetidItemTemplate}
        placeholder="Select a Status"
        className="p-column-filter "
        showClear
      />
    );
  };

  return (
    <div className="grid table-demo">
      <div className="col-12">
        <div className="card">
          <DataTable
            value={data}
            paginator
            className="p-datatable-gridlines text-2xl"
            showGridlines
            rows={10}
            dataKey="id"
            filters={filters}
            filterDisplay="menu"
            loading={loading}
            responsiveLayout="scroll"
            emptyMessage="No customers found."
            // style={{ fontSize: "1.4rem" }}
          >
            <Column
              header="Transaction Date"
              filterField="updatedAt"
              dataType="date"
              style={{ minWidth: "10rem" }}
              body={dateBodyTemplate}
              filter
              filterElement={dateFilterTemplate}
            />
            <Column
              field="issuetype"
              header="Token Name"
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem" }}
            />
            <Column
              field="assetid"
              header="Assetid"
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "12rem" }}
              body={assetidBodyTemplate}
              filter
              filterElement={assetidFilterTemplate}
            />
            <Column
              field="issuer"
              header="Initiator"
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "12rem" }}
              body={issuerBodyTemplate}
              filter
              filterElement={issuerFilterTemplate}
            />

            <Column
              header="Amount"
              filterField="amount"
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              body={balanceBodyTemplate}
              filter
              filterElement={balanceFilterTemplate}
            />

            <Column
              header="Issue Date"
              filterField="createdAt"
              dataType="date"
              style={{ minWidth: "10rem" }}
              body={dateBodyTemplate1}
              filter
              filterElement={dateFilterTemplate}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default CBDCStatus;
