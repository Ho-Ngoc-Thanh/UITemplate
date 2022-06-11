import "./Dashboard.scss";
import { Row, Col, Card } from "antd";
function Dashboard() {
 
  
  return (
    <>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          Col
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
      </Row>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
      </Row>
      <Row>
        <Col>5</Col>
        <Col>6</Col>
      </Row>
    </>
  );
}

export default Dashboard;
