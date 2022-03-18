import React from "react";
import { Link } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import UseForm from "../../Hooks/UseForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Form/Button/Button.module.css";

const LoginForm = () => {
  const user = UseForm(false);
  const password = UseForm(false);

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (user.validate() && password.validate()) {
      userLogin(user.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="user" {...user} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error msg={error} />
      </form>

      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link className={stylesBtn.button} to="/login/criar">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
