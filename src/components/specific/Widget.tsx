import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { GlassCard } from '@/components/common/GlassCard';
import { useAppTheme } from '@/context/ThemeContext';
import { Spacing, BorderRadius } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/common/themed-text';

interface WidgetProps {
  title: string;
  subtitle: string;
  iconName: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  accent?: boolean;
}

export function Widget({ title, subtitle, iconName, onPress, accent }: WidgetProps) {
  const { colors: theme } = useAppTheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.touchable}>
      <GlassCard style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }, accent && { backgroundColor: theme.accent }]}>
        <View style={styles.header}>
           <View style={[styles.iconHolder, { backgroundColor: accent ? theme.tint18 : theme.tint12 }]}>
             <Ionicons name={iconName} size={28} color={accent ? theme.accentText : theme.accent} />
           </View>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={[styles.title, { color: accent ? theme.accentText : theme.primary }]}>{title}</ThemedText>
          <ThemedText style={[styles.subtitle, { color: accent ? theme.accentText : theme.textSecondary }]}>{subtitle}</ThemedText>
        </View>
      </GlassCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    minWidth: '45%',
    margin: Spacing.sm,
  },
  card: {
    height: 180,
    justifyContent: 'space-between',
    padding: Spacing.lg,
    borderWidth: 1,
    borderRadius: BorderRadius.md, // 24px for nested/secondary widgets
  },
  iconHolder: {
    width: 48,
    height: 48,
    borderRadius: 24, // Circular per spec rules for icons
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textContainer: {
    marginTop: 'auto',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito_900Black',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Nunito_700Bold',
    marginTop: 4,
  },
});
