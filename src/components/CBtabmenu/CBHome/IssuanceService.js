class IssuanceService {
  sendcentraltosubscriber(assetname, participant, numberissued) {
    const payload = {
      method: "POST",
      body: JSON.stringify({
        asset: assetname,
        participant: participant,
        numberissued: numberissued,
      }),
    };
    return fetch(
      "https://thebsv.tech/centralbank/sendcentraltosubscriber",
      payload
    ).then((res) => res.json());
  }

  getcentralaccount() {
    return fetch("https://thebsv.tech/centralbank/getcentralaccount").then(
      (res) => res.json()
    );
  }

  mintasset(assetid, centralaccount, mintamount) {
    const payload = {
      method: "POST",
      body: JSON.stringify({
        asset: {
          assetid: assetid,
          issuetype: centralaccount,
        },
        amount: mintamount,
      }),
    };
    return fetch("https://thebsv.tech/centralbank/entitymintasset", payload)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        alert("success");
      });
  }

  centralasset(assetid, centralaccount, mintamount) {
    const payload = {
      method: "POST",
      body: JSON.stringify({
        centralentity: {
          entityid: "ENT-CEN-0901",
        },
        issue: {
          enityname: "Asset authority",
          assetid: assetid,
          issuetype: "Cash_BINR",
          issuer: "BBI",
          contract: "I promise to pay the bearer 1 Rs ",
          amount: mintamount,
        },
      }),
    };
    return fetch("https://thebsv.tech/centralbank/createcentralasset", payload)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        // alert("success");
      })
      .catch((e) => {
        console.log("e", e);
      });
  }

  // entitymintasset(asset, centralaccount, mintamount) {
  //   const payload = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       asset: asset,
  //       centralaccount: centralaccount,
  //       mintamount: mintamount,
  //     }),
  //   };
  //   return fetch(
  //     "https://thebsv.tech/centralbank/entitymintasset",
  //     payload
  //   ).then((res) => res.json());
  //   console.log(res);
  // }

  getassets() {
    const payload = {
      method: "POST",
      body: JSON.stringify({
        entity: "test",
      }),
    };
    return fetch("https://thebsv.tech/centralbank/getassets", payload).then(
      (res) => res.json()
    );
  }

  getsubscribers() {
    const payload = {
      method: "POST",
      body: JSON.stringify({
        entity: "test",
      }),
    };
    return fetch(
      "https://thebsv.tech/centralbank/getsubscribers",
      payload
    ).then((res) => res.json());
  }

  getCentralToSubscriber() {
    const payload = {
      method: "POST",
      body: JSON.stringify({
        entity: "test",
        asset: "test",
        amount: "test",
        fromaccount: "test",
        toaccount: "test",
      }),
    };
    return fetch(
      "https://thebsv.tech/centralbank/sendcentraltosubscriber",
      payload
    ).then((res) => res.json());
  }
}

export { IssuanceService };
