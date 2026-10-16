/**
 * Global Design System Constants & Theme Engine
 * Style: Rich Bordeaux Wine & Crimson Rose (Classic Luxury Fusion)
 * 
 * 💡 SINGLE SOURCE OF TRUTH:
 * Changing values in this file immediately updates colors, tints,
 * surfaces, text, borders, and shadows globally across the entire app!
 */

export const Colors = {
  // Light theme: Warm luxury pearl cream with refined Bordeaux wine and crimson rose
  light: {
    primary: '#1C0A0E', // Deep wine obsidian
    accent: '#E11D48', // Vibrant bordeaux rose
    secondary: '#9F1239', // Deep rich bordeaux
    tertiary: '#FB7185', // Soft rose petal highlight
    background: '#FAF5F5', // Warm luxury pearl cream
    surface: '#FFFFFF', // Elevated crisp porcelain
    card: '#FFFFFF',
    
    // UI Helpers & Text
    text: '#1C0A0E', // Deep obsidian wine
    textSecondary: '#785E65', // Sophisticated cashmere plum
    textTertiary: '#A89299', // Soft mauve stone
    border: 'rgba(225, 29, 72, 0.14)', // Subtle rose trim
    glass: 'rgba(255, 255, 255, 0.88)',
    glassBorder: 'rgba(225, 29, 72, 0.20)',
    accentText: '#FFFFFF', // Contrast text on accent background
    
    // Dynamic Tints
    tint08: 'rgba(225, 29, 72, 0.08)',
    tint12: 'rgba(225, 29, 72, 0.12)',
    tint18: 'rgba(225, 29, 72, 0.18)',
    tint35: 'rgba(225, 29, 72, 0.35)',
    
    // Status
    success: '#10B981',
    warning: '#F59E0B',
    error: '#E11D48',
    info: '#E11D48',
  },
  dark: {
    primary: '#FFF1F2', // Soft luminous pearl rose
    accent: '#FB7185', // Luminous rose crimson
    secondary: '#BE123C', // Rich satin bordeaux
    tertiary: '#FDA4AF', // Soft rose shimmer
    background: '#100407', // Deep bordeaux obsidian onyx
    surface: '#1C0A0E', // Elevated smoked wine onyx
    card: '#1C0A0E',
    
    // UI Helpers & Text
    text: '#FFF1F2', // Warm pearl rose
    textSecondary: '#BDA1A8', // Soft cashmere mauve
    textTertiary: '#7E646B', // Muted dark wine stone
    border: 'rgba(251, 113, 133, 0.18)', // Delicate luminous rose border
    glass: 'rgba(28, 10, 14, 0.80)', // Smoked velvet wine glass
    glassBorder: 'rgba(251, 113, 133, 0.22)',
    accentText: '#100407', // Dark contrast on luminous rose
    
    // Dynamic Tints
    tint08: 'rgba(251, 113, 133, 0.08)',
    tint12: 'rgba(251, 113, 133, 0.12)',
    tint18: 'rgba(251, 113, 133, 0.18)',
    tint35: 'rgba(251, 113, 133, 0.35)',
    
    // Status
    success: '#10B981',
    warning: '#F59E0B',
    error: '#FB7185',
    info: '#FB7185',
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
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  glow: { // Signature dynamic accent glow
    shadowColor: Colors.light.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },
  accent: {
    shadowColor: Colors.light.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },
  gold: { // Backward compatibility alias
    shadowColor: Colors.light.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },
  cyan: { // Backward compatibility alias
    shadowColor: Colors.light.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },
  sm: {
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  strong: {
    shadowColor: Colors.light.primary,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.22,
    shadowRadius: 32,
    elevation: 12,
  }
};

export const Animations = {
  duration: 300,
  easing: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // ease-in-out
};
