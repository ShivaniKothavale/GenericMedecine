import { Container, Row, Col, Form, Button } from "react-bootstrap";

const UpdateStockForm = (props) => {
    return(
        <Container>
        <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>
            <strong>Update stock</strong>
          </h2>
        </Col>
      </Row>
  <Row>
    <Col>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Select Product</Form.Label>
    <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Enter quantity" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Update
  </Button>
</Form>
    </Col>
  </Row>
</Container>
    )
}

export default UpdateStockForm;