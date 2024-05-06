import React from "react";
import { ApiItem, form } from "../types";

interface SelectedDetailsProps {
  loading: boolean;
  getApiName: ApiItem[];
  inputsData?: form;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectedDetails: React.FC<SelectedDetailsProps> = ({
  getApiName,
  inputsData,
  loading,
  handleChange,
  handleCheckboxChange,
}) => {
  return (
    <>
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <ul>
            <p>Enter your selectItem:</p>
            {getApiName.map((x) => {
              return (
                <div key={x.name}>
                  <label>
                    <input
                      type="checkbox"
                      name="selectItem"
                      value={x.name}
                      checked={inputsData?.selectItem?.includes(x.name)}
                      onChange={handleCheckboxChange}
                    />
                    {x.name}
                  </label>
                </div>
              );
            })}
          </ul>
        )}
      </div>
      <br />
      <label>
        Enter your width:
        <input
          type="number"
          name="width"
          value={inputsData?.width}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter your height:
        <input
          type="number"
          name="height"
          value={inputsData?.height}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Enter order:
        <input
          type="number"
          name="order"
          value={inputsData?.order}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
