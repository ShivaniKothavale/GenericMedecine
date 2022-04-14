import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Tab, Tabs} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";
import OrdersList from './OrdersList';
import ProductStockList from './ProductStockList';
import UpdateStockForm from './UpdateStockForm';

const ShopperDashboard = (props) => {

    const [user, setUser] = useState()

    const navigate = useNavigate();

    useEffect(()=>{
        let userString = sessionStorage.getItem("user")
        if(userString){
            let u = JSON.parse(userString)
            if(u.usertype === "shopper"){
                setUser(u)
            }else{
                navigate('/login');
            }
        }else{
            navigate('/login');
        }
    },[])


  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>
            <strong>Shopper Dashboard</strong>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <Tabs
            defaultActiveKey="form1"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="form1" title="Ongoing Orders">
              <OrdersList user={user}/>
            </Tab>
            <Tab eventKey="form2" title="Product Stock">
                <ProductStockList products={[]}/>
            </Tab>
            <Tab eventKey="form3" title="Update Stock">
              <UpdateStockForm/>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};
export default ShopperDashboard;
