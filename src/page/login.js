import React from "react";
import {Link} from 'react-router-dom';
import LoginForm from "../components/login";

function Login(){
    return(
        <>
        <div className="fondoimg_login">
        <div className="container-fluid">
          <div className="row main-content bg-success text-center">
            <div className="col-md-4 text-center company__info">
              <span className="company__logo">
                <h2>
                  <span className="fa fa-android" />
                </h2>
              </span>
              <img className="logo mr-3" src="https://cdn-icons-png.flaticon.com/512/2045/2045891.png" alt="Logo" width="200"/>
            </div>
            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
              <div className="container-fluid">
                <div className="row">
                  <h2 style={{marginTop:20, fontWeight:'bold'}}>Inicio de sesión  </h2>
                </div>
                <div className="row">
                  <form control="" className="form-group">
                    <div className="row">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form__input"
                        placeholder="Username"
                      />
                    </div>
                    <div className="row">
                      {/* <span class="fa fa-lock"></span> */}
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form__input"
                        placeholder="Password"
                      />
                    </div>
                    <div className="row">
                      <Link to={'/'}>
                      <input style={{marginLeft:90}} type="submit" defaultValue="Submit" className="btn_login" />
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="row">
                  <p>
                    No tienes cuenta? <Link to={'/registro'} style={{color:'#008080'}}>Registrate aquí</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
       
    )
}

export default Login