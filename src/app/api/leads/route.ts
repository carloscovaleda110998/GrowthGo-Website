import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, company, role, service, message, source } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const lead = await db.lead.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        role: role || null,
        service: service || null,
        message: message || null,
        source: source || 'website',
      },
    })

    return NextResponse.json(
      { message: 'Lead created successfully.', lead },
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

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Lead ID and status are required.' },
        { status: 400 }
      )
    }

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

export async function DELETE(request: NextRequest) {
  try {
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
