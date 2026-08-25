import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const handleLogin = (credentials) => {
    // Handle login logic here
    console.log('Login credentials:', credentials);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
