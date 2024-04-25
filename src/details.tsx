import { useState } from "react";
import { baseType, form } from "./types";

interface DetailsProps {
  findTypeitem: string[];
  updateList: (newData: Partial<baseType>) => void;
  //dataItemSelect:baseType
}

const Details: React.FC<DetailsProps> = ({
  findTypeitem,
  updateList,
  // dataItemSelect
}) => {
  //console.log("newDataItemSelect", dataItemSelect);

  const [inputs, setInputs] = useState<form>({
    title: "",
    width: 0,
    height: 0,
    order: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateList(inputs);
  };

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>type: {findTypeitem}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your title:
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your width:
          <input
            type="number"
            name="width"
            value={inputs.width || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your height:
          <input
            type="number"
            name="height"
            value={inputs.height || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter order:
          <input
            type="number"
            name="order"
            value={inputs.order.toString() || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Details;
