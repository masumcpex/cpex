import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Layout() {
  const { user, signOut } = useAuth()

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Work Attendance</h1>
        {user && (
          <div className="app-header-user">
            <span>{user.email}</span>
            <button type="button" className="logout-btn" onClick={signOut}>
              Log Out
            </button>
          </div>
        )}
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
