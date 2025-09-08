# Neo-Cyberpunk Design System
## Vision: Sharp. Powerful. Intentional.

## Core Principles
1. **Minimalist Brutalism**: Bold geometric shapes with purposeful negative space
2. **Refined Cyberpunk**: Subtle neon accents, not overwhelming glows
3. **Professional Edge**: Corporate sophistication meets underground aesthetic
4. **Consistent Hierarchy**: Clear visual flow without competing elements

## Color Palette

### Primary Colors
```css
--black: #000000;
--white: #ffffff;
--gray-900: #0a0a0a;
--gray-800: #1a1a1a;
--gray-700: #2a2a2a;
--gray-600: #404040;
--gray-500: #606060;
--gray-400: #909090;
--gray-300: #b0b0b0;
```

### Accent Colors
```css
--cyan-500: #00d4ff;    /* Primary accent */
--cyan-400: #00a8cc;    /* Hover states */
--cyan-300: #0088aa;    /* Subtle accents */
--yellow-400: #ffd700;  /* Secondary accent - sparingly */
--pink-500: #ff00ff;    /* Tertiary accent - very sparingly */
```

### Functional Colors
```css
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

## Typography Scale

### Font Families
- **Headers**: Inter, -apple-system, sans-serif (font-weight: 100-900)
- **Body**: Inter, -apple-system, sans-serif (font-weight: 300-600)
- **Mono**: JetBrains Mono, monospace (for technical content)

### Size Scale
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */
```

### Font Weights
- **Thin**: 100 (for large display text)
- **Light**: 300 (for elegant headers)
- **Regular**: 400 (body text)
- **Medium**: 500 (emphasis)
- **Bold**: 700 (strong emphasis)
- **Black**: 900 (impact statements)

## Spacing System
8px base unit system:
```css
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-5: 2.5rem;   /* 40px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-10: 5rem;    /* 80px */
--space-12: 6rem;    /* 96px */
--space-16: 8rem;    /* 128px */
```

## Shadow System

### Elevation Levels
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 255, 255, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 255, 255, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 255, 255, 0.15);
--shadow-xl: 0 20px 25px -5px rgba(0, 255, 255, 0.2);
--shadow-2xl: 0 25px 50px -12px rgba(0, 255, 255, 0.25);
```

### Brutal Shadow (Signature)
```css
--shadow-brutal: 4px 4px 0 rgba(0, 255, 255, 0.3), 
                 8px 8px 0 rgba(0, 0, 0, 1);
--shadow-brutal-hover: 6px 6px 0 rgba(0, 255, 255, 0.5), 
                       12px 12px 0 rgba(0, 0, 0, 1);
```

## Border System
```css
--border-thin: 1px;
--border-base: 2px;
--border-thick: 4px;
--border-radius-none: 0;
--border-radius-sm: 0.125rem;
--border-radius-md: 0.25rem;
--border-radius-lg: 0.5rem;
```

## Animation Guidelines

### Timing Functions
```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
```

### Duration Scale
```css
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

### Animation Rules
1. **No competing animations**: Only one element animates at a time in view
2. **Stagger delays**: 50-100ms between sequential elements
3. **Hover states**: Subtle scale (1.02-1.05) or color shift
4. **Page transitions**: Smooth opacity/transform, never jarring

## Component Patterns

### Cards
```css
.card-base {
  background: var(--gray-900);
  border: 2px solid var(--gray-800);
  padding: var(--space-4);
  transition: all var(--duration-base) var(--ease-smooth);
}

.card-brutal {
  background: var(--black);
  border: 2px solid var(--white);
  box-shadow: var(--shadow-brutal);
  transition: all var(--duration-base) var(--ease-smooth);
}

.card-brutal:hover {
  border-color: var(--cyan-400);
  box-shadow: var(--shadow-brutal-hover);
  transform: translate(-2px, -2px);
}
```

### Buttons
```css
.btn-primary {
  background: linear-gradient(135deg, var(--cyan-400), var(--cyan-500));
  color: var(--black);
  font-weight: 700;
  padding: var(--space-2) var(--space-4);
  border: none;
  box-shadow: var(--shadow-lg);
  transition: all var(--duration-base) var(--ease-smooth);
}

.btn-secondary {
  background: transparent;
  color: var(--cyan-400);
  border: 2px solid var(--cyan-400);
  padding: var(--space-2) var(--space-4);
  backdrop-filter: blur(10px);
  transition: all var(--duration-base) var(--ease-smooth);
}
```

### Text Effects
```css
.text-glow {
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.5),
               0 0 10px rgba(0, 255, 255, 0.3);
}

.text-gradient {
  background: linear-gradient(135deg, var(--cyan-400), var(--cyan-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Layout Principles

### Container Widths
```css
--container-xs: 20rem;    /* 320px */
--container-sm: 24rem;    /* 384px */
--container-md: 28rem;    /* 448px */
--container-lg: 32rem;    /* 512px */
--container-xl: 36rem;    /* 576px */
--container-2xl: 42rem;   /* 672px */
--container-3xl: 48rem;   /* 768px */
--container-4xl: 56rem;   /* 896px */
--container-5xl: 64rem;   /* 1024px */
--container-6xl: 72rem;   /* 1152px */
--container-7xl: 80rem;   /* 1280px */
```

### Grid System
- 12-column grid for complex layouts
- 8px gutter by default
- Responsive breakpoints:
  - Mobile: < 640px (single column)
  - Tablet: 640px - 1024px (2-3 columns)
  - Desktop: > 1024px (full grid)

## Z-Index Scale
```css
--z-negative: -1;
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 200;
--z-overlay: 300;
--z-modal: 400;
--z-popover: 500;
--z-tooltip: 600;
--z-notification: 700;
--z-max: 9999;
```

## Accessibility Guidelines
1. **Contrast**: Minimum 4.5:1 for body text, 3:1 for large text
2. **Focus states**: Clear cyan outline for keyboard navigation
3. **Motion**: Respect prefers-reduced-motion
4. **Touch targets**: Minimum 44x44px on mobile

## Implementation Rules
1. **Never mix design paradigms**: Choose brutal OR smooth, not both
2. **Consistent spacing**: Use the scale, no arbitrary values
3. **Single source of truth**: All colors from palette only
4. **Performance first**: Limit animations to transform and opacity
5. **Mobile-first**: Design for smallest screen, enhance upward