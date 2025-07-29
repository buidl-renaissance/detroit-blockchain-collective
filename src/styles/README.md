# 🎨 Detroit Blockchain Collective Theme System

## Overview

This theme system is built around the Detroit Blockchain Collective's cube logo and brand identity, emphasizing modularity, transparency, infrastructure, and Detroit energy.

## 🧠 Conceptual Foundation

- **Modularity** → Composable systems & communities
- **Transparency** → Open data, shared governance
- **Infrastructure** → Stable, foundational, tech-forward
- **Detroit Energy** → Grounded, bold, future-focused

## 📁 File Structure

```
src/styles/
├── theme.ts              # Core theme configuration
├── GlobalStyles.ts       # Global styles and CSS reset
├── styledComponents.ts   # Reusable styled components
└── README.md            # This documentation
```

## 🎨 Color Palette

### Primary Colors
- **Primary Gradient**: `#00B3F1 → #0074E4` (Core logo gradient)
- **Onyx Black**: `#000000` (Backgrounds, hero sections)
- **Cyan Glow**: `#00F5D4` (Links, hover states, buttons)

### Supporting Colors
- **Slate Gray**: `#1E1E1E` (Secondary backgrounds)
- **Ice Gray**: `#F2F2F2` (Body text on dark background)
- **Rust Orange**: `#FF4D00` (Alert/highlight color)

## 🖋 Typography

### Font Families
- **Header**: Sora (Futuristic, geometric, structured)
- **Body**: Inter (Clean, legible, modern sans-serif)
- **Display**: Space Grotesk (Hero callouts, event posters)

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## 🧩 Usage Examples

### Basic Theme Import

```tsx
import { theme } from '../styles/theme';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background: ${theme.colors.background};
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};
  padding: ${theme.spacing.lg};
`;
```

### Using Styled Components

```tsx
import { 
  PrimaryButton, 
  Card, 
  GradientText,
  Container 
} from '../styles/styledComponents';

const MyComponent = () => (
  <Container>
    <Card>
      <h1>
        Welcome to <GradientText>Detroit Blockchain Collective</GradientText>
      </h1>
      <PrimaryButton>Build with us</PrimaryButton>
    </Card>
  </Container>
);
```

### Theme Variations

```tsx
import { themeVariations } from '../styles/theme';

// Night mode (default)
const nightTheme = themeVariations.night;

// Day mode
const dayTheme = themeVariations.day;

// Builder mode (for dev events/hackathons)
const builderTheme = themeVariations.builder;
```

## 🎯 Component Guidelines

### Buttons
- Rounded corners (12px border-radius)
- Gradient fill with light glow on hover
- Bold uppercase text (Sora / Medium)
- Use `PrimaryButton`, `SecondaryButton`, or `AccentButton`

### Cards & Containers
- Dark base with thin gradient outline
- Hover elevation with inner glow
- Use `Card`, `FeatureCard`, or `EventCard`

### Typography
- Use `GradientText` for brand elements
- Use `GlowText` for accent text
- Use `DisplayText` for hero headlines
- Use `SectionTitle` for section headers

## 🎨 Background Patterns

### Hero Sections
- Animated gradient overlay
- Subtle cube motion with parallax
- Use `HeroSection` component

### Mid-sections
- Dark with cube grid watermark
- Use `GradientBackground` component

### Footer
- Pure black with electric blue underglow

## 📱 Responsive Design

The theme includes responsive breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🎭 Animations & Effects

### Glow Effects
- `.glow` - Primary blue glow
- `.glow-cyan` - Cyan accent glow
- `.glow-orange` - Orange alert glow

### Animation Components
- `FadeIn` - Fade in animation
- `SlideIn` - Slide in from left

## 🧱 Brand Assets

### Logo Usage
- Use as-is or animate rotation on hover
- Favicon: Use just the cube, no text

### Watermarks
- Transparent cube outlines layered in background

### Badges & POAPs
- Use cube front-face as shield or badge frame

## 📝 Voice & Tone

### Tone
- Bold, informative, inviting
- Detroit-rooted, hacker-minded
- Ground-up, not top-down

### Keywords
- "Build with us"
- "Community over hype"
- "Blocks for the people"
- "Open tools, open future"

## 🔧 Setup Instructions

1. **Import Global Styles** in `_app.tsx`:
```tsx
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
```

2. **Use Theme Provider** (optional for theme switching):
```tsx
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

## 🎨 Theme Variations

### Night Mode (Default)
- Full black base with neon blue/cyan highlights
- Default theme configuration

### Day Mode
- Ice-gray background
- Blue line icons
- Black text

### Builder Mode
- Muted colors
- Construction-style overlays
- Good for dev events or hackathons

## 🚀 Best Practices

1. **Consistency**: Always use theme values instead of hardcoded colors/sizes
2. **Accessibility**: Ensure sufficient contrast ratios
3. **Performance**: Use CSS custom properties for dynamic theming
4. **Maintainability**: Keep component styles close to their usage
5. **Scalability**: Use the provided styled components as building blocks

## 🔍 Troubleshooting

### Common Issues

1. **Fonts not loading**: Ensure Google Fonts are imported in GlobalStyles
2. **Theme not applying**: Check that GlobalStyles are imported in _app.tsx
3. **TypeScript errors**: Ensure proper typing for styled component props

### Debug Tips

- Use browser dev tools to inspect theme values
- Check the theme object in console: `console.log(theme)`
- Verify styled-components are properly configured

## 📚 Additional Resources

- [Styled Components Documentation](https://styled-components.com/docs)
- [Google Fonts](https://fonts.google.com/)
- [Detroit Blockchain Collective Brand Guidelines](link-to-brand-guidelines) 