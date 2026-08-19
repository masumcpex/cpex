import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee', display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

