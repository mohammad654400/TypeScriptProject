import { form } from "../types";
interface ButtonsDetailsProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputsData?: form;
}
export const ButtonsDetails: React.FC<ButtonsDetailsProps> = ({
  handleChange,
  inputsData,
}) => {
  return (
    <>
      <label>
        Enter your title:
        <input
          type="text"
          name="title"
          value={inputsData?.title}
          onChange={handleChange}
        />
      </label>
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
