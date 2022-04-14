import React from 'react';
import { Link } from "react-router-dom";

class CustomerRegister extends React.Component
{

            constructor(props)
            {
                super(props);
                this.state={
                    fname:"",
                    lname:"",
                    userid:"",
                    email:"",                    
                    password:"",
                    contact:"",
                    city:"",
                    area:"",
                    pincode:"",
                    usertype:"customer",
                    gender:"",
                   
                    customer:{}
                }
              
            }


           
            handleInput=(ev)=>{
                    
                const nm=ev.target.name;
                let val=ev.target.value;
                const type=ev.target.type;
                if(type=="checkbox")
                {
                    val=ev.target.checked;
                   
                }
                else
                {
                    val=ev.target.value;
                }

               this.setState({[nm]:val})

            console.log(this.state)
            }



            submitData=(ev)=>{
              
                ev.preventDefault();

                const reqOptions={
                    method:'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },

                    body: JSON.stringify({
                        userid:this.state.userid,
                        password:this.state.password,
                        email:this.state.email,
                        contact:this.state.contact,
                        area:this.state.area,
                        city:this.state.city,
                        pincode:this.state.pincode,
                        usertype:this.state.usertype,                       
                        fname:this.state.fname,
                        lname:this.state.lname,
                        gender:this.state.gender
                    })
                }
                fetch("http://localhost:8080/savecustomer",reqOptions)
                .then(res=>res.json())
                .then(data=>this.setState({customer:data}))
             
            }

           




            render()
            {

                return(
                    <div className="container" >

                        <h3>Customer Registration Form</h3>

                        <form>
                <h3>Sign Up</h3>
                
                <div className="form-group">
                    <label></label>
                    <input type="text" name="fname" onChange={this.handleInput} className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label></label>
                    <input type="text"  name="lname" onChange={this.handleInput}  className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label></label>
                    <input type="email"  name="email" onChange={this.handleInput}  className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label></label>
                    <input type="text"  name="userid" onChange={this.handleInput}    className="form-control" placeholder="Enter userid" />
                </div>
                <div className="form-group">
                    <label></label>
                    <input type="password" name="password" onChange={this.handleInput} className="form-control" placeholder="Enter password" />
                </div>
                

                <div className="form-group">
                    <label></label>
                    <input type="text" name="area" placeholder='Area' 
                            onChange={this.handleInput} className="form-control" />
                </div>


                <div className="form-group">
                    <label></label>
                    <input type="text" name="city" placeholder='City ' 
                            onChange={this.handleInput} className="form-control" />
                </div>


                <div className="form-group">
                    <label></label>
                    <input type="text" name="pincode" placeholder='Pincode ' 
                            onChange={this.handleInput} className="form-control"  />
                </div>


                <div className="form-group">
                    <label></label>
                    <label></label>
                    <label>Gender</label>
                    <input type="radio" name="gender" value="Male" onChange={this.handleInput}  />Male
                    <input type="radio" name="gender" value="Female" onChange={this.handleInput} />Female
                </div>

                


                <label></label>
                    <label></label>


                <input  type="submit"  value="Register"   onClick={this.submitData} className="btn btn-primary btn-block"/>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">sign in?</Link>
                </p>{/**/}
            </form>
             </div>
                )
            }
}


export default CustomerRegister;