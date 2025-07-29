import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  /* Reset and Base Styles */
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.regular};
    line-height: 1.6;
    color: ${theme.colors.textLight};
    background: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.header};
    font-weight: ${theme.fontWeights.semibold};
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: ${theme.fontSizes['5xl']};
    font-weight: ${theme.fontWeights.bold};
  }

  h2 {
    font-size: ${theme.fontSizes['4xl']};
  }

  h3 {
    font-size: ${theme.fontSizes['3xl']};
  }

  h4 {
    font-size: ${theme.fontSizes['2xl']};
  }

  h5 {
    font-size: ${theme.fontSizes.xl};
  }

  h6 {
    font-size: ${theme.fontSizes.lg};
  }

  p {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.textLight};
  }

  /* Links */
  a {
    color: ${theme.colors.cyanGlow};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      color: ${theme.colors.primaryBlue};
      text-shadow: 0 0 8px rgba(0, 179, 241, 0.5);
    }
  }

  /* Buttons */
  button {
    font-family: ${theme.fonts.header};
    font-weight: ${theme.fontWeights.medium};
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: ${theme.borderRadius.lg};
    
    &:focus {
      outline: 2px solid ${theme.colors.cyanGlow};
      outline-offset: 2px;
    }
  }

  /* Form Elements */
  input, textarea, select {
    font-family: ${theme.fonts.body};
    background: ${theme.colors.backgroundSecondary};
    border: 1px solid rgba(0, 179, 241, 0.3);
    border-radius: ${theme.borderRadius.md};
    color: ${theme.colors.textLight};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    transition: all 0.2s ease-in-out;
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.cyanGlow};
      box-shadow: 0 0 8px rgba(0, 245, 212, 0.3);
    }
    
    &::placeholder {
      color: rgba(242, 242, 242, 0.6);
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primaryBlue};
    border-radius: ${theme.borderRadius.full};
    
    &:hover {
      background: ${theme.colors.cyanGlow};
    }
  }

  /* Selection */
  ::selection {
    background: ${theme.colors.primaryBlue};
    color: ${theme.colors.textLight};
  }

  /* Focus Styles */
  *:focus-visible {
    outline: 2px solid ${theme.colors.cyanGlow};
    outline-offset: 2px;
  }

  /* Utility Classes */
  .text-gradient {
    background: ${theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glow {
    box-shadow: ${theme.shadows.glow};
  }

  .glow-cyan {
    box-shadow: ${theme.shadows.glowCyan};
  }

  .glow-orange {
    box-shadow: ${theme.shadows.glowOrange};
  }

  /* Container */
  .container {
    max-width: ${theme.components.container.maxWidth};
    margin: 0 auto;
    padding: ${theme.components.container.padding};
  }

  /* Responsive Typography */
  @media (max-width: ${theme.breakpoints.md}) {
    h1 {
      font-size: ${theme.fontSizes['4xl']};
    }
    
    h2 {
      font-size: ${theme.fontSizes['3xl']};
    }
    
    h3 {
      font-size: ${theme.fontSizes['2xl']};
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: ${theme.fontSizes['3xl']};
    }
    
    h2 {
      font-size: ${theme.fontSizes['2xl']};
    }
    
    h3 {
      font-size: ${theme.fontSizes.xl};
    }
  }
`;

export default GlobalStyles; 