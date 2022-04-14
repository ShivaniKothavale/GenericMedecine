import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Alert, Button } from 'react-bootstrap'
import { useState } from 'react'

// added by shivani
const ShopperRegistrationForm = (props) => {

    let formData =  {
        "userid": "",
        "password": "",
        "email": "",
        "contact": "",
        "area": "",
        "city": "",
        "pincode": "",
        "usertype": "shopper",
        "shopname": "",
        "retail_lc_no": "",
        "acp_lc_no": ""
    }

    const [form, setForm] = useState(formData);
    const [registration, setRegistration] = useState(undefined)

    const handleInput = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(form)
        }
        fetch("http://localhost:8080/shoppers", reqOptions)
            .then(res => {
                if(res.ok){
                    setRegistration(true)
                }else{
                    setRegistration(false)
                }
            })
    }

    return (
        <>
        { registration && <Alert variant="success">
                <Alert.Heading>Registration completed.</Alert.Heading>
            </Alert>}
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="forshopname">
                <Form.Label column sm={2} >Shop Name</Form.Label>
                <Col sm={10}><Form.Control name="shopname" type="text" onChange={handleInput} placeholder="Enter shop name" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forlic">
                <Form.Label column sm={2}>License</Form.Label>
                <Col sm={10}><Form.Control name="retail_lc_no" type="text" onChange={handleInput} placeholder="Enter license" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="foracplic">
                <Form.Label column sm={2}>Acceptence License</Form.Label>
                <Col sm={10}><Form.Control name="acp_lc_no" type="text" onChange={handleInput} placeholder="Enter acceptance license" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="foruserid">
                <Form.Label column sm={2}>User ID</Form.Label>
                <Col sm={10}><Form.Control name="userid" type="text" onChange={handleInput} placeholder="Enter user id" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                <Form.Label column sm={2}>Password</Form.Label>
                <Col sm={10}><Form.Control name="password" type="password" onChange={handleInput} placeholder="Password" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="foremail">
                <Form.Label column sm={2}>Email</Form.Label>
                <Col sm={10}><Form.Control name="email" type="email" onChange={handleInput} placeholder="Enter email" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forcontact">
                <Form.Label column sm={2}>Contact</Form.Label>
                <Col sm={10}><Form.Control name="contact" type="number" onChange={handleInput} placeholder="Enter contact" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forarea">
                <Form.Label column sm={2}>Area</Form.Label>
                <Col sm={10}><Form.Control name="area" type="text" onChange={handleInput} placeholder="Enter area" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forcity">
                <Form.Label column sm={2}>City</Form.Label>
                <Col sm={10}><Form.Control name="city" type="text" onChange={handleInput} placeholder="Enter city" /></Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="forpincode">
                <Form.Label column sm={2}>Pincode</Form.Label>
                <Col sm={10}><Form.Control name="pincode" type="number" onChange={handleInput} placeholder="Enter pincode" /></Col>
            </Form.Group>
           
            <Form.Group as={Row} className="mb-3" controlId="forpincode">
                <Col md={{ span: 3, offset: 2 }}>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                        Submit
                    </Button>
                </Col>
            </Form.Group>
        </Form>
        </>
    )
}

export default ShopperRegistrationForm