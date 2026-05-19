# Task 5: Problem & Solution Section Components

## Status: ✅ Completed

## Files Created
- `/home/z/my-project/src/components/sections/ProblemSection.tsx` — Problem identification section with 6 card grid, red accents, stagger animations
- `/home/z/my-project/src/components/sections/SolutionSection.tsx` — Solution section with 3 pillar cards, gradient icons, CTA link

## Files Updated
- `/home/z/my-project/src/app/page.tsx` — Added imports and rendered `<ProblemSection />` and `<SolutionSection />` between hero and placeholder sections

## Design Details

### ProblemSection
- **ID**: `problems`
- **Background**: White
- **Layout**: Centered header + 3x2 grid (3 cols on lg, 2 on md, 1 on mobile)
- **Cards**: White bg, border-slate-200, rounded-xl, p-6
- **Icons**: Red-tinted (bg-red-50, text-red-500) in 44px rounded-lg containers
- **Hover**: Slight lift (y: -4), border turns red-200, shadow-md
- **Animations**: Framer-motion stagger (0.1s delay between cards), cards slide up from y:40
- **Content**: "THE CHALLENGE" overline, headline, subtitle, 6 problem cards with icons (UserX, MegaphoneOff, BriefcaseOverflow, Clock, DollarSign, Handshake)

### SolutionSection
- **ID**: `solution`
- **Background**: Gradient from #F0F7FF to white
- **Layout**: Centered header + 3-column pillar grid (stacked on mobile)
- **Pillar Cards**: White bg, rounded-2xl, p-8, shadow-sm, hover:shadow-lg, hover: y:-6
- **Icon Circles**: Gradient backgrounds (blue, cyan, green) with white icons in 56px rounded-2xl
- **Capabilities**: Green checkmarks (Check icon in emerald-50 circles)
- **CTA**: "See how GrowthGo can transform your business →" linking to #book-a-call, blue text, arrow slides right on hover
- **Animations**: Framer-motion stagger (0.15s between pillars), cards slide up from y:50
- **Content**: "THE SOLUTION" overline in green, headline, subtitle, 3 pillars with 4 capabilities each

## Lint: ✅ Passed (no errors)
