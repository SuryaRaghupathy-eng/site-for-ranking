# RankCascade Design Guidelines

## Design Approach

**Selected Framework**: Custom Design System with Dark Analytics Dashboard Aesthetic
Premium SaaS theme optimized for data professionals. Dark slate backgrounds with crisp white cards create maximum contrast and readability for extended dashboard usage. Vibrant cyan accents provide energy without overwhelming the professional foundation.

## Core Design Principles

1. **Analytics Dashboard Excellence**: Dark theme reduces eye strain for data-intensive work
2. **Maximum Contrast**: White cards on dark slate ensure readability and hierarchy
3. **Professional Trust**: Sophisticated color palette appeals to SEO agencies and enterprises
4. **Conversion-Focused**: Strategic accent placement guides users toward key actions

## Color System

**Primary Palette**:
- **Dark Slate Base**: Deep charcoal (#0F172A) for main background, navigation
- **Slate Background**: Lighter charcoal (#1E293B) for section alternation
- **Vibrant Cyan**: Electric blue (#06B6D4) for CTAs, interactive elements, data highlights
- **Secondary Accent**: Coral/orange (#F97316) for secondary CTAs, badges, warnings

**Surface System**:
- **Card Surfaces**: Pure white (#FFFFFF) for maximum contrast against dark backgrounds
- **Elevated Cards**: Very light gray (#FAFAFA) for layered elements
- **Subtle Surfaces**: Dark slate with 10% cyan tint for feature backgrounds

**Text System**:
- **Primary Text on Dark**: White (#FFFFFF) or very light gray (#F8FAFC)
- **Secondary Text on Dark**: Slate gray (#CBD5E1) for supporting information
- **Text on White Cards**: Charcoal (#1F2937) for primary, slate (#64748B) for secondary
- **Borders**: Slate gray with 20% opacity (#334155 at 20%) for subtle divisions

**Functional Colors**:
- **Success**: Emerald green (#10B981)
- **Error**: Bright red (#EF4444)
- **Warning**: Amber (#F59E0B)

**Application Strategy**:
- Main backgrounds: Dark slate (#0F172A)
- Section alternation: Lighter slate (#1E293B)
- Navigation/Footer: Dark slate with subtle border
- Hero: Dark slate with cyan glow effects
- Cards: Pure white with shadow-xl
- Primary CTAs: Vibrant cyan background, white text
- Secondary CTAs: Coral background, white text
- Icons on dark: Cyan for primary features
- Icon containers: Cyan background at 10% opacity

## Typography System

**Font Stack**: Inter (Google Fonts), system fallbacks

**Hierarchy**:
- Hero Headlines: 4xl to 6xl, font-bold, tracking-tight, white
- Section Headers on Dark: 3xl to 4xl, font-bold, white
- Headers on White Cards: 2xl to 3xl, font-bold, charcoal
- Card Titles: xl, font-semibold, charcoal (on white) or white (on dark)
- Body Text on Dark: base to lg, leading-relaxed, light gray (#F8FAFC)
- Body Text on Cards: base to lg, charcoal
- Muted Text: Slate gray (#CBD5E1) on dark, slate (#64748B) on white
- Button Text: base, font-semibold, white

## Layout System

**Spacing Primitives**: Tailwind units 4, 6, 8, 12, 16, 20, 24

**Application**:
- Section Padding: py-20 standard, py-16 (mobile) to py-28 (desktop)
- Container Padding: px-4 (mobile), px-8 (tablet), px-12 (desktop)
- Grid Gaps: gap-8 standard, gap-12 for feature grids
- Card Internal: p-8 to p-12 for feature cards, p-6 for smaller components
- Component Spacing: space-y-8 for major sections, space-y-6 for stacked content

**Container Strategy**:
- Maximum widths: max-w-7xl for sections, max-w-4xl for forms, max-w-3xl for centered content
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
- Dark slate background with subtle bottom border
- Sticky positioning with backdrop-blur-lg
- Logo: h-10, white version
- Nav links: text-sm, font-medium, light gray text with cyan hover
- Mobile: Full-height drawer, dark slate background

### Buttons
- Primary: Vibrant cyan background, white text, h-14 for hero CTAs, h-12 standard
- Secondary: Coral background, white text
- On Dark Backgrounds: Backdrop-blur background (white at 10% opacity), white text
- Icons: h-5 w-5, ml-2 spacing
- Hover/Active: Built-in component states

### Cards
- Pure white background with shadow-xl for elevation
- Border: Subtle 1px light gray for definition
- Border radius: rounded-xl
- Padding: p-8 standard, p-10 to p-12 for feature showcases
- Hover: Subtle shadow-2xl enhancement

### Form Elements
- On Dark: Dark slate background (#1E293B), light border, white text
- On White Cards: White background, light gray border, charcoal text
- Height: h-14 for inputs/selects
- Labels: text-base, font-medium, mb-2, white (dark) or charcoal (light)
- Icons: Left-4 positioning, h-5 w-5, cyan color
- Error States: Bright red text, red border

### Icons
- Library: Lucide React exclusively
- Sizes: h-5 w-5 (standard), h-6 w-6 (features), h-8 w-8 (hero features)
- Feature Icons: Cyan background at 10% opacity, rounded-lg containers (h-14 w-14), cyan icon color
- Data Icons: White on dark sections, charcoal on white cards

### Data Visualization Elements
- Chart backgrounds: White cards with charcoal text
- Line colors: Cyan (primary metric), coral (secondary), emerald (success)
- Grid lines: Light gray at 20% opacity
- Labels: Slate gray

## Images

**Hero Section**:
- Large dashboard screenshot positioned right side of 2-column grid
- Shows: Modern dark-themed analytics interface with ranking graphs, competitor tables, keyword tracking data
- Style: rounded-xl, shadow-2xl, subtle glow effect (cyan at 5% opacity surrounding image)
- Alt: "RankCascade dark analytics dashboard with real-time rank tracking"
- Treatment: Slight perspective tilt (3-5 degrees)

**Section Images**:
- Dark-themed dashboard views: Analytics graphs, ranking tables, competitor comparisons
- Report previews: PDF-style documents with dark theme
- Mobile/tablet interfaces: Responsive dashboard views
- Style: rounded-xl, shadow-lg, white 1px border for definition
- Placement: Alternating left/right in benefit sections

**Testimonial Avatars**:
- Professional headshots: w-12 h-12, rounded-full, border-2 cyan border
- Real photos for credibility

**Logo**:
- White version for dark backgrounds: h-10
- Transparent PNG format

## Section Patterns

### Hero Section (Dark Slate Background)
- Dark slate background with subtle cyan glow effect
- py-24 to py-32 padding
- 2-column grid: Left (content), Right (dashboard image)
- Content: White text, space-y-8 stacking
- Headline: text-6xl, font-bold, white
- Subheadline: text-xl, light gray, leading-relaxed
- CTAs: Flex row - Primary (cyan), Secondary (coral with backdrop-blur)
- Trust signals below CTAs: Emerald checkmarks, white text

### Feature Grid (Lighter Slate Background)
- Lighter slate background (#1E293B)
- py-20 padding
- 3-column grid (lg:grid-cols-3), gap-8
- White cards with cyan icon containers (h-14 w-14)
- Section header: Centered, white text, mb-16

### Benefit Sections (Alternating Dark/Lighter Slate)
- 2-column layouts with images left/right alternating
- py-20 padding, space-y-24 vertical rhythm
- Content on dark: White headlines, light gray body
- Images: Dashboard screenshots with rounded-xl, shadow-lg

### Testimonial Grid (Dark Slate Background)
- Dark slate background
- White cards, py-20, 3-column grid (lg:grid-cols-3)
- Star ratings: h-4 w-4, cyan color
- Quote: Charcoal text on white card
- Avatar: Cyan border-2
- Author: Charcoal font-semibold, Role: slate gray

### Stats/Social Proof Bar (Lighter Slate)
- Lighter slate background, py-12
- 4-column grid for metrics
- Numbers: text-4xl, font-bold, cyan
- Labels: text-sm, light gray

### FAQ Section (Dark Slate)
- Dark slate background, py-20
- Accordion: White cards with space-y-4
- Headers: Charcoal on white, slate gray text
- Max-w-3xl container

### Tool Interface Section (White Card on Dark)
- Dark slate background section, py-20
- Large white card: max-w-4xl, shadow-2xl, rounded-xl, p-12
- Form layout: Single column, space-y-6
- Input styling: White background, light gray borders
- Submit button: Full-width (mobile), auto (desktop), cyan

### Final CTA Section (Cyan Background)
- Vibrant cyan background, white text, py-20
- Centered content, max-w-3xl
- White headline, light text for supporting copy
- Button: White background, cyan text (inverse treatment)

## Animations & Interactions

**Minimal Philosophy**: Subtle, purposeful only
- Card hover: Shadow enhancement
- Button states: Built-in component transitions
- Navigation: transition-colors
- Accordion: Built-in expand/collapse
- No scroll-triggered animations

## Accessibility

- WCAG AA contrast: White text on dark slate, charcoal on white cards
- Semantic HTML throughout
- Form labels associated with inputs
- Focus states via component library
- data-testid attributes on interactive elements

## Responsive Behavior

**Breakpoints**: Mobile-first, md (768px), lg (1024px)

**Adaptations**:
- Typography scales: text-4xl md:text-5xl lg:text-6xl
- Padding scales: py-16 md:py-20 lg:py-28
- Grids: 1 column (mobile), 2-3 columns (desktop)
- Navigation: Hamburger (mobile), horizontal (desktop)
- Buttons: w-full (mobile), w-auto (desktop)

## Complete Landing Page Structure

1. **Hero**: Dark slate, dashboard image, dual CTAs, trust signals
2. **Stats Bar**: Lighter slate, 4 metrics with cyan numbers
3. **Feature Grid**: 6 white cards on lighter slate, cyan icons
4. **Benefit Section 1**: Image left, analytics focus, dark slate
5. **Benefit Section 2**: Image right, competitor tracking, lighter slate
6. **Testimonials**: 6 white cards on dark slate, real photos
7. **Tool Demo**: Large white card with form on dark slate
8. **FAQ**: 8-10 questions, white cards on dark slate
9. **Final CTA**: Cyan background, inverse button treatment