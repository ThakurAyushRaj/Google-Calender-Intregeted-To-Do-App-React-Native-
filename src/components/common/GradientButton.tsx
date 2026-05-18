import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, Animated, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, BorderRadius, Shadows, Typography, Animations } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ThemedText } from './themed-text';

interface GradientButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: React.ReactNode;
}

export function GradientButton({ title, icon, style, ...props }: GradientButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
        style={[styles.buttonContainer, style]}
        {...props}
      >
        <LinearGradient
          colors={[theme.accent, theme.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <ThemedText style={styles.title}>{title}</ThemedText>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: BorderRadius.xl, // 2rem/32px per spec for CTA buttons
    overflow: 'hidden',
    ...Shadows.cyan,
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  title: {
    ...Typography.body,
    fontFamily: 'Satoshi-Bold',
    color: '#020617', // Dark text on bright cyan gradient
    fontSize: 16,
  },
  iconContainer: {
    marginRight: 8,
  },
});
