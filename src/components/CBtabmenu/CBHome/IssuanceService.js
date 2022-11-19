import { toast } from "react-toastify";

class IssuanceService {
  sendcentraltosubscriber(assetid, assetname, participant, amount) {
    const payload = {
      method: "POST",
      body: JSON.stringify({
        asset: {
          assetid: assetid,
          issuetype: assetname,
        },
        amount: amount,
        central: {
          accountholder: "central",
          accountnumber: "CAC-CEN901-0001",
        },
        subscriber: {
          accountholder: "subscriber",
          accountnumber: participant,
        },
      }),
    };
    return fetch(
      "https://thebsv.tech/centralbank/sendcentraltosubscriber",
      payload
    )
      .then((res) => res.json())
      .then((response) => {
        // alert("success");
        console.log(response);
      })
      .catch((e) => {
        console.log("e", e);
      });
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
    return fetch("https://thebsv.tech/centralbank/mintasset", payload)
      .then((res) => res.json())
      .then((response) => {
        // alert("success");
        console.log(response);
      })
      .catch((e) => {
        console.log("e", e);
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
        // alert("success");
        // toast.success("success");
        console.log(response);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }

  entitymintasset(asset, centralaccount, mintamount) {
    const payload = {
      method: "POST",
      body: JSON.stringify({
        asset: {
          assetid: asset,
          issuetype: centralaccount,
        },
        amount: mintamount,
      }),
    };

    return fetch("https://thebsv.tech/centralbank/entitymintasset", payload)
      .then((res) => res.json())
      .then((response) => {
        // alert("success");
        // toast.success("transfered");
        console.log(response);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }

  makeassetavailble(assetid, centralaccount, mintamount) {
    const payload = {
      asset: {
        assetid: assetid,
        issuetype: "Cash_BINR",
      },
      amount: mintamount,
      operationaccount: {
        accountholder: "central",
        accountnumber: "CAC-CEN901-0001",
      },
    };
    return fetch(
      "https://thebsv.tech/centralbank/makeassetavailableincentralbank",
      payload
    )
      .then((res) => res.json())
      .then((response) => {
        alert("success");
        // toast.success("success");
        console.log(response);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }

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
