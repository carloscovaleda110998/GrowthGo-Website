/**
 * ⏱️ RATE LIMITING - Prevents spam and brute force attacks
 * 
 * How it works:
 * 1. We track how many requests each IP address makes
 * 2. If they exceed the limit, we block them for a cooldown period
 * 3. This prevents bots from flooding your database with fake leads
 * 
 * Example: 3 form submissions per minute max
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

// In-memory rate limit store
const rateLimits = new Map<string, RateLimitEntry>()

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimits.entries()) {
    if (entry.resetAt < now) {
      rateLimits.delete(key)
    }
  }
}, 10 * 60 * 1000)

/**
 * Check if a request should be rate limited
 * 
 * @param key - Usually the IP address or a unique identifier
 * @param limit - Max number of requests allowed in the window
 * @param windowMs - Time window in milliseconds
 * @returns { allowed: boolean, remaining: number, resetAt: number }
 */
export function checkRateLimit(
  key: string,
  limit: number = 3,
  windowMs: number = 60 * 1000 // 1 minute default
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const entry = rateLimits.get(key)

  // No entry or expired window → start fresh
  if (!entry || entry.resetAt < now) {
    rateLimits.set(key, {
      count: 1,
      resetAt: now + windowMs,
    })
    return { allowed: true, remaining: limit - 1, resetAt: now + windowMs }
  }

  // Within window and under limit
  if (entry.count < limit) {
    entry.count++
    return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt }
  }

  // Over limit
  return { allowed: false, remaining: 0, resetAt: entry.resetAt }
}

/**
 * Rate limit specifically for the contact form
 * 3 submissions per minute per IP
 */
export function checkContactRateLimit(ip: string) {
  return checkRateLimit(`contact:${ip}`, 3, 60 * 1000) // 3 per minute
}

/**
 * Rate limit for login attempts
 * 5 attempts per minute per IP (prevents brute force)
 */
export function checkLoginRateLimit(ip: string) {
  return checkRateLimit(`login:${ip}`, 5, 60 * 1000) // 5 per minute
}
