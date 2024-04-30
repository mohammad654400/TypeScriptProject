import { form } from "../types";

interface TextDetailsProps {
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  inputsData?: form;
}
export const TextDetails: React.FC<TextDetailsProps> = ({
  handleChangeInput,
  handleChangeSelect,
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
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label>
        Enter your width:
        <input
          type="number"
          name="width"
          value={inputsData?.width}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label>
        Enter your height:
        <input
          type="number"
          name="height"
          value={inputsData?.height}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label>
        Enter order:
        <input
          type="number"
          name="order"
          value={inputsData?.order}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label>
        Enter your font-size:
        <input
          type="number"
          name="fontSize"
          value={inputsData?.fontSize}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label>
        Enter color:
        <input
          type="text"
          name="color"
          value={inputsData?.color}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label>
        Select display:
        <select
          name="display"
          value={inputsData?.display}
          onChange={handleChangeSelect}
        >
          <option value="block">Block</option>
          <option value="inline">Inline</option>
          <option value="inline-block">Inline Block</option>
          <option value="flex">Flex</option>
          <option value="grid">Grid</option>
          <option value="none">None</option>
        </select>
      </label>
      <br />
      <label>
        Select justify-content:
        <select
          name="justifyContent"
          value={inputsData?.justifyContent}
          onChange={handleChangeSelect}
        >
          <option value="flex-start">Flex Start</option>
          <option value="flex-end">Flex End</option>
          <option value="center">Center</option>
          <option value="space-between">Space Between</option>
          <option value="space-around">Space Around</option>
          <option value="space-evenly">Space Evenly</option>
        </select>
      </label>
      <br />
      <label>
        Select align-items:
        <select
          name="alignItem"
          value={inputsData?.alignItem}
          onChange={handleChangeSelect}
        >
          <option value="flex-start">Flex Start</option>
          <option value="flex-end">Flex End</option>
          <option value="center">Center</option>
          <option value="end">End</option>
          <option value="start">Start</option>
        </select>
      </label>
    </>
  );
};
