import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import AddUsers from "./components/AddUsers";
import UsersList from "./components/UsersList";

const App = () => {
  const [saveData, setSaveData] = useState([]);
  const addUsersData = (uName, uAge) => {
    setSaveData((prevData) => {
      return [
        ...prevData,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <Container>
        <Row className="mt-2 d-flex justify-content-center ">
          <Col xs={8}>
            <AddUsers onAddUsers={addUsersData} />
          </Col>
        </Row>
        <Row className="mt-5 d-flex justify-content-center">
          <Col xs={8}>
            <UsersList onSave={saveData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
