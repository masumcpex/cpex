import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function PublicOnlyRoute({ children }) {
  const { session, loading } = useAuth()

  if (loading) {
    return <div className="auth-loading">Loading...</div>
  }

  if (session) {
    return <Navigate to="/" replace />
  }

  return children
}
