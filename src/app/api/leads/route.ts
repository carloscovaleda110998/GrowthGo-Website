/**
 * 🔒 PROTECTED LEADS API
 * 
 * GET    → Requires admin authentication (session cookie)
 * POST   → Public (contact form) but rate limited + sanitized
 * PUT    → Requires admin authentication
 * DELETE → Requires admin authentication
 * 
 * This means:
 * - Anyone can submit a lead (3 per minute max)
 * - Only authenticated admins can VIEW, UPDATE, or DELETE leads
 * - The password is NEVER in the frontend code
 */

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { isAuthenticated } from '@/lib/auth'
import { checkContactRateLimit } from '@/lib/rate-limit'
import { sanitizeLeadInput } from '@/lib/sanitize'

// Google Sheets webhook URL (optional)
const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || ''

// Send lead data to Google Sheets (optional feature)
async function sendToGoogleSheets(data: {
  name: string
  email: string
  phone: string | null
  company: string | null
  role: string | null
  service: string | null
  message: string | null
  source: string
}) {
  if (!GOOGLE_SHEETS_WEBHOOK_URL) return

  try {
    await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.company || '',
        role: data.role || '',
        service: data.service || '',
        message: data.message || '',
        source: data.source,
      }),
    })
  } catch (error) {
    console.error('Failed to send lead to Google Sheets:', error)
  }
}

/**
 * GET /api/leads - List all leads (ADMIN ONLY)
 * Must have a valid session cookie to access
 */
export async function GET() {
  try {
    // 🔒 SECURITY CHECK: Is the user authenticated?
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in to access this resource.' },
        { status: 401 }
      )
    }

    const leads = await db.lead.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/leads - Create a new lead (PUBLIC - contact form)
 * Rate limited: 3 submissions per minute per IP
 * All inputs are sanitized
 */
export async function POST(request: NextRequest) {
  try {
    // ⏱️ RATE LIMIT: Prevent spam (3 per minute per IP)
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    const rateLimit = checkContactRateLimit(ip)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many submissions. Please wait a moment before trying again.',
          retryAfter: Math.ceil((rateLimit.resetAt - Date.now()) / 1000)
        },
        { status: 429 }
      )
    }

    const body = await request.json()

    // 🧹 SANITIZE: Clean all inputs before storing
    const sanitized = sanitizeLeadInput(body)
    if (!sanitized) {
      return NextResponse.json(
        { error: 'Invalid input. Please check your data and try again.' },
        { status: 400 }
      )
    }

    const lead = await db.lead.create({
      data: sanitized,
    })

    // Send to Google Sheets in the background (optional, non-blocking)
    sendToGoogleSheets(sanitized)

    return NextResponse.json(
      { message: 'Thank you! We\'ll be in touch soon.', lead },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

/**
 * PUT /api/leads - Update lead status (ADMIN ONLY)
 */
export async function PUT(request: NextRequest) {
  try {
    // 🔒 SECURITY CHECK
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Lead ID and status are required.' },
        { status: 400 }
      )
    }

    // Validate status value
    const validStatuses = ['new', 'contacted', 'qualified', 'converted', 'lost']
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value.' },
        { status: 400 }
      )
    }

    const lead = await db.lead.update({
      where: { id },
      data: { status },
    })

    return NextResponse.json({ message: 'Lead updated successfully.', lead })
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/leads - Delete a lead (ADMIN ONLY)
 */
export async function DELETE(request: NextRequest) {
  try {
    // 🔒 SECURITY CHECK
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Lead ID is required.' },
        { status: 400 }
      )
    }

    await db.lead.delete({ where: { id } })
    return NextResponse.json({ message: 'Lead deleted successfully.' })
  } catch (error) {
    console.error('Error deleting lead:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}
