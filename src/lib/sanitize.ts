/**
 * 🧹 INPUT SANITIZATION - Prevents XSS and injection attacks
 * 
 * How it works:
 * 1. Strip HTML tags from text inputs (prevents XSS)
 * 2. Limit string lengths (prevents database abuse)
 * 3. Normalize whitespace
 * 
 * Example: "<script>alert('hack')</script>" becomes "alert('hack')"
 */

/**
 * Remove HTML tags and dangerous characters from a string
 */
export function sanitizeText(input: string): string {
  if (!input || typeof input !== 'string') return ''
  
  return input
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove script content
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    // Remove null bytes
    .replace(/\0/g, '')
    // Normalize whitespace (multiple spaces → single space)
    .replace(/\s+/g, ' ')
    // Trim
    .trim()
}

/**
 * Sanitize and limit the length of a string
 */
export function sanitizeString(input: unknown, maxLength: number = 500): string {
  if (!input || typeof input !== 'string') return ''
  
  const sanitized = sanitizeText(input)
  return sanitized.slice(0, maxLength)
}

/**
 * Validate and sanitize an email address
 */
export function sanitizeEmail(input: unknown): string {
  if (!input || typeof input !== 'string') return ''
  
  // Basic cleanup
  const cleaned = input.trim().toLowerCase().slice(0, 254)
  
  // Validate format
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  if (!emailRegex.test(cleaned)) return ''
  
  return cleaned
}

/**
 * Sanitize a phone number (only allow digits, spaces, dashes, parentheses, plus)
 */
export function sanitizePhone(input: unknown): string {
  if (!input || typeof input !== 'string') return ''
  
  return input
    .replace(/[^0-9+\-() ]/g, '')
    .trim()
    .slice(0, 20)
}

/**
 * Sanitize a lead form submission
 * Returns the cleaned data or null if invalid
 */
export function sanitizeLeadInput(data: {
  name: unknown
  email: unknown
  phone?: unknown
  company?: unknown
  role?: unknown
  service?: unknown
  message?: unknown
  source?: unknown
}): {
  name: string
  email: string
  phone: string | null
  company: string | null
  role: string | null
  service: string | null
  message: string | null
  source: string
} | null {
  const name = sanitizeString(data.name, 100)
  const email = sanitizeEmail(data.email)
  
  // Name and email are required
  if (!name || !email) return null
  
  // Normalize and validate role
  // Accept both "Realtor" and "realtor", "Loan Officer" and "loan-officer"
  const roleMap: Record<string, string> = {
    'realtor': 'realtor',
    'loan-officer': 'loan-officer',
    'loan officer': 'loan-officer',
    'other': 'other',
  }
  const rawRole = sanitizeString(data.role, 50).toLowerCase()
  const role = rawRole ? (roleMap[rawRole] || rawRole) : ''
  
  return {
    name,
    email,
    phone: sanitizePhone(data.phone) || null,
    company: sanitizeString(data.company, 100) || null,
    role: role || null,
    service: sanitizeString(data.service, 100) || null,
    message: sanitizeString(data.message, 2000) || null,
    source: sanitizeString(data.source, 50) || 'website',
  }
}
