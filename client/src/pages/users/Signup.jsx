import React from "react";
import "./signup.css";
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";

function Signup() {
  let navigate=useNavigate()
    const [error,setError]=useState('')
  async function handlSubmit(event) {
    event.preventDefault();
    console.log('ffffffff')
    const data = new FormData(event.currentTarget);
    let obj = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    if(obj.name && obj.email && obj.password){
      try{
        const response=await fetch('http://localhost:4000/signup',{
          method:'POST',
          body:JSON.stringify(obj),
          headers:{
              'content-type':'application/json',
          },
      })
   const data=await response.json();
   if(data.status==='success'){
    localStorage.setItem('usertoken',data.token)
        navigate('/')
   }else{
     alert('you need to login')
   }
      }catch(error){
        console.log(error.message);
      }
      

    }else{
        setError('All filds are required !!')
    }
  }

  return (
    <>
      <div className="outer_div">
        <div className="signup">
          <h2>Signup</h2>
        </div>

        <form onSubmit={handlSubmit}>
          <div className="labels">
           <p style={{color:'red'}}>{error}</p> 
            <label className="label">
              Name:
              <input
                className="input"
                name="name"
                placeholder="Name"
                type="text"
              />
            </label>

            <label className="label">
              Email:
              <input
                className="input"
                name="email"
                placeholder="Email"
                type="email"
              />
            </label>

            <label className="label">
              Password:
              <input
                className="input"
                name="password"
                placeholder="password"
                type="password"
              />
            </label>
          </div>
          <p className="already">
            Already have an account <Link to={'/'} className="here">here</Link>
          </p>

          <div className="button_div">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
