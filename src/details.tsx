import React, { useState, useEffect } from "react";
import { baseType, form } from "./types";
import { SelectedDetails } from "./componentDetails/selecteds-details";
import { TextDetails } from "./componentDetails/text-details";
import { ButtonsDetails } from "./componentDetails/buttons-details";

interface DetailsProps {
  updateList: (newData: Partial<baseType>) => void;
  dataItemSelect?: baseType;
  getApi: string[];
  loading: boolean;
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const Details: React.FC<DetailsProps> = ({
  updateList,
  dataItemSelect,
  getApi,
  loading,
  setSelectedItems,
}) => {
  const [inputs, setInputs] = useState<form>({
    title: dataItemSelect ? dataItemSelect.title : "",
    width: dataItemSelect ? dataItemSelect.width : 0,
    height: dataItemSelect ? dataItemSelect.height : 0,
    order: dataItemSelect ? dataItemSelect.order : 0,
    selectItem: dataItemSelect ? dataItemSelect.selectItem : [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateList(inputs);
    setSelectedItems(inputs.selectItem || []); // به‌روزرسانی مقادیر انتخاب شده
  };

  useEffect(() => {
    setInputs({
      title: dataItemSelect ? dataItemSelect.title : "",
      width: dataItemSelect ? dataItemSelect.width : 0,
      height: dataItemSelect ? dataItemSelect.height : 0,
      order: dataItemSelect ? dataItemSelect.order : 0,
      color: dataItemSelect ? dataItemSelect.color : "",
      fontSize: dataItemSelect ? dataItemSelect?.fontSize : 0,
      display: dataItemSelect ? dataItemSelect?.display : "",
      justifyContent: dataItemSelect ? dataItemSelect?.justifyContent : "",
      alignItem: dataItemSelect ? dataItemSelect?.alignItem : "",
      selectItem: dataItemSelect ? dataItemSelect.selectItem : [],
    });
  }, [dataItemSelect]);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>type: {dataItemSelect?.type}</h1>
      {dataItemSelect != null ? (
        <form onSubmit={handleSubmit}>
          {dataItemSelect.type == "button" ? (
            <ButtonsDetails handleChange={handleChange} inputsData={inputs} />
          ) : dataItemSelect.type == "text" ? (
            <TextDetails
              handleChangeInput={handleChange}
              handleChangeSelect={handleChangeSelect}
              inputsData={inputs}
            />
          ) : dataItemSelect.type == "select" ? (
            <SelectedDetails
              getApiName={getApi}
              loading={loading}
              handleChangeInput={(selectedItems) => {
                setInputs((prevInputs) => ({
                  ...prevInputs,
                  selectItem: selectedItems,
                }));
              }}
            />
          ) : (
            <p>null</p>
          )}

          <br />
          <input type="submit" />
        </form>
      ) : null}{" "}
    </div>
  );
};
export default Details;
