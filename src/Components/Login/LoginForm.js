import React from "react";
import { Link } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import Input from "../Form/Input/Input";
import Button from "../Form/Button/Button";
import UseForm from "../../Hooks/UseForm";
import { UserContext } from "../../UserContext";

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
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="user" {...user} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>

      <Link to="/login/criar">Cadastre-se</Link>
    </section>
  );
};

export default LoginForm;
