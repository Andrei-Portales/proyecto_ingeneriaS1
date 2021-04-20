import React from 'react';
import '../assets/css/login.css';

function Login() {
  return (
    <div className="login">
      <p>Login</p>
      <form>
        <input type="text" placeholder="Usuario" />
        <br/>
        <br/>
        <input type="password" placeholder="Contraseña"/><br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
