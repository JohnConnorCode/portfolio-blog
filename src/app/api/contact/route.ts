import { NextRequest, NextResponse } from 'next/server'
import { sendEmailNotification } from '@/lib/notifications'

// Rate limiting configuration
const RATE_LIMIT_MAX = 5 // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

interface RateLimit {
  count: number
  resetTime: number
}
const rateLimitMap = new Map<string, RateLimit>()

// Clean up old entries periodically
function cleanupRateLimits() {
  const now = Date.now()
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}

// Check rate limit for an IP
function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  cleanupRateLimits()

  const now = Date.now()
  const existing = rateLimitMap.get(ip)

  if (!existing || now > existing.resetTime) {
    // First request or window expired
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 }
  }

  existing.count++
  return { allowed: true, remaining: RATE_LIMIT_MAX - existing.count }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown'

    const { allowed } = checkRateLimit(ip)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'Retry-After': '3600'
          }
        }
      )
    }

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
    
    // Send email notification
    await sendEmailNotification({
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
