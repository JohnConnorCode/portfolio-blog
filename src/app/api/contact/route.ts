import { NextRequest, NextResponse } from 'next/server'

// Rate limiting map
interface RateLimit {
  count: number
  resetTime: number
}
const rateLimitMap = new Map<string, RateLimit>()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, projectType, budget, message } = body
    
    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }
    
    // Simple email validation
    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Log the submission (in production, save to database)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString()
    })
    
    // Success response
    return NextResponse.json(
      { 
        message: 'Thank you for your message! I will get back to you within 24 hours.',
        success: true
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}