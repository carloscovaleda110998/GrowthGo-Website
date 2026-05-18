/**
 * 🔐 LOGOUT ENDPOINT - POST /api/auth/logout
 * 
 * Destroys the session and clears the cookie
 */

import { NextResponse } from 'next/server'
import { getSessionToken, destroySession, clearSessionCookie } from '@/lib/auth'

export async function POST() {
  try {
    const token = await getSessionToken()
    
    if (token) {
      destroySession(token)
    }

    const cookieHeader = clearSessionCookie()

    return NextResponse.json(
      { message: 'Logged out successfully.' },
      { 
        status: 200,
        headers: cookieHeader 
      }
    )
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
