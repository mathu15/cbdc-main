import { Card } from "primereact/card";
import { Button } from "primereact/button";
import React from "react";

// user information submitted message
const InformationSubmitted = ({ setActiveIndex }) => {
  return (
    <Card
      style={{ textAlign: "center" }}
      title="your information has been submitted"
    >
      <p>what happened on MoneySwipe?</p>
      <Button
        label="proceed"
        // activeIndex={activeIndex}
        onClick={() => {
          setActiveIndex(0);
        }}
      />
    </Card>
  );
};

export default InformationSubmitted;
