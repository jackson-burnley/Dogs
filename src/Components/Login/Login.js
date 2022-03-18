import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginLost from "./LoginLost";
import LoginReset from "./LoginReset";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) {
    return <Navigate to="/conta" />;
  }

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<LoginCreate />} />
      <Route path="perdeu" element={<LoginLost />} />
      <Route path="resetar" element={<LoginReset />} />
    </Routes>
  );
};

export default Login;
