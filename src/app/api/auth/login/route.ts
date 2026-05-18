/**
 * 🔐 LOGIN ENDPOINT - POST /api/auth/login
 * 
 * This is the ONLY place where the password is checked.
 * The password lives in the server's environment variables,
 * so it's NEVER visible in the frontend code.
 * 
 * Flow:
 * 1. User sends { password: "..." }
 * 2. Server compares against ADMIN_PASSWORD env variable
 * 3. If correct → creates session token, sets HTTP-only cookie
 * 4. If wrong → returns error (after rate limiting)
 */

import { NextRequest, NextResponse } from 'next/server'
import { createSession, setSessionCookie } from '@/lib/auth'
import { checkLoginRateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Get the client's IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit (5 login attempts per minute)
    const rateLimit = checkLoginRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many login attempts. Please try again later.',
          retryAfter: Math.ceil((rateLimit.resetAt - Date.now()) / 1000)
        },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { password } = body

    if (!password) {
      return NextResponse.json(
        { error: 'Password is required.' },
        { status: 400 }
      )
    }

    // Compare against the environment variable (NOT hardcoded in frontend!)
    const adminPassword = process.env.ADMIN_PASSWORD
    
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD not set in environment variables!')
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      )
    }

    if (password !== adminPassword) {
      // Don't tell them if the user exists or not (security best practice)
      return NextResponse.json(
        { error: 'Invalid credentials.' },
        { status: 401 }
      )
    }

    // Password is correct! Create a session
    const token = createSession()
    const cookieHeader = setSessionCookie(token)

    return NextResponse.json(
      { message: 'Login successful.', authenticated: true },
      { 
        status: 200,
        headers: cookieHeader 
      }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
