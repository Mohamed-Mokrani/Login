import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>S'identifier</h1>

        <div className="login-content">
          <div>
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Nom d'utilisateur" />
          </div>
          <div>
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Mot de passe" />
          </div>
          <button>Connexion</button>
          <p>Mot de passe oublié ?</p>
        </div>
        <div className="login-footer">
          <p>vous n'avez pas de compte ?</p>
          <p>Créer un compte</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
