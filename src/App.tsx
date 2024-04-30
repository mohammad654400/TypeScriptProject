import { useState } from "react";
import Elements from "./elements";
import ViewElements from "./view-elements";
import Details from "./details";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { baseType } from "./types";
function App() {
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const [elementList, setElementList] = useState<baseType[]>([]);
  const [dataItemSelect, setDataItemSelect] = useState<baseType>();

  const generateRandomeId = (type: string) => {
    return `${type}-${Math.random() * 1000}`;
  };

  const elementbaseData = {
    width: 6,
    height: 6,
    title: "hi",
    order: elementList.length + 1,
  };

  const addItemToList = (type: string) => {
    const newItem: baseType = {
      id: generateRandomeId(type),
      type: type,
      ...elementbaseData,
    };
    setElementList([...elementList, newItem]);
  };
  // const findType = elementList.map((item) =>
  //   item.id === selectedItemId ? item.type : ""
  // );

  const updateList = (newData: Partial<baseType>) => {
    if (selectedItemId && newData) {
      const updatedList = elementList.map((item) =>
        item.id === selectedItemId ? { ...item, ...newData } : item
      );

      updatedList.sort(function (a, b) {
        return a.order - b.order;
      });

      setElementList(updatedList);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Elements getType={addItemToList} />
        </Col>
        <Col>
          <ViewElements
            viewData={elementList}
            setSelectedItem={setSelectedItemId}
            setDataItemSelect={setDataItemSelect}
          />
        </Col>
        <Col>
          <Details
            updateList={updateList}
            dataItemSelect={dataItemSelect}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
