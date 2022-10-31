import React from "react";
import { InputSwitch } from "primereact/inputswitch";

const MAC = ({ data, setData }) => {
  return (
    <div className="card flex-column align-items-center">
      <h5 className="text-center">Configure Member Access Control</h5>
      <p className=" text-xl text-center  border-bottom-1 surface-border surface-overlay ">
        This rule ensures that a party must have been granted member access in
        order to transact in this asset type. By default, this rule is enabled,
        but may be turned off.
      </p>
      <p className="text-xl text-center">
        Toggle the switch below to enable/disable this control.
      </p>

      <h5 className="text-center">Member Access Required</h5>
      <div className="text-center pt-3">
        <InputSwitch
          checked={data.access}
          onChange={(e) =>
            setData((data) => {
              return { ...data, access: e.value };
            })
          }
        />
      </div>
    </div>
  );
};

export default MAC;
