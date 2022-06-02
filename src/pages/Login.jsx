import React, { useState } from "react";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      Login
      <form
        onSubmit={handleOnSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="email"
          id=""
          placeholder="Enter email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter password"
          onChange={handleOnChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
