import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const WBCbdcStates = () => {
  const products = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      initiato: "INSTOCK",
      rating: 5,
    },
    {
      id: "1001",
      code: "nvklal433",
      name: "Black Watch",
      description: "Product Description",
      image: "black-watch.jpg",
      price: 72,
      category: "Accessories",
      quantity: 61,
      initiato: "INSTOCK",
      rating: 4,
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Band",
      description: "Product Description",
      image: "blue-band.jpg",
      price: 79,
      category: "Fitness",
      quantity: 2,
      initiato: "LOWSTOCK",
      rating: 3,
    },
    {
      id: "1003",
      code: "244wgerg2",
      name: "Blue T-Shirt",
      description: "Product Description",
      image: "blue-t-shirt.jpg",
      price: 29,
      category: "Clothing",
      quantity: 25,
      initiato: "INSTOCK",
      rating: 5,
    },
    {
      id: "1004",
      code: "h456wer53",
      name: "Bracelet",
      description: "Product Description",
      image: "bracelet.jpg",
      price: 15,
      category: "Accessories",
      quantity: 73,
      initiato: "INSTOCK",
      rating: 4,
    },
    {
      id: "1005",
      code: "av2231fwg",
      name: "Brown Purse",
      description: "Product Description",
      image: "brown-purse.jpg",
      price: 120,
      category: "Accessories",
      quantity: 0,
      initiato: "OUTOFSTOCK",
      rating: 4,
    },
  ];

  return (
    <div>
      <div className="card">
        <DataTable value={products} responsiveLayout="scroll">
          <Column
            field="date"
            header="Transaction Date"
            style={{ minWidth: "12rem", fontSize: "1.4rem" }}
          ></Column>
          <Column
            field="type"
            header="Tx Type"
            style={{ minWidth: "12rem", fontSize: "1.4rem" }}
          ></Column>
          <Column
            field="token"
            header="Token name"
            style={{ minWidth: "12rem", fontSize: "1.4rem" }}
          ></Column>
          <Column
            field="amount"
            header="Amount"
            style={{ minWidth: "12rem", fontSize: "1.4rem" }}
          ></Column>
          <Column
            field="count"
            header="Usage count"
            style={{ minWidth: "12rem", fontSize: "1.4rem" }}
          ></Column>
          <Column
            field="initiator"
            header="Initiator"
            style={{ minWidth: "12rem", fontSize: "1.4rem" }}
          ></Column>
          <Column
            field="counterparty"
            header="counter Party"
            style={{ minWidth: "12rem", fontSize: "1.4rem" }}
          ></Column>
          <Column
            field="time"
            header="Tx Time"
            style={{ minWidth: "12rem", fontSize: "1.4rem" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
export default WBCbdcStates;
