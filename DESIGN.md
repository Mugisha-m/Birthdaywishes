---
name: Festive Joy
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5d3f3d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#926e6b'
  outline-variant: '#e7bdb9'
  surface-tint: '#c0001b'
  primary: '#bd001b'
  on-primary: '#ffffff'
  primary-container: '#e61d2b'
  on-primary-container: '#fffdff'
  inverse-primary: '#ffb3ad'
  secondary: '#0061a5'
  on-secondary: '#ffffff'
  secondary-container: '#0095f8'
  on-secondary-container: '#002b4e'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a900'
  on-tertiary-container: '#4c3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930012'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#9fcaff'
  on-secondary-fixed: '#001d36'
  on-secondary-fixed-variant: '#00497e'
  tertiary-fixed: '#ffe16d'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
---

## Brand & Style

This design system is built on the high-energy, exuberant spirit of celebration. It aims to evoke feelings of nostalgia, excitement, and pure happiness. The personality is unapologetically playful, loud, and welcoming, making it ideal for mobile applications centered around parties, gifting, and community events.

The visual style is a hybrid of **High-Contrast Bold** and **Tactile Modernism**. It leverages the high saturation of a primary-color-focused palette with soft, "balloon-like" roundedness. Surfaces should feel physical and buoyant, utilizing vibrant gradients and subtle inner glows to mimic the reflective quality of party decorations.

## Colors

The palette is derived from classic celebratory motifs: balloons, confetti, and cake. It uses high-chroma primary colors to maintain a high-energy environment.

- **Primary (Celebration Red):** Used for urgent actions, major highlights, and core branding.
- **Secondary (Sky Blue):** Used for supporting elements, links, and information hierarchy.
- **Tertiary (Sunny Yellow):** Used for attention-grabbing accents, rewards, and "delight" moments.
- **Quaternary (Confetti Green):** Used for success states and secondary UI accents.

The background remains predominantly white to ensure the high-saturation colors pop without causing visual fatigue. Neutral tones are used sparingly for text and subtle borders to keep the focus on the vibrant accent colors.

## Typography

The typography system is designed to be friendly and approachable. **Plus Jakarta Sans** provides a geometric yet soft look for headlines, with its open apertures and rounded terminals reflecting the balloon-like aesthetic of the brand.

**Be Vietnam Pro** is used for body copy and labels to maintain a contemporary, casual feel that is highly legible at smaller scales. Bold weights are used frequently to maintain the high-contrast personality of the design. Text colors should primarily be the dark neutral, but semantic primary colors can be applied to headlines for extra festive emphasis.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with generous white space to balance the loud color palette. On mobile, we utilize a 4-column grid with 20px side margins.

Spacing is governed by an 8px base unit. To emphasize the "joyful" and "bouncy" nature of the app, vertical padding in containers should be slightly more generous than horizontal padding, creating a sense of lift. Content should be grouped into distinct cards or modules to allow for easy scanning and a tactile "stack" of celebration elements.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. Instead of harsh, black shadows, this system uses "glow-shadows" tinted with the primary color of the element (e.g., a red button casts a soft, low-opacity red shadow).

1.  **Base Layer:** Flat white or extremely light grey.
2.  **Surface Layer:** Cards and containers use a soft, 8-12px blur shadow with 5% opacity to appear slightly raised.
3.  **Active Layer:** Interactive elements like buttons use a more pronounced shadow to invite tapping, mimicking a physical, squishy object.
4.  **Overlays:** Modals and bottom sheets utilize a semi-transparent backdrop blur (10px) to maintain the "frosted glass" festive feel without losing the context of the vibrant background.

## Shapes

The shape language is defined by extreme roundedness. Sharp corners are avoided entirely to maintain the friendly, balloon-inspired aesthetic. 

Most containers use a **rounded-lg (2rem)** or **rounded-xl (3rem)** setting. Small components like chips and input fields are typically **pill-shaped** to reinforce the tactile and playful theme. Icons should follow this logic, using rounded stroke caps and joints.

## Components

### Buttons
Primary buttons are pill-shaped, using high-saturation primary colors with white bold text. They should include a subtle inner-top highlight (1px white at 20% opacity) to create a "balloon" sheen.

### Cards
Cards are the primary container. They feature large corner radii (rounded-xl) and soft, tinted shadows. Card headers can use a solid primary color background with white headlines for a "gift box" appearance.

### Chips & Tags
Used for categories (e.g., "Birthday," "Anniversary"). These are always pill-shaped with a light tint of the primary colors and dark text to ensure legibility while remaining colorful.

### Input Fields
Inputs use a thick 2px border in a light neutral shade that turns into a vibrant primary color (Blue or Red) when focused. The corners are highly rounded (rounded-lg) to match the overall system.

### Celebratory Elements
Include custom components like "Confetti Overlays" for success states and "Balloon Progress Bars" where the progress indicator is a small circular node.