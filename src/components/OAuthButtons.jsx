import { supabase } from '../supabaseClient.js'

export default function OAuthButtons({ onError }) {
  async function handleOAuth(provider) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.origin },
    })
    if (error) onError?.(error.message)
  }

  return (
    <div className="oauth-buttons">
      <button
        type="button"
        className="oauth-btn oauth-btn-google"
        onClick={() => handleOAuth('google')}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.46H12v4.66h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.83z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.9l-3.88-3c-1.08.72-2.46 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.94H1.29v3.1A12 12 0 0 0 12 24z" />
          <path fill="#FBBC05" d="M5.29 14.31A7.2 7.2 0 0 1 4.91 12c0-.8.14-1.58.38-2.31v-3.1H1.29A12 12 0 0 0 0 12c0 1.93.46 3.76 1.29 5.41z" />
          <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.61 4.58 1.8l3.44-3.44C17.94 1.19 15.24 0 12 0A12 12 0 0 0 1.29 6.59l4 3.1C6.23 6.86 8.88 4.75 12 4.75z" />
        </svg>
        Continue with Google
      </button>
      <button
        type="button"
        className="oauth-btn oauth-btn-facebook"
        onClick={() => handleOAuth('facebook')}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        Continue with Facebook
      </button>
    </div>
  )
}
