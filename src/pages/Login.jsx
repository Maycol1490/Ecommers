import React, { useState } from 'react';
import '../styles/login.css'; // Importa el CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) throw new Error('Usuario o contraseña incorrectos');
      const data = await res.json();

      localStorage.setItem('token', data.token);

      const usersRes = await fetch('https://fakestoreapi.com/users');
      const usersData = await usersRes.json();
      const user = usersData.find(u => u.username === username);

      if (user) {
        localStorage.setItem('userId', user.id);
        window.location.href = '/profile';
      } else {
        throw new Error('Usuario no encontrado');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='login-page'>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>{error}</p>}
    </div>
    </div>
  );
};

export default Login;