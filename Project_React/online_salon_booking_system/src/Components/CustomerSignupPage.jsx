import React, { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; 
import CustomerHomePage from './CustomerHomePage';

function CustomerSignupPage() {
  const init = {
    first_name:{value:"",touched:false,valid:false,error:""},
    last_name:{value:"",touched:false,valid:false,error:""},
    email:{value:"",touched:false,valid:false,error:""},
    password:{value:"",touched:false,valid:false,error:""},
    cpassword:{value:"",touched:false,valid:false,error:""},
    contact_no:{value:"",touched:false,valid:false,error:""},
    gender:{value:"",touched:false,valid:false,error:""},
    address:{value:"",touched:false,valid:true,error:""},

    formvalid:false
    
}



const validateData = (name,value) => {
    let valid = false;
    let error = "";
    switch(name) {
        case 'first_name': var pattern = /^[A-Z][a-z]{2,15}$/
                          if(pattern.test(value))
                          {
                             valid = true;
                             error = "";
                          }
                          else
                          {
                             valid = false;
                             error = "First letter should be Capital"
                          }
                          break;
        case 'last_name':  var pattern = /^[A-Z][a-z]{2,15}$/
                          if(pattern.test(value))
                          {
                            valid = true;
                            error = "";
                           }
                           else
                           {
                            valid = false;
                            error = "First letter should be capital"
                           }
                          break;
        case 'email':     var pattern = /^[A-Za-z0-9_.-]{3,15}@gmail.com$/
                          if(pattern.test(value))
                          {
                            valid = true;
                            error = "";
                          }
                          else
                          {
                            valid = false;
                            error = "Email invalid"
                          }
                          break;
        case 'password':  var pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/
                            if(pattern.test(value))
                            {
                            valid = true;
                            error = "";
                            }
                            else
                            {
                            valid = false;
                            error = "Password invalid"
                            }
                          break;
        case 'contact_no':
                         var pattern = /^[0-9]{10}$/
                          if(pattern.test(value) )
                          {
                            valid = true;
                            error = "";
                          } 
                          else
                          {
                            valid = false;
                            error = "contact_no do not match"
                          }     
                          break;
                        
    
        case 'cpassword':
                        if(info.password.value === value)
                         {
                            valid = true;
                             error = "";
                         } 
                        else
                         {
                            valid = false;
                            error = "Passwords do not match"
                         }     
                            break; 

          case 'address':
            valid=true;
            break;
        }                  
      
    
    return {valid, error};
}

const reducer=(state,action)=> {
    switch(action.type)
    {
        case 'update':
            const {name, value, touched, valid,error,formvalid} = action.data
            console.log(formvalid)
            return {...state, [name]: {value, touched, valid, error}, formvalid }
            return {...state,[action.fld]:action.val}
        case 'reset':
            return init;
    }
    
}

const handleChange = (name,value) => {
    const {valid,error} = validateData(name,value)
    let formvalid = true;
    /*if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
        formvalid = true;*/
    for(const key in info)
    {
        console.log(key+" : "+info[key].valid )
        if(info[key].valid === false)
        {
            formvalid = false;
            break;
        }
    }  
    console.log(formvalid)  
    dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
}

const onFocusout = (name,value) => {
    const {valid,error} = validateData(name,value)
    let formvalid = true;
   // if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
        formvalid = true;
    for(const key in info)
    {
        console.log(key+" : "+info[key].valid )
        if(info[key].valid === false)
        {
            formvalid = false;
            break;
        }
    }  
    dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
}

const [info,dispatch]=useReducer(reducer,init);
const [msg,setMsg]=useState("");
const navigate= useNavigate();

    const sendData=(e) =>{
        e.preventDefault();

        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
              first_name:info.first_name.value,
              last_name:info.last_name.value,
              email:info.email.value,
              contact_no:info.contact_no.value,
              gender:info.gender.value,
              address:info.address.value,
              cpassword:info.cpassword.value,
              password:info.password.value
            })
                                
        }
        fetch("http://localhost:8080/registerCustomer",reqOptions)
        .then(resp=>resp.text())
        .then(text=>text.length ? JSON.parse(text):{})
        .then(obj => {
          if(Object.keys(obj)===0)
          {
            setMsg("Wrong UID/PWD");
            alert("fail");
          }
          else{
            if(obj.status === false)
            {
              alert("Not Login");

            }
            else
            {
              alert("Success");
            }
          }
        });                                            
    }


  return (
    
    <div className="signup2-container">
      <div className="signup2-form">
        <h2>Create a Customer Account</h2>
        <form action="">
        <label for="first_name" class="form-label">First Name:</label>
                <input type="text"  class="form-control" id="first_name" placeholder="Enter first name..."  name="first_name" value={info.first_name.value}
            
                onChange={(e)=>handleChange("first_name",e.target.value)}/>
                <div className="error-msg"> {info.first_name.error}</div> 

                <label for="last_name" class="form-label">Last Name:</label>
                <input type="text" class="form-control" id="last_name" placeholder="Enter last name..."  name="last_name" value={info.last_name.value}
               
                onChange={(e)=>handleChange("last_name",e.target.value)}/>
                <div className="error-msg"> {info.last_name.error}</div> 

              <div>
                <label  for="gender"> Gender : </label><br/>
                <input  type="radio" style={{marginInline:'15px', width:'fit-content'}} name="gender" id="gender" value="Male"
                   onChange={(e)=>dispatch({type: 'update', data: {name:"gender",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}/> Male
                
                <input  type="radio" style={{marginInline:'15px', width:'fit-content'}} name="gender" id="gender" value="Female"
                    onChange={(e)=>dispatch({type: 'update', data: {name:"gender",value:e.target.value,touched: true, valid:true, error:"",formvalid:true} })}/> Female
              </div>
        <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email..."  name="email" value={info.email.value}
                 
                 onChange={(e)=>handleChange("email",e.target.value)}/>
                 <div className="error-msg"> {info.email.error}</div> 
                 
        <label for="contact_no" class="form-label" >Contact No.:</label>
                <input type="text" class="form-control" id="contact_no" placeholder="Enter contact no..."  name="contact_no" value={info.contact_no.value}
                
                onChange={(e)=>handleChange("contact_no",e.target.value)}/>
                <div className="error-msg"> {info.contact_no.error}</div>
        {/* <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <label for="Address" class="form-label">Address:</label>
                <input type="text" class="form-control" id="address" placeholder="Enter Address"  name="address" value={info.address.value}
                  onChange={(e)=>handleChange("address",e.target.value)}/>
         <label for="password" class="form-label">Password.:</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password"  name="password" value={info.password.value}
                 
                 onChange={(e)=>handleChange("password",e.target.value)}/>
                 <div className="error-msg"> {info.password.error}</div>

      <label for="cpassword" class="form-label">Confirm Password.:</label>
                <input type="password"  class="form-control" id="cpassword" placeholder="Enter Confirm password"   name="cpassword" 
                       
                       
                        onChange={(e)=> handleChange("cpassword", e.target.value)}
                        onBlur={(e)=> onFocusout("cpassword", e.target.value)} />

                        <div className="error-msg"> {info.cpassword.error}</div> 

         <button type="submit" class="btn btn-primary"  onClick={(e)=>{sendData(e)}}>Submit</button>
            <button type="reset" class="btn btn-primary" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>

            {/* disabled={info.formvalid?false:true} onClick={(e)=>{sendData(e)}}   */}
        <p>Already have an account? <a href="./login">Login</a></p>
        </form>
      </div>
        {/* {<p>{JSON.stringify(info)}</p> }   */}
    </div>
  );
}

export default CustomerSignupPage;
