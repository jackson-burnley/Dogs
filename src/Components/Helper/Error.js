import React from "react";

const Error = ({ msg }) => {
  if (!msg) return null;

  return <p style={{ color: "#f31", margin: "1rem 0" }}>{msg}</p>;
};

export default Error;
