import React from 'react';
import { StyleSheet, View, ViewProps, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface GlassOverlayProps extends ViewProps {
  intensity?: number;
  tint?: 'light' | 'dark' | 'default';
}

export function GlassOverlay({ children, style, intensity = 50, tint, ...props }: GlassOverlayProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const resolvedTint = tint || (colorScheme === 'dark' ? 'dark' : 'light');

  return (
    <View style={[StyleSheet.absoluteFill, styles.container, style]} {...props}>
      {Platform.OS !== 'web' ? (
        <BlurView intensity={intensity} style={StyleSheet.absoluteFill} tint={resolvedTint} />
      ) : (
        <View 
          style={[
            StyleSheet.absoluteFill, 
            { 
              backgroundColor: resolvedTint === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.2)',
              // @ts-ignore
              backdropFilter: `blur(${intensity / 1.5}px)`,
              // @ts-ignore
              WebkitBackdropFilter: `blur(${intensity / 1.5}px)`,
            }
          ]} 
        />
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
