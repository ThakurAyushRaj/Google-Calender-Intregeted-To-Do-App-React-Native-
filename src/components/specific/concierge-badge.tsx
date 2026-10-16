import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming, Easing } from 'react-native-reanimated';
import { Typography } from '@/constants/theme';
import { ThemedText } from '@/components/common/themed-text';
import { useAppTheme } from '@/context/ThemeContext';

export function ConciergeBadge() {
  const { colors: theme } = useAppTheme();
  const translateY = useSharedValue(-5);

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(5, {
        duration: 2000, // 4s total loop
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[styles.container, { backgroundColor: theme.accent }, animatedStyle]}>
      <ThemedText style={[styles.number, { color: theme.accentText }]}>01</ThemedText>
      <ThemedText type="utility" style={[styles.text, { color: theme.accentText }]}>Concierge</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // Shadows
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  number: {
    ...Typography.hero,
    fontSize: 48,
    fontStyle: 'italic',
    lineHeight: 48,
  },
  text: {
    ...Typography.utility,
    fontSize: 8,
    marginTop: 4,
  },
});
