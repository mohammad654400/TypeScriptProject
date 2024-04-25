import { baseType } from "./types";

const ViewElements = ({
  viewData,
  setSelectedItem,
}: {
  viewData: baseType[];
  setSelectedItem: (id: string) => void;
}) => {
  interface RenderOptions {
    [key: string]: (id: string, title: string, width: number) => JSX.Element;
  }

  const renderOptions: RenderOptions = {
    text: (id, title, width) => <h1>{title}</h1>,
    button: (id, title, width) => (
      <button style={{ width: "100%" }}>{title}</button>
    ),
    select: (id, title, width) => <select>{title}</select>,
  };

  const handelSelected = (id: string) => {
    setSelectedItem(id);
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
          onClick={() => handelSelected(item.id)}
          style={{ gridColumnEnd: `span ${item.width}` }}
        >
          {item.type in renderOptions &&
            renderOptions[item.type](item.id, item.title, item.width)}
          <p>Order: {item.order}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewElements;
