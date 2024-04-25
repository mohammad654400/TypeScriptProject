interface ElementsProps {
  getType: (type: string) => void;
}

const Elements: React.FC<ElementsProps> = (props) => {
  const handleButtonClick = (type: string) => {
    props.getType(type);
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      <button onClick={() => handleButtonClick("button")}>button</button>
      <button onClick={() => handleButtonClick("text")}>text</button>
      <button onClick={() => handleButtonClick("select")}>select</button>
    </div>
  );
};
export default Elements;
