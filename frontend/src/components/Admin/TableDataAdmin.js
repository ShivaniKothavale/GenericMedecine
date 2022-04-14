import styled from "styled-components";

import React from "react";
import { Link } from "react-router-dom";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export default class TableDataAdmin extends React.Component
{


  constructor(props)
      {
        super(props);

        this.state ={
          p:[],
          DataisLoaded: false
        };
      }


      componentDidMount=()=>
      {
          fetch("http://localhost:8080/showProduct")
          .then(resp=>resp.json())
          .then((json) => {
            this.setState({
                p: json,
                DataisLoaded: true
            });
        })
      }


      deleteProduct=(p1)=>{
        console.log(p1)
      

      }


        render()
        {

          const { DataisLoaded, p } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
          return(
            <div>
                
             <table class="table table-bordered">
    

    <th scope="row">ProductName</th>
      <th scope="row">Description</th>
      <th scope="row">MRP</th>
      <th scope="row">Generic_Price</th>
            
        {
    p.map((p1)=>(
   
   
    <tr key={p1.pid}>
                      <td>{p1.pname}</td>
                      <td>{p1.p_desc}</td>
                      <td>{p1.mrp_price}</td>

                      <td>{p1.generic_price}</td>
                      <td>  <Link to="/updateProduct">< input type="button" value="Edit"></input> </Link> </td>
                      <td onClick={this.deleteProduct(p1)}>   < input type="submit" value="Delete" ></input>  </td>
  </tr>



                  
                ))

          }
         </table>

            </div>
          )
        }
      
}
