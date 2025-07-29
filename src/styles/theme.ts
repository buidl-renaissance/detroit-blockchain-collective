import { createGlobalStyle } from 'styled-components';

// 🎨 Detroit Blockchain Collective Theme
// Based on cube logo and brand specifications

export const theme = {
  // 🌈 Color Palette
  colors: {
    // Primary Gradient
    primaryGradient: 'linear-gradient(135deg, #00B3F1 0%, #0074E4 100%)',
    primaryBlue: '#00B3F1',
    primaryBlueDark: '#0074E4',
    
    // Dark Base
    onyxBlack: '#000000',
    
    // Accent
    cyanGlow: '#00F5D4',
    
    // Support Neutral
    slateGray: '#1E1E1E',
    
    // Text
    textLight: '#F2F2F2',
    textDark: '#000000',
    
    // Alert/Highlight
    rustOrange: '#FF4D00',
    
    // Backgrounds
    background: '#000000',
    backgroundSecondary: '#1E1E1E',
    backgroundLight: '#F2F2F2',
  },

  // 🖋 Typography
  fonts: {
    header: 'Sora, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },

  // 📏 Spacing & Layout
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  // 🧩 Component Styles
  components: {
    button: {
      borderRadius: '12px',
      fontWeight: 500,
      textTransform: 'uppercase',
      transition: 'all 0.2s ease-in-out',
      hoverGlow: '0 0 12px rgba(0, 179, 241, 0.3)',
    },
    
    card: {
      borderRadius: '12px',
      border: '1px solid rgba(0, 179, 241, 0.2)',
      hoverGlow: '0 0 12px rgba(0, 179, 241, 0.3)',
      transition: 'all 0.3s ease-in-out',
    },
    
    container: {
      maxWidth: '1200px',
      padding: '0 1rem',
    },
  },

  // 🎭 Shadows & Effects
  shadows: {
    glow: '0 0 12px rgba(0, 179, 241, 0.3)',
    glowCyan: '0 0 12px rgba(0, 245, 212, 0.3)',
    glowOrange: '0 0 12px rgba(255, 77, 0, 0.3)',
    card: '0 4px 6px rgba(0, 0, 0, 0.1)',
    elevated: '0 10px 25px rgba(0, 0, 0, 0.2)',
  },

  // 🎨 Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #00B3F1 0%, #0074E4 100%)',
    accent: 'linear-gradient(135deg, #00F5D4 0%, #00B3F1 100%)',
    background: 'linear-gradient(180deg, #000000 0%, #1E1E1E 100%)',
  },

  // 📱 Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// 🧠 Conceptual Foundation
// Modularity → composable systems & communities
// Transparency → open data, shared governance  
// Infrastructure → stable, foundational, tech-forward
// Detroit Energy → grounded, bold, future-focused

// 🎨 Theme Variations
export const themeVariations = {
  night: {
    // Default theme (already defined above)
    ...theme,
  },
  
  day: {
    ...theme,
    colors: {
      ...theme.colors,
      background: '#F2F2F2',
      backgroundSecondary: '#FFFFFF',
      textLight: '#000000',
      textDark: '#1E1E1E',
    },
  },
  
  builder: {
    ...theme,
    colors: {
      ...theme.colors,
      primaryBlue: '#666666',
      primaryBlueDark: '#444444',
      cyanGlow: '#888888',
    },
  },
};

// 📝 Voice & Tone Keywords
export const brandVoice = {
  tone: 'Bold, informative, inviting',
  keywords: [
    'Build with us',
    'Community over hype', 
    'Blocks for the people',
    'Open tools, open future',
  ],
  description: 'Detroit-rooted, hacker-minded, ground-up, not top-down',
};

// 🧱 Brand Assets Guidelines
export const brandAssets = {
  logo: {
    usage: 'Use as-is or animate rotation on hover',
    favicon: 'Use just the cube, no text',
  },
  watermarks: {
    style: 'Transparent cube outlines (layered in background)',
  },
  badges: {
    style: 'Use cube front-face as shield or badge frame',
  },
};

// 🎨 UI Style Elements
export const uiElements = {
  buttons: {
    style: 'Rounded corners (12px), gradient fill, light glow on hover, bold uppercase text',
  },
  cards: {
    style: 'Dark base with thin gradient outline, hover elevation with inner glow',
  },
  icons: {
    style: 'Thin-line icons drawn from cube geometry (30–45° angles)',
    bullets: 'Use cube corners or modular mini-cubes as bullet points',
  },
  backgrounds: {
    hero: 'Animated gradient overlay (subtle cube motion, parallax)',
    midSection: 'Dark with cube grid watermark',
    footer: 'Pure black with electric blue underglow',
  },
};

export default theme; 