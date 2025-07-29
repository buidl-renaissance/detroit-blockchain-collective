import styled from 'styled-components';
import { theme } from './theme';

// 🧩 Styled Components Library
// Detroit Blockchain Collective Theme Components

// 📦 Container Components
export const Container = styled.div`
  max-width: ${theme.components.container.maxWidth};
  margin: 0 auto;
  padding: ${theme.components.container.padding};
`;

export const Section = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
  
  &.grid-2 {
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  }
  
  &.grid-3 {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  }
  
  &.grid-4 {
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  
  &.flex-center {
    align-items: center;
    justify-content: center;
  }
  
  &.flex-between {
    align-items: center;
    justify-content: space-between;
  }
  
  &.flex-column {
    flex-direction: column;
  }
  
  &.flex-wrap {
    flex-wrap: wrap;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    &.flex-responsive {
      flex-direction: column;
    }
  }
`;

// 🎯 Button Components
export const Button = styled.button`
  font-family: ${theme.fonts.header};
  font-weight: ${theme.fontWeights.medium};
  font-size: ${theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: 2px solid ${theme.colors.cyanGlow};
    outline-offset: 2px;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${theme.gradients.primary};
  color: ${theme.colors.textLight};
  box-shadow: ${theme.shadows.glow};
  
  &:hover {
    box-shadow: ${theme.shadows.glow}, 0 4px 12px rgba(0, 179, 241, 0.4);
  }
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${theme.colors.cyanGlow};
  border: 2px solid ${theme.colors.cyanGlow};
  
  &:hover {
    background: ${theme.colors.cyanGlow};
    color: ${theme.colors.background};
    box-shadow: ${theme.shadows.glowCyan};
  }
`;

export const AccentButton = styled(Button)`
  background: ${theme.colors.rustOrange};
  color: ${theme.colors.textLight};
  box-shadow: ${theme.shadows.glowOrange};
  
  &:hover {
    box-shadow: ${theme.shadows.glowOrange}, 0 4px 12px rgba(255, 77, 0, 0.4);
  }
`;

// 🃏 Card Components
export const Card = styled.div`
  background: ${theme.colors.backgroundSecondary};
  border: 1px solid rgba(0, 179, 241, 0.2);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: rgba(0, 179, 241, 0.4);
    box-shadow: ${theme.shadows.glow};
    transform: translateY(-4px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${theme.gradients.primary};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

export const FeatureCard = styled(Card)`
  text-align: center;
  
  h3 {
    color: ${theme.colors.cyanGlow};
    margin-bottom: ${theme.spacing.sm};
  }
  
  p {
    color: rgba(242, 242, 242, 0.8);
  }
`;

export const EventCard = styled(Card)`
  background: linear-gradient(135deg, ${theme.colors.backgroundSecondary} 0%, rgba(0, 179, 241, 0.05) 100%);
  
  .event-date {
    color: ${theme.colors.rustOrange};
    font-weight: ${theme.fontWeights.semibold};
    font-size: ${theme.fontSizes.sm};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .event-title {
    color: ${theme.colors.textLight};
    margin: ${theme.spacing.sm} 0;
  }
  
  .event-description {
    color: rgba(242, 242, 242, 0.8);
    margin-bottom: ${theme.spacing.md};
  }
`;

// 📝 Typography Components
export const GradientText = styled.span`
  background: ${theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const GlowText = styled.span`
  color: ${theme.colors.cyanGlow};
  text-shadow: 0 0 8px rgba(0, 245, 212, 0.5);
`;

export const DisplayText = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: ${theme.fontSizes['6xl']};
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.1;
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['4xl']};
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

// 🎨 Background Components
export const HeroSection = styled.section`
  background: ${theme.gradients.background};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="cube" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="none" stroke="rgba(0,179,241,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23cube)"/></svg>');
    opacity: 0.3;
    animation: float 20s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(1deg); }
  }
`;

export const GradientBackground = styled.div`
  background: ${theme.gradients.background};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(180deg, transparent 0%, ${theme.colors.background} 100%);
  }
`;

// 🔗 Navigation Components
export const NavLink = styled.a`
  color: ${theme.colors.textLight};
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease-in-out;
  position: relative;
  
  &:hover {
    color: ${theme.colors.cyanGlow};
    background: rgba(0, 245, 212, 0.1);
  }
  
  &.active {
    color: ${theme.colors.cyanGlow};
    background: rgba(0, 245, 212, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${theme.colors.cyanGlow};
    transition: all 0.2s ease-in-out;
    transform: translateX(-50%);
  }
  
  &:hover::after,
  &.active::after {
    width: 80%;
  }
`;

// 📊 Progress and Status Components
export interface ProgressBarProps {
  'data-progress'?: string;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 8px;
  background: ${theme.colors.backgroundSecondary};
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props['data-progress'] || '0%'};
    background: ${theme.gradients.primary};
    border-radius: ${theme.borderRadius.full};
    transition: width 0.3s ease-in-out;
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.primaryBlue};
  color: ${theme.colors.textLight};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.glow};
`;

// 🎭 Animation Components
export const FadeIn = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease-out forwards;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SlideIn = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s ease-out forwards;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

// 🎨 Utility Components
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, ${theme.colors.primaryBlue} 50%, transparent 100%);
  margin: ${theme.spacing['2xl']} 0;
`;

export interface SpacerProps {
  height?: string;
}

export const Spacer = styled.div<SpacerProps>`
  height: ${props => props.height || theme.spacing.lg};
`;

export const GlowBox = styled.div`
  box-shadow: ${theme.shadows.glow};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.backgroundSecondary};
`;

export default {
  Container,
  Section,
  Grid,
  Flex,
  Button,
  PrimaryButton,
  SecondaryButton,
  AccentButton,
  Card,
  FeatureCard,
  EventCard,
  GradientText,
  GlowText,
  DisplayText,
  SectionTitle,
  HeroSection,
  GradientBackground,
  NavLink,
  ProgressBar,
  Badge,
  FadeIn,
  SlideIn,
  Divider,
  Spacer,
  GlowBox,
}; 