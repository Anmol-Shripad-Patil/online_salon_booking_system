import React, { useState,useReducer } from 'react';
import './LoginPage.css'; // Import your custom styling here

function LoginPage() {
  
  const init={
    login_id:"",
    password:""
  }

  const reducer=(state,action)=>{
    switch(action.type)
    {
      case 'update':
        return {...state,[action.fld]:action.val}

      case 'reset' :
        return init;

    }
  }

  const[info,dispatch]=useReducer(reducer,init);
  const[msg,setMsg]=useState("");
  // const handleLogin = () => {
  //   // Perform validation and authentication logic
  //   console.log("Logging in with username:", username);
  // };

  const sendData=(e)=>{
    e.preventDefault();
    const reqOptions = {
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(info)
    }
    fetch("http://localhost:8080/checklogin",reqOptions)
    .then(resp=>resp.text())
    .then(text=>text.length ? JSON.parse(text):{})
    .then(obj => {
      if(Object.keys(obj).length===0)
      {
        setMsg("Wrong UID/PWD");
        alert("fail");
      }
      else{
        if(obj.status === false)
        {
          alert("NOt Login.");
        }
        else{
            alert("success");
        }
      }
    });
  }
// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Perform validation and authentication logic
//     console.log("Logging in with username:", username);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin}>Log In</button>
//         <p>Don't have an account? <a href="./centereds"> Sign Up</a></p>
//         <p><a href="#"> Forgot password?</a></p>
//       </div>
//     </div>
//   );
// }
return (
  <div className="login-container">
    <div className="login-form">
      <h2>Login</h2>
      <form>
      {/* <label htmlfor="login_id" className="form-label">Enter Username :</label> */}
      <input type="text" className="form-control" id="login_id" name="login_id" placeholder='Enter UserID' value={info.login_id} onChange={(e)=>{dispatch({type:'update',fld:'login_id',val:e.target.value})}}/>
      {/* <div id="emailHelp" className="form-text">We'll never share email.</div> */}

      {/* <label htmlfor="password" classname="form-label">Enter Password :</label> */}
      <input type="password" className="form-control" id="password" name="password" placeholder='Enter Password' value={info.password} onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}/>
      {/* <div id="emailHelp" className="form-text">.....</div> */}
   
      <button type="submit" onClick={(e)=>{sendData(e)}}>Log In</button>
      <br />
      <button type="reset" onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
      
      </form>
      <p>Don't have an account? <a href="./centereds"> Sign Up</a></p>
      <p><a href="forgotpassword"> Forgot password?</a></p>
    </div>
    {/* {<p>{JSON.stringify(info)}</p>} */}
  </div>
);
}

export default LoginPage;
