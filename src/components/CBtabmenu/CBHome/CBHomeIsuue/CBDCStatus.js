import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { ProgressBar } from "primereact/progressbar";
import { Slider } from "primereact/slider";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import classNames from "classnames";

const CBDCStatus = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState([]);

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

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const FilterMatchMode = Object.freeze({
    STARTS_WITH: "startsWith",
    CONTAINS: "contains",
    NOT_CONTAINS: "notContains",
    ENDS_WITH: "endsWith",
    EQUALS: "equals",
    NOT_EQUALS: "notEquals",
    IN: "in",
    LESS_THAN: "lt",
    LESS_THAN_OR_EQUAL_TO: "lte",
    GREATER_THAN: "gt",
    GREATER_THAN_OR_EQUAL_TO: "gte",
    BETWEEN: "between",
    DATE_IS: "dateIs",
    DATE_IS_NOT: "dateIsNot",
    DATE_BEFORE: "dateBefore",
    DATE_AFTER: "dateAfter",
    CUSTOM: "custom",
  });

  const FilterOperator = Object.freeze({
    AND: "and",
    OR: "or",
  });

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      "country.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue("");
  };

  const clearFilter = () => {
    initFilters();
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          className="p-button-outlined"
          onClick={clearFilter}
        ></Button>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="keyword search"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  const countryBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <img
          alt="flag"
          src="/images/flag/flag_placeholder.png"
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          className={`flag flag-\${rowData.country.code}`}
          width={30}
        />
        <span className="image-text">{rowData.country.name}</span>
      </React.Fragment>
    );
  };

  const filterClearTemplate = (options) => {
    return (
      <Button
        type="button"
        icon="pi pi-times"
        onClick={options.filterClearCallback}
        className="p-button-secondary"
      ></Button>
    );
  };

  const filterApplyTemplate = (options) => {
    return (
      <Button
        type="button"
        icon="pi pi-check"
        onClick={options.filterApplyCallback}
        className="p-button-success"
      ></Button>
    );
  };

  const filterFooterTemplate = () => {
    return (
      <div className="px-3 pt-0 pb-3 text-center font-bold">
        Customized Buttons
      </div>
    );
  };

  const representativeBodyTemplate = (rowData) => {
    const representative = rowData.representative;
    return (
      <React.Fragment>
        <img
          alt={representative.name}
          src={`images/avatar/\${representative.image}`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          width={32}
          style={{ verticalAlign: "middle" }}
        />
        <span className="image-text">{representative.name}</span>
      </React.Fragment>
    );
  };

  const representativesItemTemplate = (option) => {
    return (
      <div className="p-multiselect-representative-option">
        <img
          alt={option.name}
          src={`images/avatar/\${option.image}`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          width={32}
          style={{ verticalAlign: "middle" }}
        />
        <span className="image-text">{option.name}</span>
      </div>
    );
  };

  const representatives = [
    { name: "Amy Elsner", image: "amyelsner.png" },
    { name: "Anna Fali", image: "annafali.png" },
    { name: "Asiya Javayant", image: "asiyajavayant.png" },
    { name: "Bernardo Dominic", image: "bernardodominic.png" },
    { name: "Elwin Sharvill", image: "elwinsharvill.png" },
    { name: "Ioni Bowcher", image: "ionibowcher.png" },
    { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
    { name: "Onyama Limba", image: "onyamalimba.png" },
    { name: "Stephen Shaw", image: "stephenshaw.png" },
    { name: "XuXue Feng", image: "xuxuefeng.png" },
  ];

  const representativeFilterTemplate = (options) => {
    return (
      <MultiSelect
        value={options.value}
        options={representatives}
        itemTemplate={representativesItemTemplate}
        onChange={(e) => options.filterCallback(e.value)}
        optionLabel="name"
        placeholder="Any"
        className="p-column-filter"
      />
    );
  };

  const formatDate = (value) => {
    return value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.startdate);
  };

  const dateFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        dateFormat="mm/dd/yy"
        placeholder="mm/dd/yyyy"
        mask="99/99/9999"
      />
    );
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const balanceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.amount);
  };

  const balanceFilterTemplate = (options) => {
    return (
      <InputNumber
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <span className={`customer-badge status-\${rowData.status}`}>
        {rowData.txtype}
      </span>
    );
  };

  const statusItemTemplate = (option) => {
    return <span className={`customer-badge status-\${option}`}>{option}</span>;
  };

  const txtype = ["Issue Asset", "Redeem Asset", "Tansfer Asset"];

  const statusFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={txtype}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        itemTemplate={statusItemTemplate}
        placeholder="Select a Status"
        className="p-column-filter"
        showClear
      />
    );
  };

  const activityBodyTemplate = (rowData) => {
    return (
      <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>
    );
  };

  const activityFilterTemplate = (options) => {
    return (
      <React.Fragment>
        <Slider
          value={options.value}
          onChange={(e) => options.filterCallback(e.value)}
          range
          className="m-3"
        ></Slider>
        <div className="flex align-items-center justify-content-between px-2">
          <span>{options.value ? options.value[0] : 0}</span>
          <span>{options.value ? options.value[1] : 100}</span>
        </div>
      </React.Fragment>
    );
  };

  const verifiedBodyTemplate = (rowData) => {
    return (
      <i
        className={classNames("pi", {
          "true-icon pi-check-circle": rowData.verified,
          "false-icon pi-times-circle": !rowData.verified,
        })}
      ></i>
    );
  };

  const verifiedFilterTemplate = (options) => {
    return (
      <TriStateCheckbox
        value={options.value}
        onChange={(e) => options.filterCallback(e.value)}
      />
    );
  };

  return (
    <div>
      {/* <div className="card "> */}
      {/* <DataTable value={data} responsiveLayout="scroll">
          <Column field="startdate" header="Transaction Date"></Column>
          <Column field="category" header="Tx Type"></Column>
          <Column field="issuetype" header="Token name"></Column>
          <Column field="amount" header="Amount"></Column>
          <Column field="count" header="Usage count"></Column>
          <Column field="issuer" header="Initiator"></Column>
          <Column field="counterparty" header="counter Party"></Column>
          <Column field="createdAt" header="Tx Time"></Column>
          <Column field="enddate" header="Issue Date"></Column>
        </DataTable> */}
      <div className="content-section implementation datatable-filter-demo">
        <div className="card">
          <DataTable
            value={data}
            paginator
            className="p-datatable-customers"
            showGridlines
            rows={10}
            dataKey="id"
            filters={filters}
            filterDisplay="menu"
            // loading={loading}
            responsiveLayout="scroll"
            globalFilterFields={[
              "issuetype",
              "country.name",
              "representative.name",
              "amount",
              "txtype",
            ]}
            header={header}
            emptyMessage="No customers found."
          >
            <Column
              header="Transaction Date"
              filterField="startdate"
              dataType="date"
              style={{ minWidth: "10rem" }}
              // body={dateBodyTemplate}
              filter
              // filterElement={dateFilterTemplate}
            />
            <Column
              field="txtype"
              header="Tx Type"
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "12rem" }}
              body={statusBodyTemplate}
              filter
              filterElement={statusFilterTemplate}
            />
            <Column
              field="issuetype"
              header="Token Name"
              filter
              filterPlaceholder="Search by name"
              style={{ minWidth: "12rem" }}
            />
            {/* <Column
              header="Country"
              filterField="country.name"
              style={{ minWidth: "12rem" }}
              body={countryBodyTemplate}
              filter
              filterPlaceholder="Search by country"
              filterClear={filterClearTemplate}
              filterApply={filterApplyTemplate}
              filterFooter={filterFooterTemplate}
            /> */}
            {/* <Column
              header="Agent"
              filterField="representative"
              showFilterMatchModes={false}
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "14rem" }}
              body={representativeBodyTemplate}
              filter
              filterElement={representativeFilterTemplate}
            /> */}
            {/* <Column
              header="Date"
              filterField="date"
              dataType="date"
              style={{ minWidth: "10rem" }}
              body={dateBodyTemplate}
              filter
              filterElement={dateFilterTemplate}
            /> */}
            <Column
              header="Amount"
              filterField="amount"
              dataType="numeric"
              style={{ minWidth: "10rem" }}
              body={balanceBodyTemplate}
              filter
              filterElement={balanceFilterTemplate}
            />
            {/* <Column
              field="status"
              header="Status"
              filterMenuStyle={{ width: "14rem" }}
              style={{ minWidth: "12rem" }}
              body={statusBodyTemplate}
              filter
              filterElement={statusFilterTemplate}
            /> */}
            {/* <Column
              field="activity"
              header="Activity"
              showFilterMatchModes={false}
              style={{ minWidth: "12rem" }}
              body={activityBodyTemplate}
              filter
              filterElement={activityFilterTemplate}
            />
            <Column
              field="verified"
              header="Verified"
              dataType="boolean"
              bodyClassName="text-center"
              style={{ minWidth: "8rem" }}
              body={verifiedBodyTemplate}
              filter
              filterElement={verifiedFilterTemplate} 
            />*/}
            <Column
              header="Issue Date"
              filterField="enddate"
              dataType="date"
              style={{ minWidth: "10rem" }}
              // body={dateBodyTemplate}
              filter
              // filterElement={dateFilterTemplate}
            />
          </DataTable>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default CBDCStatus;
