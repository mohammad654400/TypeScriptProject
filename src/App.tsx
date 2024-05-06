import React, { useEffect, useState } from "react";
import Elements from "./elements";
import ViewElements from "./view-elements";
import Details from "./details";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { ApiItem, baseType } from "./types";
import axios from "axios";

function App() {
  const [selectedItemId, setSelectedItemId] = useState<string>("");
  const [elementList, setElementList] = useState<baseType[]>([]);
  const [dataItemSelect, setDataItemSelect] = useState<baseType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [getApi, setGetApi] = useState<ApiItem[]>([]);
  const baseURL =
    "http://universities.hipolabs.com/search?country=United+States";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        const firstTenItems = response.data.slice(0, 10);
        setGetApi(firstTenItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const generateRandomId = (type: string) => {
    return `${type}-${Math.random() * 1000}`;
  };

  const elementBaseData = {
    width: 6,
    height: 6,
    title: "hi",
    order: elementList.length + 1,
  };

  const addItemToList = (type: string) => {
    const newItem: baseType = {
      id: generateRandomId(type),
      type: type,
      ...elementBaseData,
    };
    setElementList([...elementList, newItem]);
  };

  const updateList = (newData: Partial<baseType>, itemId: string) => {
    if (itemId && newData) {
      const updatedList = elementList.map((item) =>
        item.id === itemId ? { ...item, ...newData } : item
      );

      updatedList.sort(function (a, b) {
        return a.order - b.order;
      });

      setElementList(updatedList);
    }
  };
  console.log("elementList", elementList);

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
            selectedItemId={selectedItemId}
          />
        </Col>
        <Col>
          <Details
            updateList={updateList}
            dataItemSelect={dataItemSelect}
            getApi={getApi}
            loading={loading}
            selectedItemId={selectedItemId}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
