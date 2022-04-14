import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Alert, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

// added by shivani
const ShipperRegistrationForm = (props) => {

    let formData = {
        "userid": "",
        "password": "",
        "email": "",
        "contact": "",
        "area": "",
        "city": "",
        "pincode": "",
        "usertype": "shipper",
        "shopid": 0,
        "fname": "",
        "lname": "",
        "gender": ""
    }

    const [form, setForm] = useState(formData);
    const [shops, setShops] = useState([])
    const [registration, setRegistration] = useState(undefined)

    useEffect(() => {
        fetch("http://localhost:8080/shoppers")
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])

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
        fetch("http://localhost:8080/shippers", reqOptions)
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
            { registration === false && <Alert variant="danger">
                <Alert.Heading>Registration failed. Shipper already registerd for this shop.</Alert.Heading>
            </Alert>}
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="forfname">
                    <Form.Label column sm={2} >First Name</Form.Label>
                    <Col sm={10}><Form.Control name="fname" type="text" onChange={handleInput} placeholder="Enter First Name" /></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="forlname">
                    <Form.Label column sm={2}>Last Name</Form.Label>
                    <Col sm={10}><Form.Control name="lname" type="text" onChange={handleInput} placeholder="Enter Last Name" /></Col>
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
                    <Form.Label column sm={2}>Shop</Form.Label>
                    <Col sm={10}>
                        <Form.Select name="shopid" onChange={handleInput}>
                            {shops.map((shop) => {
                                return <option key={shop.uid} value={shop.uid}>{shop.shopname}</option>
                            })}
                        </Form.Select>
                    </Col>
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
                    <Form.Label column sm={2}>Gender</Form.Label>
                    <Col sm={10}>
                        <input type="radio" name="gender" value="Male" onChange={handleInput} />Male
                        <input type="radio" name="gender" value="Female" onChange={handleInput} />Female
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
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

export default ShipperRegistrationForm