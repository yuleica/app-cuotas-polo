import React from 'react';


const Login = () => {
  return (
    <div className={styles.gridContainer2}>
        <div className="div">
            <img src={logo} />
        </div>
        <div className="div">
            <form>
                <input type = "text" name="usuario" placeholder="Usuario" />
                <input type = "password" name="contraseña" placeholder="contraseña"/>
                <button type="submit">
                    Ingresar
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login;