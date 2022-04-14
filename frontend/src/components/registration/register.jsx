import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Tab, Tabs} from "react-bootstrap";
import ShopperRegistrationForm from "./forms/ShopperRegistration";
import CustomerRegister from "./forms/CustomerRegistration";

const RegisterForm = (props) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h2>
            <strong>Welcome to Generic Medicine Portal</strong>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h3>
            <strong>Please SignUp </strong>
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="8">
          <Tabs
            defaultActiveKey="form1"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="form1" title="Customer Registration">
              <CustomerRegister/>
            </Tab>
            <Tab eventKey="form2" title="Shopper Registration">
              <ShopperRegistrationForm/>
            </Tab>
            <Tab eventKey="form3" title="Shipper Registration">
              <h4>3</h4>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};
export default RegisterForm;
