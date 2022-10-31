import React from "react";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";

export const CBName = ({ data, setData }) => {
  return (
    <div className="grid p-fluid">
      <div className="col-12 md:col-12">
        <div className="card">
          <h5 className="align-self-center pb-3">Enter the CBDC Name</h5>
          <span className="p-float-label">
            <InputText
              id="username"
              type="text"
              value={data.cbname}
              onChange={(e) =>
                setData((data) => {
                  return { ...data, cbname: e.target.value };
                })
              }
            />
            <label htmlFor="username">CBDC Name</label>
          </span>
        </div>
        <h5>Select the decimal place:0.00</h5>
        <div className="grid">
          <div className="col-12 md:col-3">
            <div className="field-radiobutton">
              <RadioButton
                inputId="option1"
                name="option"
                value={0}
                checked={data.decimal === 0}
                onChange={(e) =>
                  setData((data) => {
                    return { ...data, decimal: e.value };
                  })
                }
              />
              <label htmlFor="option1">0</label>
            </div>
          </div>
          <div className="col-12 md:col-3">
            <div className="field-radiobutton">
              <RadioButton
                inputId="option2"
                name="option"
                value={1}
                checked={data.decimal === 1}
                onChange={(e) =>
                  setData((data) => {
                    return { ...data, decimal: e.value };
                  })
                }
              />
              <label htmlFor="option2">1</label>
            </div>
          </div>
          <div className="col-12 md:col-3">
            <div className="field-radiobutton">
              <RadioButton
                inputId="option3"
                name="option"
                value={2}
                checked={data.decimal === 2}
                onChange={(e) =>
                  setData((data) => {
                    return { ...data, decimal: e.value };
                  })
                }
              />
              <label htmlFor="option3">2</label>
            </div>
          </div>
          <div className="col-12 md:col-3">
            <div className="field-radiobutton">
              <RadioButton
                inputId="option4"
                name="option"
                value={3}
                checked={data.decimal === 3}
                onChange={(e) =>
                  setData((data) => {
                    return { ...data, decimal: e.value };
                  })
                }
              />
              <label htmlFor="option4">3</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const comparisonFn = function (prevProps, nextProps) {
//   return prevProps.location.pathname === nextProps.location.pathname;
// };

export default CBName;
