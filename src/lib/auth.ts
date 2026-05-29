/**
 * 🔐 AUTH SYSTEM - Server-side session management
 * 
 * How it works:
 * 1. User sends password to /api/auth/login
 * 2. Server checks password against environment variable (NOT visible in frontend)
 * 3. Server creates a random session token and stores it in memory
 * 4. Token is sent back as an HTTP-only cookie (JavaScript can't read it)
 * 5. On every protected API call, server checks if the cookie token is valid
 * 6. Sessions expire after 24 hours for security
 */

import { cookies } from 'next/headers'

// In-memory session store (resets on server restart, which is fine)
const sessions = new Map<string, { createdAt: number; expiresAt: number }>()

// Session lasts 24 hours
const SESSION_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

// Clean up expired sessions every hour
setInterval(() => {
  const now = Date.now()
  for (const [token, session] of sessions.entries()) {
    if (session.expiresAt < now) {
      sessions.delete(token)
    }
  }
}, 60 * 60 * 1000)

/**
 * Create a new session for an authenticated admin
 * Returns the session token
 */
export function createSession(): string {
  const token = crypto.randomUUID() + '-' + crypto.randomUUID()
  const now = Date.now()
  
  sessions.set(token, {
    createdAt: now,
    expiresAt: now + SESSION_DURATION,
  })
  
  return token
}

/**
 * Verify if a session token is valid
 */
export function verifySession(token: string): boolean {
  if (!token) return false
  
  const session = sessions.get(token)
  if (!session) return false
  
  // Check if expired
  if (session.expiresAt < Date.now()) {
    sessions.delete(token)
    return false
  }
  
  return true
}

/**
 * Delete a session (logout)
 */
export function destroySession(token: string): void {
  sessions.delete(token)
}

/**
 * Get the session token from the request cookies
 */
export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies()
  return cookieStore.get('admin-session')?.value || null
}

/**
 * Check if the current request is from an authenticated admin
 */
export async function isAuthenticated(): Promise<boolean> {
  const token = await getSessionToken()
  if (!token) return false
  return verifySession(token)
}

/**
 * Set the session cookie in the response
 * HTTP-only: JavaScript can't access it (prevents XSS attacks)
 * Secure: Only sent over HTTPS in production
 * SameSite: Prevents CSRF attacks
 */
export function setSessionCookie(token: string): Record<string, string> {
  return {
    'Set-Cookie': `admin-session=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=${SESSION_DURATION / 1000}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
  }
}

/**
 * Clear the session cookie
 */
export function clearSessionCookie(): Record<string, string> {
  return {
    'Set-Cookie': `admin-session=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0`,
  }
}
