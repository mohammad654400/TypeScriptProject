import React, { useState, useEffect } from "react";
import { ApiItem, baseType, form } from "./types";
import { SelectedDetails } from "./componentDetails/selecteds-details";
import { TextDetails } from "./componentDetails/text-details";
import { ButtonsDetails } from "./componentDetails/buttons-details";

interface DetailsProps {
  updateList: (newData: Partial<baseType>, itemId: string) => void;
  dataItemSelect?: baseType;
  getApi: ApiItem[];
  loading: boolean;
  selectedItemId: string;
}

const Details: React.FC<DetailsProps> = ({
  updateList,
  dataItemSelect,
  getApi,
  loading,
  selectedItemId,
}) => {
  const [inputs, setInputs] = useState<form>({
    title: dataItemSelect?.title || "",
    width: dataItemSelect?.width || 0,
    height: dataItemSelect?.height || 0,
    order: dataItemSelect?.order || 0,
    selectItem: dataItemSelect?.selectItem || [],
  });

  console.log("inputsDetails", inputs.selectItem);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setInputs((prevInputs) => {
      if (checked) {
        return {
          ...prevInputs,
          selectItem: [...(prevInputs.selectItem || []), value],
        };
      } else {
        return {
          ...prevInputs,
          selectItem: (prevInputs.selectItem || []).filter(
            (item) => item !== value
          ),
        };
      }
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateList(inputs, selectedItemId);
    
    
  };

  useEffect(() => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      title: dataItemSelect?.title || "",
      width: dataItemSelect?.width || 0,
      height: dataItemSelect?.height || 0,
      order: dataItemSelect?.order || 0,
      color: dataItemSelect?.color || "",
      fontSize: dataItemSelect?.fontSize || 0,
      display: dataItemSelect?.display || "",
      justifyContent: dataItemSelect?.justifyContent || "",
      alignItem: dataItemSelect?.alignItem || "",
      selectItem: Array.isArray(dataItemSelect?.selectItem)
        ? dataItemSelect.selectItem
        : [],
    }));
  }, [dataItemSelect, selectedItemId]);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>type: {dataItemSelect?.type}</h1>
      {dataItemSelect != null ? (
        <form onSubmit={handleSubmit}>
          {dataItemSelect.type === "button" ? (
            <ButtonsDetails handleChange={handleChange} inputsData={inputs} />
          ) : dataItemSelect.type === "text" ? (
            <TextDetails
              handleChangeInput={handleChange}
              handleChangeSelect={handleChangeSelect}
              inputsData={inputs}
            />
          ) : dataItemSelect.type === "select" ? (
            <SelectedDetails
              getApiName={getApi}
              loading={loading}
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
              inputsData={inputs}
            />
          ) : (
            <p>null</p>
          )}

          <br />
          <input type="submit" />
        </form>
      ) : null}
    </div>
  );
};
export default Details;
