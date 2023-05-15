import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="login-page">
      <div className="login-container">
        {login ? (
          <div className="login-container">
            <h1>Se connecter</h1>
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
              <p onClick={()=>setLogin(false)}>Inscrivez-vous</p>
            </div>
          </div>
        ) : (
          <div className="login-container">
            <h1>S'inscrire</h1>
            <div className="login-content">
            <div>
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="Nom complet" />
              </div>
              <div>
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="Nom d'utilisateur" />
              </div>
              <div>
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Mot de passe" />
              </div>
              <button>S'inscrire</button>
            </div>
            <div className="login-footer">
              <p>Vous avez un compte ?</p>
              <p onClick={()=>setLogin(true)}>Connectez-vous</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
