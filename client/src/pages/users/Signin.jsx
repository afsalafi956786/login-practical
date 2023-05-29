import React from 'react'
import "./signin.css";
import { Link } from 'react-router-dom';
function Signin() {
  return (
   <>
   <div className="outer_div">
        <div className="signup">
          <h2>Log in</h2>
        </div>

        <form >
          <div className="labels">
           {/* <p style={{color:'red'}}>{error}</p>  */}
       

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
           Don't have an account!! <Link to={'/signup'}  className="here">here</Link>
          </p>

          <div className="button_div">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
   
   </>
  )
}

export default Signin