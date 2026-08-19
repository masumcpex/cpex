import { useAuth } from '../context/AuthContext.jsx'

export default function Home() {
  const { user } = useAuth()

  return (
    <section>
      <p>Welcome, {user?.email}.</p>
    </section>
  )
}
