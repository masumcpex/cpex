import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h2>404 — Page Not Found</h2>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </section>
  )
}
