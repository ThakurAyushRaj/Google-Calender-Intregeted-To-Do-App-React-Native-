/**
 * Design System Constants
 * Style: Nexus.One Gradient Fusion Theme
 */

export const Colors = {
  // Light theme with white background per user request
  light: {
    primary: '#020617', // Deep slate/black
    accent: '#06b6d4', // Bright cyan
    secondary: '#14b8a6', // Soft teal
    tertiary: '#10b981', // Emerald green
    background: '#ffffff', // Pure white
    surface: '#ffffff', // White surface
    
    // UI Helpers
    text: '#020617', // Dark text for white background
    textSecondary: '#64748b', // Muted slate
    textTertiary: '#94a3b8', // Darker slate
    border: 'rgba(0, 0, 0, 0.08)',
    glass: 'rgba(255, 255, 255, 0.8)',
    glassBorder: 'rgba(0, 0, 0, 0.1)',
    
    // Status
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4',
  },
  dark: {
    primary: '#ffffff', // High contrast for active icons/titles
    accent: '#06b6d4', // Bright cyan
    secondary: '#14b8a6', // Soft teal
    tertiary: '#10b981', // Emerald green
    background: '#020617', // Deep slate
    surface: '#0f172a', // Slightly elevated slate for cards
    
    // UI Helpers
    text: '#f1f5f9', // Light slate
    textSecondary: '#94a3b8', // Muted slate
    textTertiary: '#64748b', // Darker slate
    border: 'rgba(255, 255, 255, 0.1)', // Crisp white border
    glass: 'rgba(15, 23, 42, 0.6)', // Proper dark glass
    glassBorder: 'rgba(255, 255, 255, 0.1)',
    
    // Status
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4',
  }
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
  massive: 48,
  header: 56,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 24, // Standard nested card radius
  xl: 32, // Signature oversized radius
  full: 9999,
};

export const Fonts = {
  regular: 'Satoshi-Regular',
  medium: 'Satoshi-Medium',
  bold: 'Satoshi-Bold',
  black: 'Satoshi-Black',
  display: 'ClashGrotesk-Medium',
  displayBold: 'ClashGrotesk-Bold',
  mono: 'SpaceGrotesk-Regular',
};

// Fallbacks if fonts aren't loaded yet
export const Typography = {
  hero: {
    fontSize: 48,
    fontFamily: Fonts.displayBold,
    lineHeight: 52,
    letterSpacing: -1,
  },
  h1: {
    fontSize: 28,
    fontFamily: Fonts.displayBold,
    lineHeight: 36,
  },
  h2: {
    fontSize: 20,
    fontFamily: Fonts.display,
    lineHeight: 28,
  },
  h3: {
    fontSize: 16,
    fontFamily: Fonts.display,
    lineHeight: 24,
  },
  body: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    lineHeight: 20,
  },
  label: {
    fontSize: 10,
    fontFamily: Fonts.bold,
    letterSpacing: 1.5,
    textTransform: 'uppercase' as const,
  },
  utility: {
    fontSize: 12,
    fontFamily: Fonts.mono,
    letterSpacing: 1,
  },
  small: {
    fontSize: 12,
    fontFamily: Fonts.medium,
    lineHeight: 16,
  },
  caption: {
    fontSize: 10,
    fontFamily: Fonts.regular,
    lineHeight: 14,
  }
};

export const Shadows = {
  soft: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 4,
  },
  cyan: { // Glow effect
    shadowColor: '#06b6d4',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  strong: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.3,
    shadowRadius: 32,
    elevation: 12,
  }
};

export const Animations = {
  duration: 300,
  easing: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // ease-in-out
};
