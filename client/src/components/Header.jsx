// src/components/Header.jsx (or wherever your nav is)
import { Link } from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/">Home</Link>{" | "}
      {!user && <Link to="/login">Login</Link>}{" | "}
      {!user && <Link to="/signup">Signup</Link>}{" | "}
      {user && <Link to="/account">Account</Link>}{" | "}

      {/* Only show Admin Panel if role is admin */}
      {user?.role === 'admin' && (
        <Link to="/admin">Admin Panel</Link>
      )}
    </div>
  );
};

export default Header;
