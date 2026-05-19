# Task 3 - Navbar & Footer Components

## Work Completed

### Created: `/home/z/my-project/src/components/layout/Navbar.tsx`
- Fixed, sticky navbar at top with `z-50`
- Logo (`growthgo-logo.png`, 40px height) + "GrowthGo" brand name with accent blue on "Go"
- Desktop navigation links: Services, About, Realtors, Loan Officers, Blog, Contact
- Smooth scroll via `scrollIntoView({ behavior: 'smooth' })` to section anchors
- "Book a Call" CTA button with blue (#2563EB) styling and shadow
- Mobile responsive: hamburger menu using shadcn/ui Sheet component (slides from right)
- Glassmorphism effect on scroll: `backdrop-blur-xl`, `bg-white/80`, shadow, border when `scrollY > 20`
- Framer Motion fade-in animation on mount (`y: -20 → 0`, `opacity: 0 → 1`)
- Sheet includes nav links and a full-width "Book a Call" CTA at the bottom
- Uses "use client" directive

### Created: `/home/z/my-project/src/components/layout/Footer.tsx`
- Dark navy background (#0F172A) with white text
- 4-column responsive layout (stacks on mobile, 4 cols on desktop)
- **Company column**: Logo, description of GrowthGo, social media icons (Facebook, Twitter, LinkedIn, Instagram) with hover effects
- **Services column**: Marketing, Business Development, Lead Follow-Up, Operational Support, CRM & Automation
- **Industries column**: Realtors, Loan Officers, Mortgage Brokers, Real Estate Teams
- **Contact column**: Email, phone with Lucide icons, MapPin for location, "Book a Call" CTA button
- Bottom bar with copyright (dynamic year) and legal links (Privacy Policy, Terms of Service, Cookie Policy)
- Separator between main content and bottom bar
- Uses `mt-auto` for sticky footer behavior
- Hover effects: cyan (#06B6D4) on links, blue on social icons
- Uses "use client" directive

### Updated: `/home/z/my-project/src/app/page.tsx`
- Integrated Navbar and Footer components
- Added placeholder sections for all scroll targets (#services, #about, #realtors, #loan-officers, #blog, #contact, #book-a-call)
- Hero section with headline, subtitle, and dual CTAs
- Proper `flex min-h-screen flex-col` layout with `pt-16` for fixed navbar offset

### Quality
- ESLint passes with no errors
- Dev server compiles and renders successfully (200 responses)
- All color values match the specified palette
