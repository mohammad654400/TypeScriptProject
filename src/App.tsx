import { useState } from "react";
import Elements from "./elements";
import ViewElements from "./view-elements";
import Details from "./details";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { baseType } from "./types";
function App() {
  const [selected, setSelected] = useState<string>("");
  const [elementList, setElementList] = useState<baseType[]>([]);

  const generateRandomeId = (type: string) => {
    return `${type}-${Math.random() * 1000}`;
  };

  const elementbaseData = {
    width: 6,
    title: "hi",
  };

  const addItemToList = (type: string) => {
    const newItem: baseType = {
      id: generateRandomeId(type),
      type: type,
      ...elementbaseData,
      // order: elementList.length + 1,
    };
    setElementList([...elementList, newItem]);
  };

  const findType = elementList.map((item) =>
    item.id === selected ? item.type : ""
  );
  // const updateList = (newData: Partial<baseType>) => {
  //   if (selected && newData) {
  //     const updatedList = elementList.map((item) =>
  //       item.id === selected ? { ...item, ...newData } : item
  //     );
  //     setElementList(updatedList);
  //     console.log("newelementList", updatedList);
  //   } else {
  //     console.log("NullnewelementList", elementList);
  //   }
  // };
  const updateList = (newData: Partial<baseType>) => {
    if (selected && newData) {
      const updatedList = elementList.map((item) =>
        item.id === selected ? { ...item, ...newData } : item
      );

      // مرتب‌سازی لیست بر اساس order
      // updatedList.sort((a, b) => a.order - b.order);

      setElementList(updatedList);
    }
  };

  console.log("dataelementList", elementList);

  return (
    <Container>
      <Row>
        <Col>
          <Elements getType={addItemToList} />
        </Col>
        <Col>
          <ViewElements viewData={elementList} setSelectedItem={setSelected} />
        </Col>
        <Col>
          <Details findTypeitem={findType} updateList={updateList} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
