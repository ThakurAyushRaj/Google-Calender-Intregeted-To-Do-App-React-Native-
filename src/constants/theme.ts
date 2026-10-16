
export const Colors = {
  light: {
    primary: '#0F172A', 
    accent: '#16c3c6', 
    secondary: '#5f78bd', 
    tertiary: '#60A5FA', 
    background: '#e8f3f5', 
    surface: '#ecf7f7', 
    card: '#fcfcfe',
    
    // UI Helpers & Text
    text: '#0F172A', 
    textSecondary: '#64748B', 
    textTertiary: '#94A3B8', 
    border: 'rgba(37, 99, 235, 0.12)', 
    glass: 'rgba(255, 255, 255, 0.88)',
    glassBorder: 'rgba(37, 99, 235, 0.18)',
    accentText: '#FFFFFF', 
    
    // Dynamic Tints
    tint08: 'rgba(37, 99, 235, 0.08)',
    tint12: 'rgba(37, 99, 235, 0.12)',
    tint18: 'rgba(37, 99, 235, 0.18)',
    tint35: 'rgba(37, 99, 235, 0.35)',
    
    // Status
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#2563EB',
  },
  dark: {
    primary: '#F8FAFC', 
    accent: '#38BDF8', 
    secondary: '#2563EB', 
    tertiary: '#93C5FD', 
    background: '#070D18', 
    surface: '#0F1A2E', 
    card: '#0F1A2E',
    
    // UI Helpers & Text
    text: '#F8FAFC', 
    textSecondary: '#94A3B8', 
    textTertiary: '#64748B', 
    border: 'rgba(56, 189, 248, 0.16)', 
    glass: 'rgba(15, 26, 46, 0.82)', 
    glassBorder: 'rgba(56, 189, 248, 0.22)',
    accentText: '#070D18', 
    
    // Dynamic Tints
    tint08: 'rgba(56, 189, 248, 0.08)',
    tint12: 'rgba(56, 189, 248, 0.12)',
    tint18: 'rgba(56, 189, 248, 0.18)',
    tint35: 'rgba(56, 189, 248, 0.35)',
    
    // Status
    success: '#10B981',
    warning: '#F59E0B',
    error: '#F87171',
    info: '#38BDF8',
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
