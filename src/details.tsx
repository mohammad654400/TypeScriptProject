import { useEffect, useState } from "react";
import { baseType, form } from "./types";
import { ButtonsDetails } from "./componentDetails/buttons-details";
import { TextDetails } from "./componentDetails/text-details";

interface DetailsProps {
  updateList: (newData: Partial<baseType>) => void;
  dataItemSelect?: baseType;
}

const Details: React.FC<DetailsProps> = ({ updateList, dataItemSelect }) => {
  console.log("dataItemSelect", dataItemSelect);

  const [inputs, setInputs] = useState<form>({
    title: dataItemSelect ? dataItemSelect.title : "",
    width: dataItemSelect ? dataItemSelect.width : 0,
    height: dataItemSelect ? dataItemSelect.height : 0,
    order: dataItemSelect ? dataItemSelect.order : 0,
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
