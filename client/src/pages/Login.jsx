// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple static admin check (real login logic will come later)
    if (email === 'admin@gmail.com' && password === '123') {
      localStorage.setItem('user', JSON.stringify({ role: 'admin', email }));
      navigate('/');
    } else {
      // For now, assume any non-admin login is a normal user
      localStorage.setItem('user', JSON.stringify({ role: 'user', email }));
      navigate('/');
    }
  };
if (email === 'admin@gmail.com' && password === '123') {
  localStorage.setItem('user', JSON.stringify({ role: 'admin', email }));
  navigate('/');
} else {
  localStorage.setItem('user', JSON.stringify({ role: 'user', email }));
  navigate('/');
}
  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email}
             onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password}
             onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
