import React from "react";
import Navbar from "./Navbar";


export default class ViewCart extends React.Component
{
    constructor(props)
    {
      super(props);
        this.state=
        {
            cart:[],
            total:[],
            totalamt:"0",
            orders:{},
             date1 : "",
             pstatus:"pending",
             ostatus:"pending"
        }
    }

    componentDidMount=()=>
    {
        let cartString=sessionStorage.getItem("cart");
        if(cartString != undefined)
        {
            let cart=JSON.parse(cartString )
            let total=cart.map((p)=>p.product.generic_price)
            let totalamt=total.reduce((a,b)=>a+b,0);
            this.setState({cart,total,totalamt})
        }
    }
    
    
    calculatetotal=(i,value)=>{
        let unittotal=this.state.cart[i].product.generic_price
        let totalvalue=value*unittotal;
        let total=this.state.total;
        total[i]=totalvalue;
        let totalamt=total.reduce((a,b)=>a+b,0);
        this.setState({total,totalamt})


    }


    submitData=(ev)=>{
              
        ev.preventDefault();

        const reqOptions={
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },

            body: JSON.stringify({
                odate:this.state.date1,
                customer:this.state.cust_id,
                shopper:this.state.shopid,
                price:this.state.totalamt,
                pstatus:this.state.pstatus,
                ostatus:this.state.ostatus,
                orderItemList:[
                   // product:this.state.pid,
                  //  qty:this.state.qty
                ]
            })
        }
        fetch("http://localhost:8080/saveorder",reqOptions)
        .then(res=>res.json())
        .then(data=>this.setState({orders:data}))
     
    }






    Remove=(p1)=>{

        console.log(p1);
    }


    render()
    {

        return(
            <div>
                <h1>View Cart</h1>
                <table>
                    <tr>
                    <th>
                        pid
                    </th>
                    <th>
                        Product
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Qty
                    </th>

                    <th>
                        Total
                    </th>
                    </tr>
                    {
                    this.state.cart.map((p1,i)=>{

                        return(<tr>
                            <td>{i+1}</td>
                            <td>{p1.product.pname}</td>
                            <td>{p1.product.generic_price}</td>
                            <td><input type="number" min="0"  onChange={(e)=>this.calculatetotal(i,e.target.value)}/></td>
                            <td>{this.state.total[i]}</td>
                            <td><input type="button" value="Remove"  onClick={()=>this.Remove(p1.psid)} ></input></td>
                        </tr>)
                    })
                }

                <tr>
                    <td colSpan={4}>Total Amount : {this.state.totalamt}</td>
                </tr>
                
                    <tr>
                        <td><input type="button" value="Confirm Cart" onClick={()=>this.submit}  ></input> </td>
                    </tr>
                </table>




                
            </div>
        )

    }

}