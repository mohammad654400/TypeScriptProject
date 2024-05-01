import React, { useState } from "react";

interface SelectedDetailsProps {
  getApiName: string[];
  loading: boolean;
  handleChangeInput: (selectedItems: string[]) => void;
}

export const SelectedDetails: React.FC<SelectedDetailsProps> = ({
  getApiName,
  loading,
  handleChangeInput,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== value)
      );
    }
    handleChangeInput(selectedItems);
  };

  return (
    <>
      {loading === true ? (
        <p>loading...</p>
      ) : (
        <ul>
          {getApiName.map((x) => (
            <li key={x.name}>
              <label>
                <input
                  type="checkbox"
                  value={x.name}
                  name={x.alpha_two_code}
                  checked={selectedItems.includes(x.name)}
                  onChange={handleOnChange}
                />
                {x.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
