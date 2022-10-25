import { Card } from "primereact/card";
import { Button } from "primereact/button";
import React from "react";

const InformationSubmitted = ({ activeIndex, setActiveIndex }) => {
  return (
    <Card
      style={{ textAlign: "center" }}
      title="you information has been submitted"
    >
      {/* <div className="card">you information has been submitted</div> */}

      <p>what happened on CORDA?</p>
      <Button
        label="proceed"
        activeIndex={0}
        onClick={() => {
          setActiveIndex(0);
        }}
      />
      {/* </div> */}
    </Card>
  );
};

export default InformationSubmitted;
