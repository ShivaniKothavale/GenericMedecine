import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';


export default class Login extends React.Component{

            constructor(props)
            {
                super(props);
                this.state={
                    uid:"",
                    pwd:"",
                    errors:{
                        uiderror:"",
                        pwderror:""
                    },
                    uidvalid:false,
                    pwdvalid:false,
                    formvalid:false
                }

            }

            handleInput=(ev)=>{
                const emailregexp=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const nm=ev.target.name;
                const val=ev.target.value;
                const pwdreg=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
               
                let errors=this.state.errors;
                let uidflag=this.state.uidvalid;
                let pwdflag=this.state.pwdvalid;

                switch(nm)
                {
                    case 'uid':

                    if(!emailregexp.test(val))
                    {
                        errors.uiderror="Invalid";
                        uidflag=false;
                    }
                    else
                    {
                        errors.uiderror=" ";
                        uidflag=true;
                    }
                        break;

                    case 'pwd':
                        if(!pwdreg.test(val))
                        {
                            errors.pwderror=" Password length between 6 and 16 "
                            pwdflag=false;

                        }
                        else{
                            errors.pwderror="";
                            pwdflag=true;
                        }
                        break;

                }

                this.setState({errors,[nm]:val,uidvalid:uidflag,pwdvalid:pwdflag},()=>{this.setState({formvalid: this.state.uidvalid && this.state.pwdvalid})});

              
            }


            submitForm=()=>{
                alert("Form get Submitted")
            }


    render()
    {
        return(<div className='container'>
               
                    <h1>Welcome to Generic medicine Portal</h1>
                <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label></label>
                    <input type="text" name="uid" value={this.state.uid} onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                <label></label>
                    <input type="password" name="pwd"  value={this.state.pwd} onChange={this.handleInput} className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <input type="submit" value="Login" disabled={!this.state.formvalid} onClick={this.submitForm} className="btn btn-primary btn-block"/>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                    <br/>
                   Don't have Account? <Link to="/register ">Register Here</Link>
                </p>
            </form>
           



        </div>)
    }
}