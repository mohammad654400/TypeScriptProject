import { baseType } from "./types";

const ViewElements = ({
  viewData,
  setSelectedItem,
  setDataItemSelect,
}: {
  viewData: baseType[];
  setSelectedItem: (id: string) => void;
  setDataItemSelect: (item: baseType) => void;
}) => {
  interface RenderOptions {
    [key: string]: (
      id: string,
      title: string,
      width: number,
      height: number
    ) => JSX.Element;
  }

  const renderOptions: RenderOptions = {
    text: (id, title, width, height) => <h1>{title}</h1>,
    button: (id, title, width, height) => (
      <button style={{ width: "100%", height: "100%" }}>{title}</button>
    ),
    select: (id, title, width, height) => <select>{title}</select>,
  };

  const handleItemClick = (item: baseType) => {
    setSelectedItem(item.id);
    setDataItemSelect(item);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(24,1fr)",
        gridTemplateRows: "repeat(24,1fr)",
        gridGap: "10px",
        backgroundColor: "green",
      }}
    >
      {viewData.map((item) => (
        <div
          key={item.id}
          onClick={() => handleItemClick(item)}
          style={{
            gridColumnEnd: `span ${item.width}`,
            gridRowEnd: `span ${item.height}`,
          }}
        >
          {item.type in renderOptions &&
            renderOptions[item.type](
              item.id,
              item.title,
              item.width,
              item.height
            )}
          <p>Order: {item.order}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewElements;
