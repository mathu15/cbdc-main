import React, { useState, useEffect } from "react";

import WBOSellOB from "./OrderBookWBO/WBOSellOB";
import { TabMenu } from "primereact/tabmenu";
import WBOmarketDepth from "./OrderBookWBO/WBOmarketDepth";

import WBOVolume from "./OrderBookWBO/WBOVolume";
import WBOMatchHistory from "./OrderBookWBO/WBOMatchHistory";
import WBOBuyOrder from "./OrderBookWBO/WBOBuyOrder";
import WBOOpenOrder from "./OrderBookWBO/WBOOpenOrder";
import WBOCompleted from "./OrderBookWBO/WBOCompleted";
import WBOSellOrder from "./OrderBookWBO/WBOSellOrder";
import WBOBuyOB from "./OrderBookWBO/WBOBuyOB";

const WBOOrderBook = ({ data, setData }) => {
  const [currencies, setcurrencies] = useState([]);
  const [pair, setpair] = useState("");
  const [price, setprice] = useState([]);
  const [pastData, setpastData] = useState([]);
  const [sellData, setsellData] = useState([]);
  const [allSellData, setallSellData] = useState([]);
  const [allBuyData, setallBuyData] = useState([]);

  const [activeone, setActiveone] = useState(0);
  const [activetwo, setActivetwo] = useState(0);
  const [activethree, setActivethree] = useState(0);
  const [activefour, setActivefour] = useState(0);
  const [activefive, setActivefive] = useState(0);

  const url = "https://thebsv.tech/exchange/getpairs";
  let ratesURL = `https://api.exchangerate.host/latest?base=USD&symbols=INR`;

  useEffect(() => {
    let pairs = [];

    const apiCall = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => (pairs = data));

      let filtered = pairs.sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });

      setcurrencies(filtered);
      let currencypair = pairs.map((cur, idx) => {
        return cur.pairname;
      });
      setpair(currencypair);
      let amount = pairs.map((cur, idx) => {
        return cur.count;
      });
      setprice(amount);
    };

    apiCall();
  }, []);

  useEffect(() => {
    console.log(pair);
    let historicalDataURL = `https://thebsv.tech/exchange/getbuyorders/${pair}`;
    const fetchHistoricalData = async () => {
      let dataArr = [];
      await fetch(historicalDataURL)
        .then((res) => res.json())
        .then((data) => (dataArr = data.buysideorders));
      const last1 = dataArr.sort((a, b) => {
        return a > b ? 1 : -1;
      });

      setpastData(last1);
    };

    fetchHistoricalData();

    let sellersURL = `https://thebsv.tech/exchange/getsellorders/${pair}`;
    const fetchSellersData = async () => {
      let datasellArr = [];
      await fetch(sellersURL)
        .then((res) => res.json())
        .then((data) => (datasellArr = data.sellsideorders));

      const last1 = datasellArr.sort((a, b) => {
        return a > b ? 1 : -1;
      });

      setsellData(last1);
    };

    fetchSellersData();

    let ordersURL = `https://thebsv.tech/exchange/getorders/${pair}`;
    const fetchOrdersData = async () => {
      let ordersArr = [];
      await fetch(ordersURL)
        .then((res) => res.json())
        .then((data) => (ordersArr = data));
      const sorted1 = ordersArr.buysideorders;
      const last1 = sorted1.sort((a, b) => {
        return a > b ? 1 : -1;
      });
      const sorted2 = ordersArr.sellsideorders;
      const last2 = sorted2.sort((a, b) => {
        return a > b ? 1 : -1;
      });

      setallBuyData(last1);
      setallSellData(last2);
    };

    fetchOrdersData();

    // let ratesURL = `https://api.exchangerate.host/latest?base=USD&symbols=INR`;
    // const fetchRatesData = async () => {
    //   let ratesArr = [];
    //   await fetch(ratesURL)
    //     .then((res) => res.json())
    //     .then((data) => (ratesArr = data.rates));

    //   setprice(ratesArr);
    // };

    // fetchRatesData();
  }, [pair]);

  const handleSelect = (e) => {
    setpair(e.target.value);
  };

  const DisplayOne = () => {
    if (activeone === 0) {
      return <WBOmarketDepth buy={allBuyData} sell={allSellData} />;
    } else if (activeone === 1) {
      return <WBOVolume buy={allBuyData} sell={allSellData} />;
    }
  };
  const DisplayTwo = () => {
    if (activetwo === 0) {
      return <WBOMatchHistory buy={allBuyData} sell={allSellData} />;
    }
  };
  const DisplayThree = () => {
    if (activethree === 0) {
      return <WBOBuyOB data={pastData} />;
    } else if (activethree === 1) {
      return <WBOSellOB data={sellData} />;
    }
  };

  const DisplayFour = () => {
    if (activefour === 0) {
      return <WBOOpenOrder data={pastData} />;
    } else if (activefour === 1) {
      return <WBOCompleted data={sellData} />;
    }
  };

  const DisplayFive = () => {
    if (activefive === 0) {
      return <WBOBuyOrder />;
    } else if (activefive === 1) {
      return <WBOSellOrder />;
    }
  };

  const wizardItems = [
    {
      label: "MARKET DEPTH",
      icon: "pi pi-fw pi-arrow-right-arrow-left",
    },
    {
      label: "ORDER VOLUME",
      icon: "pi pi-fw pi-upload",
    },
  ];

  const dataItems = [
    {
      label: "MATCH HISTORY",
      icon: "pi pi-fw pi-box",
    },
  ];

  const dataStates = [
    {
      label: "BUYERS",
      icon: "pi text-2xl pi-fw pi-sort-alt",
    },
    {
      label: "SELLERS",
      icon: "pi text-2xl pi-fw pi-user",
    },
  ];

  const dataOrders = [
    {
      label: "OPEN ORDERS",
      icon: "pi text-2xl pi-fw pi-sort-alt",
    },
    {
      label: "COMPLETED ORDERS",
      icon: "pi text-2xl pi-fw pi-user",
    },
  ];

  const buySell = [
    {
      label: "BUY",
      icon: "pi text-2xl pi-fw pi-sort-alt",
    },
    {
      label: "SELL",
      icon: "pi text-2xl pi-fw pi-user",
    },
  ];

  return (
    <div class="grid">
      <div class="col-8">
        <div class="grid">
          <div class="col-6">
            <TabMenu
              model={wizardItems}
              id={wizardItems.id}
              activeIndex={activeone}
              onTabChange={(e) => setActiveone(e.index)}
              style={{ fontSize: "1.2rem" }}
            />

            {DisplayOne()}
          </div>
          <div class="col-6">
            <TabMenu
              model={dataItems}
              id={dataItems.id}
              activeIndex={activetwo}
              onTabChange={(e) => setActivetwo(e.index)}
              style={{ fontSize: "1.2rem" }}
            />

            {DisplayTwo()}
          </div>
          <div class="col-6">
            <TabMenu
              model={dataStates}
              id={dataStates.id}
              activeIndex={activethree}
              onTabChange={(e) => setActivethree(e.index)}
              style={{ fontSize: "1.2rem" }}
            />

            {DisplayThree()}
          </div>
          <div class="col-6">
            <TabMenu
              model={dataOrders}
              id={dataOrders.id}
              activeIndex={activefour}
              onTabChange={(e) => setActivefour(e.index)}
              style={{ fontSize: "1.2rem" }}
            />

            {DisplayFour()}
          </div>
        </div>
      </div>
      <div class="col-4">
        {
          <select name="currency" value={pair} onChange={handleSelect}>
            {currencies.map((cur, idx) => {
              return (
                <option key={idx} value={cur.id}>
                  {cur.pairname}
                </option>
              );
            })}
          </select>
        }

        {<h2>{price}</h2>}
        <TabMenu
          model={buySell}
          id={buySell.id}
          activeIndex={activefive}
          onTabChange={(e) => setActivefive(e.index)}
          style={{ fontSize: "1.2rem" }}
        />

        {DisplayFive()}
      </div>
    </div>
  );
};

export default WBOOrderBook;
