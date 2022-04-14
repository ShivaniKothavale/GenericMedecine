
import React from 'react';



class CustRegister extends React.Component
{

            constructor(props)
            {
                super(props);
                this.state={
                    fname:"",
                    lname:"",
                    userid:"",
                    mailid:"",                    
                    pwd:"",
                    contact:"",
                    city:"",
                    area:"",
                    pincode:"",
                    gender:"",
                    flag:false

                }
              //  this.handleInput=this.handleInput.bind(this);
            }


           
            handleInput=(ev)=>{

                const type=ev.target.type;
                const nm=ev.target.name;
                let val;
                if(type=="checkbox")
                {
                    val=ev.target.checked;
                   
                }
                else
                {
                    val=ev.target.value;
                }

             /*  const nm1=ev.target.name; //mailid or gender
               const val=ev.target.value;  //value user has entered
              */
               this.setState({[nm]:val})

            /*   switch(ev)
               {
                   case "emailid":
                       break;
                       case "pwd":
                       break;
               }*/
            }


            submitForm=(ev)=>{
                ev.preventDefault();
             
                
                alert("form is geeting submitted...");
                if(this.state.flag==true)
                {
                    console.log(this.state);
                }
                else
                {
                    console.log("Information can not be shown here ");
                }
                
            }

           




            render(){

                return(
                    <div className="container">

                        <h3>Customer Registration Form</h3>

                        <form className='form'>
                            
                            First Name : <input type="text" name="fname" placeholder='First Name ' value={this.state.fname}
                            onChange={this.handleInput} />
                            <br/>

                            Last Name : <input type="text" name="mailid" placeholder='Last Name ' value={this.state.lname}
                            onChange={this.handleInput} />
                            <br/> 

                            UserID : <input type="text" name="mailid" placeholder='UserID ' value={this.state.userid}
                            onChange={this.handleInput} />
                            <br/>

                            Email : <input type="email" name="mailid" placeholder='Enter your email ' value={this.state.mailid}
                            onChange={this.handleInput} />
                            <br/>

                            Password: <input type="password" name="pwd" placeholder='Enter your password ' value={this.state.pwd}
                            onChange={this.handleInput} />
                            <br/>


                            Area: <input type="text" name="city" placeholder='Area' value={this.state.area}
                            onChange={this.handleInput} />
                            <br/>

                            City: <input type="text" name="city" placeholder='City ' value={this.state.city}
                            onChange={this.handleInput} />
                            <br/>


                            Pincode: <input type="text" name="city" placeholder='Pincode ' value={this.state.pincode}
                            onChange={this.handleInput} />
                            <br/>

                            Gender:<input type="radio" name="gender" value="male" onChange={this.handleInput}/>Male
                            <input type="radio" name="gender" value="Female" onChange={this.handleInput}/>Female
                            <br/>

                            <input type="checkbox" name="flag"  value={this.state.flag}  onChange={this.handleInput}/> I agree
                            <br/>
                            <button onClick={this.submitForm}   >Submit</button>
                        </form>

                       
                        {this.state.mailid}<br/>
                        {this.state.pwd}<br/>
                        {this.state.gender}<br/>
                        {this.state.flag.toString()}
                    </div>
                )
            }
}


export default CustRegister;