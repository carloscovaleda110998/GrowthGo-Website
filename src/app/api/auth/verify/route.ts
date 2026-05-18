/**
 * 🔐 VERIFY ENDPOINT - GET /api/auth/verify
 * 
 * Checks if the current session is still valid.
 * Used by the frontend to know if the admin is logged in.
 */

import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'

export async function GET() {
  try {
    const authenticated = await isAuthenticated()

    return NextResponse.json({
      authenticated,
    })
  } catch (error) {
    console.error('Verify error:', error)
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    )
  }
}
