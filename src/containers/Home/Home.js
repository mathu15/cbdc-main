import React from "react";

import { AppTopbar } from "../../components/Header/AppTopbar";

import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "../../../src/assets/layout/layout.scss";
import TabMenubar from "../../components/tabmenubar/TabMenubar";

const Home = () => {
  return (
    <div className="pl-7 pr-7  ">
      <AppTopbar />

      <TabMenubar />
    </div>
  );
};

export default Home;
