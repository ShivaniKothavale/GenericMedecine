import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'

// added by shivani
const ShopperRegistrationForm = (props) => {

    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="forshopname">
                <Form.Label column sm={2} >Shop Name</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter shop name" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forlic">
                <Form.Label column sm={2}>License</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter license" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="foracplic">
                <Form.Label column sm={2}>Acceptence License</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter acceptance license" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="foruserid">
                <Form.Label column sm={2}>User ID</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter user id" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Form.Label column sm={2}>Password</Form.Label>
                <Col sm={10}><Form.Control type="password" placeholder="Password" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="foremail">
                <Form.Label column sm={2}>Email</Form.Label>
                <Col sm={10}><Form.Control type="email" placeholder="Enter email" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forcontact">
                <Form.Label column sm={2}>Contact</Form.Label>
                <Col sm={10}><Form.Control type="number" placeholder="Enter contact" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forarea">
                <Form.Label column sm={2}>Area</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter area" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forcity">
                <Form.Label column sm={2}>City</Form.Label>
                <Col sm={10}><Form.Control type="text" placeholder="Enter city" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forpincode">
                <Form.Label column sm={2}>Pincode</Form.Label>
                <Col sm={10}><Form.Control type="number" placeholder="Enter pincode" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forpincode">
                <Col md={{ span: 3, offset: 2 }}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default ShopperRegistrationForm