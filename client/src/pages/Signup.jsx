// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Save to localStorage for now — no database yet
    const newUser = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/login');
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="email" placeholder="Email" value={email}
             onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password}
             onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
