import React, { useReducer, useState } from 'react';
import './SignupPage.css'; // Import your custom styling here
import SalonHomePage from './SalonHomePage';

function SalonSignupPage() {

  const init = {
  salonname: { value: "", touched: false, valid: false, error: "" },
  email: { value: "", touched: false, valid: false, error: "" },
  contact_no: { value: "", touched: false, valid: false, error: "" },
  city: { value: "", touched: false, valid: false, error: "" },
  address: { value: "", touched: false, valid: false, error: "" },
  password: { value: "", touched: false, valid: false, error: "" }, 
  cpassword: { value: "", touched: false, valid: false, error: "" }, 
  formvalid: false
};


  const validateData = (name,value) => {
    let valid = false;
    let error = "";
    switch(name) {
        case 'salonname': var pattern = /^[A-Z][a-z]{2,15}$/
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
        }                  
      
    
    return {valid, error};
}
  // const handleSignup = () => {
  //   // Perform validation and create salon account
  //   console.log({
  //     salonName,
  //     salonemailId,
  //     contactNo,
  //     city,
  //     salonAddress,
  //     // servicesOffered,
  //     // username,
  //     password,
  //   });
  // };

  const reducer=(state,action)=>{
    switch(action.type)
    {
      case 'update' :
        const{name, value,touched, valid, error, formvalid}=action.data 
        console.log(formvalid)
        return {...state,[name]:{value, touched, valid, error}, formvalid}
        
      case 'reset' :
        return init;
    }
  }
  const handleChange = (name,value) => {
   
    const {valid,error} = validateData(name,value)
    let formvalid=true;

    for(const key in info)
    {
      console.log(key+" : "+info[key].valid)
      if(info[key].valid === false)
      {
        formvalid = false;
        break;
      }
    }
    dispatch({type: 'update',data:{name,value,touched: true, valid,error,formvalid}})
  }

  const onFocusout = (name,value) => {
    const {valid,error} = validateData(name,value)
    let formvalid = true;
        formvalid=true;

    for(const key in info)
    {
      console.log(key+" : "+info[key].valid)
      if(info[key].valid === false)
      {
        formvalid = false;
        break;
      }
    }
    dispatch({type:'update', data: {name,value,touched: true,valid, error, formvalid}})
  }

  const [info,dispatch]=useReducer(reducer,init);
  const[msg,setMsg]=useState("");

  const sendData=(e) => {
    e.preventDefault();

    const reqOptions={
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
                      salon_name:info.salonname.value,
                      email:info.email.value,
                      contact_no:info.contact_no.value,
                      city:info.city.value,
                      salon_address:info.address.value,
                      password:info.password.value
      })
    }
    fetch("http://localhost:8080/registerSalon",reqOptions)
    .then(resp=>resp.text())
    .then(text=>text.length ? JSON.parse(text) : {})
    .then(obj=> {
      if(Object.keys(obj)===0)
      {
        setMsg("Wrong UID/PWD")
        alert("fail");
      }
      else
      {
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
        <h2>Create a Salon Account</h2>
        <form action="">

        <label for="salonname" class="form-label">Salon Name:</label>
        <input type="text" class="form-control" id="salonname" placeholder="Enter salon name..." name="salonname" value={info.salonname.value} onChange={(e)=>handleChange("salonname",e.target.value)}/>
        <div className="error-msg">{info.salonname.error}</div>

        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email..." name="email" value={info.email.value} onChange={(e)=>handleChange("email",e.target.value)}/>
        <div classname="error-msg">{info.email.error}</div>

        <label for="contact_no" class="form-label">Contact no. :</label>
        <input type="text" class="form-control" id="contact_no" placeholder="Enter contact no..." name="contact_no" value={info.contact_no.value} onChange={(e)=>handleChange("contact_no",e.target.value)}/>
        <div className="error-msg">{info.contact_no.error}</div>

        <label for="city" class="form-label">City :</label>
        <input type="text" class="form-control" id="city" placeholder="Enter city..." name="city" value={info.city.value} onChange={(e)=>handleChange("city",e.target.value)}/>
        <div classname="error-msg">{info.city.error}</div>

       <label for="address" class="form-label">Address :</label>
       <input type="text" classname="form-control" id="address" placeholder="Enter address..." name="address" value={info.address.value} onChange={(e)=>handleChange("address",e.target.value)}/>
       <div className="error-msg">{info.address.error}</div>

        <label for="password" class="form-label">Password :</label>
        <input type="password" classname="form-control" id="password" placeholder="Enter password..."  name="password" value={info.password.value} onChange={(e)=>handleChange("password",e.target.value)}/>
        <div className="error-msg">{info.password.error}</div>

        <label for="cpassword" class="form-label">Password :</label>
        <input type="password" classname="form-control" id="cpassword" placeholder="Enter Confirm password..." name="cpassword" value={info.cpassword.value} onChange={(e)=>handleChange("cpassword",e.target.value)} onBlur={(e)=>onFocusout("cpassword",e.target.value)}/>
        <div className="error-msg">{info.cpassword.error}</div>
        
        
        {/* <textarea
          placeholder="Services Offered"
          value={servicesOffered}
          onChange={(e) => setServicesOffered(e.target.value)}
        /> 
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        */}
       
        
        <button type="submit" class="btn btn-primary" onClick={(e)=>{sendData(e)}}>Submit</button>
        <button type="reset" class="btn btn-primary" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
        
        {/* disabled={info.formvalid?false:true} */}

        <p>Already have an account? <a href="./login">Login</a></p>
        </form>
      </div>
      {/* {<p>{JSON.stringify(info)}</p>} */}
    </div>
  );
}

export default SalonSignupPage;
